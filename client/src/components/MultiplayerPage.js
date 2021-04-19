import apiCalls from '../Utils/apiCalls';
import originalBoard from '../Utils/OriginalBoard';
import {useState, useEffect} from 'react';
import AllMultiplayerGames from './AllMultiplayerGames';
import NewGameDashboard from './NewGameDashboard';
import GameCreateJoinModal from './GameCreateJoinModal';
import UserSeeksDashboard from './UserSeeksDashboard';
import OtherSeeksDashboard from './OtherSeeksDashboard';
import TogglingButton from './TogglingButton';
const MultiplayerPage = ({user}) => {
    const [allGames, setAllGames] = useState([]);
    const [gameAdded, setGameAdded] = useState(0);
    const [toggleForm, setToggleForm] = useState(false);
    const [toggleModal, setToggleModal] = useState(false);
    const [toggleUserSeeks, setToggleUserSeeks] = useState(false);
    const [toggleOtherSeeks, setToggleOtherSeeks] = useState(false);
    const [userOpenGames, setUserOpenGames] = useState([]);
    const [otherOpenGames, setOtherOpenGames] = useState([]);
useEffect(async() => {
   await retrieveGames();
   await retrieveOpenGames();
   

}, [gameAdded])
const toggleNewGameDisplay = (popup = false)=>{
    // console.log(popup);
    if(popup !== false){
        setToggleModal('show');
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
        const currentGames = await apiCalls.getGames();
        console.log(currentGames);
        if(currentGames.data){
        setAllGames(currentGames.data);
        }
    }
    return (<>
    <GameCreateJoinModal hideShow = {toggleModalDisplay} display={toggleModal}/>
        <div className = 'multiplayer-page'>
           <TogglingButton toggleBool = {toggleForm} toggleFunc={toggleNewGameDisplay} trueString = 'cancel new game' falseString = 'Start a new game' />
           &nbsp;&nbsp;&nbsp;
           <NewGameDashboard makeNewGame={makeNewGame} hideShowForm = {toggleNewGameDisplay} display={toggleForm} />
           <TogglingButton toggleBool = {toggleUserSeeks} toggleFunc={toggleUserSeeksDisplay} trueString = 'Hide your open game requests' falseString = 'Show your open game requests' />
           <UserSeeksDashboard display={toggleUserSeeks} openSeeks = {userOpenGames}/>
           <TogglingButton toggleBool = {toggleOtherSeeks} toggleFunc={toggleOtherSeeksDisplay} trueString = 'Hide these requests' falseString ='Game requests from others'  />
           <OtherSeeksDashboard display={toggleOtherSeeks} openSeeks={otherOpenGames}/>
           <AllMultiplayerGames currentGames = {allGames}/>
        </div>
        </>
    )
}

export default MultiplayerPage