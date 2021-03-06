import apiCalls from '../Utils/apiCalls';
import originalBoard from '../Utils/OriginalBoard';
import { useState, useEffect } from 'react';
import NewGameDashboard from './NewGameDashboard';
import GameCreateJoinModal from './GameCreateJoinModal';
import UserSeeksDashboard from './UserSeeksDashboard';
import OtherSeeksDashboard from './OtherSeeksDashboard';
import TogglingButton from './TogglingButton';
import GamesInProgress from './GamesInProgress';
import PreviousGamesDashboard from './PreviousGamesDashboard';
const MultiplayerPage = ({ user }) => {
    const [gameAdded, setGameAdded] = useState(0);
    const [toggleForm, setToggleForm] = useState(false);
    const [toggleModal, setToggleModal] = useState(false);
    const [toggleUserSeeks, setToggleUserSeeks] = useState(false);
    const [toggleOtherSeeks, setToggleOtherSeeks] = useState(false);
    const [togglePreviousGames, setTogglePreviousGames] = useState(false);
    const [userOpenGames, setUserOpenGames] = useState([]);
    const [otherOpenGames, setOtherOpenGames] = useState([]);
    const [bannerMessage, setBannerMessage] = useState('');
    const [userGamesInProgress, setUserGamesInProgress] = useState([]);
    const [refreshBuffer] = useState(true);
    const [refreshId] = useState();
    const [usersPastGames, setUsersPastGames] = useState([]);
    useEffect(async () => {
        await pullAllData();

    }, [gameAdded])
    useEffect(() => {
        if (!refreshBuffer || refreshId) return () => clearInterval(refreshId);
        let callRefresh = setInterval(gameRefresh, 5000);
        return () => clearInterval(callRefresh);
    }, [])
    const pullAllData = async () => {
        await retrieveOpenGames();
        await retrieveCurrentGames();
        await retrievePreviousGames();
    }

    const gameRefresh = () => {
        pullAllData();
        console.log('tick');
    }


    const toggleNewGameDisplay = (popup = false) => {
        if (popup !== false) {
            setToggleModal('show');
            setBannerMessage('New Game created! Awaiting opponent.');
        }
        setToggleForm(!toggleForm);
    }
    const toggleUserSeeksDisplay = () => {
        setToggleUserSeeks(!toggleUserSeeks);
    }
    const toggleOtherSeeksDisplay = () => {
        setToggleOtherSeeks(!toggleOtherSeeks);
    }
    const togglePreviousGamesDisplay = () => {
        setTogglePreviousGames(!togglePreviousGames);
    }
    const toggleModalDisplay = (show = false) => {
        setToggleModal(show === 'show' ? true : !toggleModal);
    }
    const makeNewGame = async (playerChoice, alias) => {
        const newGame = {
            board: originalBoard,
            history: [{ board: originalBoard, historyIndex: 0 }],
            gameOver: false,
            playerOnesTurn: true
        }
        if (playerChoice === 'p1') {
            newGame.playerOne = user.uid;
            newGame.playerOneDisplayName = alias;
        } else if (playerChoice === 'p2') {
            newGame.playerTwo = user.uid;
            newGame.playerTwoDisplayName = alias;
        } else {
            return null;
        }

        const currentGames = await apiCalls.createGame(newGame);
        setGameAdded(gameAdded + 1);
        return currentGames;
    }
    const retrieveOpenGames = async () => {
        const currentOpenGames = await apiCalls.getOpenGames(user.uid);
        if (currentOpenGames.data != null) {
            const userOpenSeeks = [];
            const otherOpenSeeks = [];
            currentOpenGames.data.map((item, index) => item.playerOne === user.uid || item.playerTwo === user.uid ? userOpenSeeks.push(item) : otherOpenSeeks.push(item));
            setUserOpenGames(userOpenSeeks);
            setOtherOpenGames(otherOpenSeeks);
        }
    }
    const retrievePreviousGames = async () => {
        const previousGames = await apiCalls.getPastGames(user.uid);
        if (previousGames.data) setUsersPastGames(previousGames.data.sort((a, b) => a.updatedAt - b.updatedAt).reverse());
    }
    const retrieveCurrentGames = async () => {

        const gamesInProgress = await apiCalls.getGamesInProgress(user.uid);
        if (gamesInProgress.data) setUserGamesInProgress(gamesInProgress.data.sort((a, b) => a.history.length - b.history.length).reverse());
    }

    const removeGame = async (id) => {
        let res = await apiCalls.deleteGame(id);
        if (res.status === '200') setGameAdded(gameAdded + 1);
    }
    const joinGame = async (game, displayName) => {
        if (game.playerOne == null) {
            game.playerOne = user.uid;
            game.playerOneDisplayName = displayName;
        } else if (game.playerTwo == null) {
            game.playerTwo = user.uid;
            game.playerTwoDisplayName = displayName;
        }
        let join = await apiCalls.updateGame(game);
        if (join.status === 200) {
            setGameAdded(gameAdded + 1);
            setBannerMessage(`Succesfully joined game against ${game.playerOneDisplayName !== displayName ? game.playerOneDisplayName : game.playerTwoDisplayName}`);
            setToggleModal("show");
            return 'success';
        }
    }
    return (<>
        <GameCreateJoinModal message={bannerMessage} hideShow={toggleModalDisplay} display={toggleModal} />
        <div className='multiplayer-page'>
            &nbsp;&nbsp;<TogglingButton toggleBool={toggleForm} toggleFunc={toggleNewGameDisplay} trueString='cancel new game' falseString='Start a new game' />
           &nbsp;&nbsp;&nbsp;
           <NewGameDashboard makeNewGame={makeNewGame} hideShowForm={toggleNewGameDisplay} display={toggleForm} />
            <TogglingButton toggleBool={toggleUserSeeks} toggleFunc={toggleUserSeeksDisplay} trueString='Hide your open game requests' falseString='Show your open game requests' />&nbsp;&nbsp;&nbsp;
           <UserSeeksDashboard cancel={removeGame} display={toggleUserSeeks} openSeeks={userOpenGames} /><TogglingButton toggleBool={toggleOtherSeeks} toggleFunc={toggleOtherSeeksDisplay} trueString='Hide these requests' falseString='Game requests from others' />&nbsp;&nbsp;&nbsp;
           <OtherSeeksDashboard joinGame={joinGame} display={toggleOtherSeeks} openSeeks={otherOpenGames} />
            <TogglingButton toggleBool={togglePreviousGames} toggleFunc={togglePreviousGamesDisplay} trueString='Hide previous games' falseString='Show previous games' />
            <PreviousGamesDashboard display={togglePreviousGames} user={user} games={usersPastGames} />
            <GamesInProgress user={user} games={userGamesInProgress} />
        </div>
    </>
    )
}

export default MultiplayerPage
