import apiCalls from '../Utils/apiCalls';
import originalBoard from '../Utils/OriginalBoard';
import {useState, useEffect} from 'react';
import AllMultiplayerGames from './AllMultiplayerGames';
import NewGameDashboard from './NewGameDashboard';
import GameCreateJoinModal from './GameCreateJoinModal';
import UserSeeksDashboard from './UserSeeksDashboard';
import OtherSeeksDashboard from './OtherSeeksDashboard';
import TogglingButton from './TogglingButton';
import GamesInProgress from './GamesInProgress';
const MultiplayerPage = ({user}) => {
    const [allGames, setAllGames] = useState([]);
    const [gameAdded, setGameAdded] = useState(0);
    const [toggleForm, setToggleForm] = useState(false);
    const [toggleModal, setToggleModal] = useState(false);
    const [toggleUserSeeks, setToggleUserSeeks] = useState(false);
    const [toggleOtherSeeks, setToggleOtherSeeks] = useState(false);
    const [userOpenGames, setUserOpenGames] = useState([]);
    const [otherOpenGames, setOtherOpenGames] = useState([]);
    const [bannerMessage, setBannerMessage] = useState('');
    const [userGamesInProgress, setUserGamesInProgress] = useState([]);
    const [refreshBuffer, setRefreshBuffer] = useState(true);
    const [refreshId, setRefreshId] = useState();
useEffect(async() => {
    await pullAllData();

}, [gameAdded])
useEffect(()=>{
if(!refreshBuffer || refreshId) return ()=>clearInterval(refreshId);
let callRefresh = setInterval(gameRefresh, 5000);
return ()=>clearInterval(callRefresh); 
},[])
const pullAllData = async()=>{
    await retrieveGames();
    await retrieveOpenGames();
    await retrieveCurrentGames(); 
}

const gameRefresh = ()=>{
    pullAllData();
    console.log('tick:' + new Date().getSeconds());
}


// const refreshRate = setInterval(gameRefresh, 5000);
const toggleNewGameDisplay = (popup = false)=>{
    // console.log(popup);
    if(popup !== false){
        setToggleModal('show');
        setBannerMessage('New Game created! Awaiting opponent.');
    }
setToggleForm(!toggleForm);
}
const toggleUserSeeksDisplay =()=>{
    setToggleUserSeeks(!toggleUserSeeks);
}
const toggleOtherSeeksDisplay = ()=>{
    setToggleOtherSeeks(!toggleOtherSeeks);
}
const toggleModalDisplay = (show = false)=>{
    setToggleModal(show==='show' ? true : !toggleModal);
}
     const makeNewGame =async (playerChoice, alias)=>{
         const newGame = {
             board: originalBoard,
             history: [{ board: originalBoard, historyIndex: 0 }],
             gameOver: false,
             playerOnesTurn: true
         }        
          if(playerChoice == 'p1'){
             newGame.playerOne = user.uid;
             newGame.playerOneDisplayName = alias;
         }else if(playerChoice == 'p2'){
             newGame.playerTwo = user.uid;
             newGame.playerTwoDisplayName = alias;
         }else{
             return null;
         }

         const currentGames = await apiCalls.createGame(newGame);
        //  console.log(currentGames);
         setGameAdded(gameAdded +1);
         return currentGames;
    }
    const retrieveOpenGames = async()=>{
        const currentOpenGames = await apiCalls.getOpenGames(user.uid);
        if(currentOpenGames.data != null){
            const userOpenSeeks = [];
            const otherOpenSeeks = [];
            currentOpenGames.data.map((item, index)=> item.playerOne == user.uid || item.playerTwo == user.uid ? userOpenSeeks.push(item) : otherOpenSeeks.push(item));
            setUserOpenGames(userOpenSeeks);
            setOtherOpenGames(otherOpenSeeks);
        }
    }

    const retrieveGames = async()=>{
        const currentGames = await apiCalls.getGames(user.uid);
    //    console.log(currentGames);
        if(currentGames.data){
            let currToSort = currentGames.data.sort((a,b)=> a.history.length - b.history.length);
            // currToSort.reverse()
        setAllGames(currToSort);
        }
    }
    const retrieveCurrentGames = async()=>{
        
        const gamesInProgress = await apiCalls.getGamesInProgress(user.uid);
   //     console.log(gamesInProgress.data);
        if(gamesInProgress.data)setUserGamesInProgress(gamesInProgress.data.sort((a,b)=>a.history.length-b.history.length).reverse());
    }
    const removeGame = async(id)=>{
        let res = await apiCalls.deleteGame(id);
        if(res.status =='200')setGameAdded(gameAdded +1);  
    }
    const joinGame = async (game, displayName)=>{
        if(game.playerOne == null){
            game.playerOne = user.uid;
            console.log(user.uid);
            game.playerOneDisplayName = displayName;
        }else if(game.playerTwo == null){
            game.playerTwo = user.uid;
            game.playerTwoDisplayName = displayName;
        }
        let join = await apiCalls.updateGame(game);
        if(join.status === 200){
            setGameAdded(gameAdded + 1);
            setBannerMessage(`Succesfully joined game against ${game.playerOneDisplayName != displayName ? game.playerOneDisplayName : game.playerTwoDisplayName}`);
           
            setToggleModal("show"); 
            return 'success';
        }
    }
    return (<>
    <GameCreateJoinModal message={bannerMessage} hideShow = {toggleModalDisplay} display={toggleModal}/>
        <div className = 'multiplayer-page'>
        &nbsp;&nbsp;<TogglingButton toggleBool = {toggleForm} toggleFunc={toggleNewGameDisplay} trueString = 'cancel new game' falseString = 'Start a new game' />
           &nbsp;&nbsp;&nbsp;
           <NewGameDashboard makeNewGame={makeNewGame} hideShowForm = {toggleNewGameDisplay} display={toggleForm} />
           <TogglingButton toggleBool = {toggleUserSeeks} toggleFunc={toggleUserSeeksDisplay} trueString = 'Hide your open game requests' falseString = 'Show your open game requests' />&nbsp;&nbsp;&nbsp;
           <UserSeeksDashboard cancel={removeGame} display={toggleUserSeeks} openSeeks = {userOpenGames}/>
           <TogglingButton toggleBool = {toggleOtherSeeks} toggleFunc={toggleOtherSeeksDisplay} trueString = 'Hide these requests' falseString ='Game requests from others'  />
           <OtherSeeksDashboard joinGame={joinGame} display={toggleOtherSeeks} openSeeks={otherOpenGames}/>
           <GamesInProgress user={user} games={userGamesInProgress}/>
        </div>
        </>
    )
}

export default MultiplayerPage
