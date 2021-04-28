import { useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Board from './Board';
import CalculateLegalMoves from './../Utils/CalculateLegalMoves';
import CalculateGameStatus from './../Utils/CalculateGameStatus';
import originalBoard from './../Utils/OriginalBoard';
import apiCalls from './../Utils/apiCalls';
import MultiplayerDashboard from './MultiplayerDashboard';
import MultiplayerGameEndModal from './MultiplayerGameEndModal';

const PlayMultiplayer = ({style, user}) => {
  const {id } = useParams();
  const [userIsPlayerOne, setUserIsPlayerOne] = useState(true);
  const [firstPlayersTurn, setFirstPlayersTurn] = useState(true);
  const [board, setBoard] = useState(originalBoard);
  const [history, setHistory] = useState([{ board: originalBoard, historyIndex: 0 }]);
  const [currentHistoryIndex, setCurrentHistoryIndex] = useState(0);
  const [allowedMultiJumps, setAllowedMultiJumps] = useState([]);
  const [gameOver, setGameOver] = useState({ gameOver: false, winner: null, winnerDisplayName: null });
  const [currentUsersTurn, setCurrentUsersTurn] = useState(false);
  const [gameInfoFromDatabase, setGameInfoFromDatabase] = useState({});
  const [initialLoad, setInitialLoad] = useState(true);


useEffect(()=>{
  refreshGameData(id);
  let intervalGameUpdate = setInterval(refreshGameData, 2000);
  return ()=>clearInterval(intervalGameUpdate);
},[gameInfoFromDatabase]);
  const updateStateFromDatabase = (data)=>{
    setUserIsPlayerOne(user.uid === data.playerOne);
    setFirstPlayersTurn(data.playerOnesTurn);
    setBoard(data.board);
 //   console.log(data.history);
    setInitialLoad(false);
    setHistory(data.history);
    setCurrentHistoryIndex(data.history.length -1);
    console.log(data.history[data.history.length -1].multijumpOptions);
    setAllowedMultiJumps(data.history[data.history.length -1].multijumpOptions);
    setGameOver({gameOver: data.gameOver, winner: data.winner, winnerDisplayName : data.winner ? data.winner === data.playerOne ? data.playerOneDisplayName : data.playerTwoDisplayName : null});
    setCurrentUsersTurn((data.playerOnesTurn && data.playerOne === user.uid) ||(!data.playerOnesTurn && data.playerTwo === user.uid));
    setGameInfoFromDatabase(data);
  }





   const refreshGameData = async(dbId = id)=>{
    //  console.log(history);
     if(! dbId) return;
     if(gameOver.gameOver) return;
     let res = await apiCalls.getGameById(dbId);
     if(!res.status === 200) return;
     let updatedGame = await res.data;
   //  console.log(updatedGame);
  //   console.log(updatedGame.history.length, history.length);
     if(updatedGame.history.length <= history.length && initialLoad === false && updatedGame.gameOver === false )return;
    updateStateFromDatabase(updatedGame);
   }

 
    const attemptMove = async(num, origin, playerOnesPiece) => {
      // console.log(history);
      if(!currentUsersTurn){
        console.log('not current users turn');
        return;
      } 
      if(gameInfoFromDatabase.gameOver || gameOver.gameOver) return;
        num = parseInt(num, 10);
        origin = parseInt(origin, 10);
  //      console.log(`goal: ${num} origin: ${origin}`);
        // console.log(history);
        if (num === origin || !num) return;
        if ((playerOnesPiece === 'black' && ! userIsPlayerOne) || (playerOnesPiece === 'red' && userIsPlayerOne)) return;
        if (board[num].hasPiece === true) return;
        console.log(allowedMultiJumps);
        if (allowedMultiJumps !== undefined && allowedMultiJumps.length && !allowedMultiJumps.includes(parseInt(num, 10))) return;
        if (currentHistoryIndex !== history.length - 1 && history.length > 0) return;
        let res = CalculateLegalMoves(parseInt(num, 10), parseInt(origin, 10), board, firstPlayersTurn);
        if (!res.valid) return;
        if (res.multiJump) {
          setAllowedMultiJumps(res.multiJumpOptions);
        } else {
          setFirstPlayersTurn(!firstPlayersTurn);
          setAllowedMultiJumps([]);
        }
        const newBoard = board.map((item, index) => index === num ? { ...item, hasPiece: true, pieceColor: board[origin].pieceColor, pieceIsKing: (res.isKing) } : index === origin ? { ...item, hasPiece: false, pieceColor: null, pieceIsKing: false } : (res.jump === true && index === res.jumpedSquare) ? { ...item, hasPiece: false, pieceColor: null, pieceIsKing: false } : item);
        //hook into db before updating state, that way client-side board only updates after database updates.
        setBoard(newBoard);
    
        setHistory([...history, { board:newBoard, historyIndex: currentHistoryIndex + 1 }]);
        setCurrentHistoryIndex(currentHistoryIndex + 1);
        let gameStatusCheck = CalculateGameStatus(newBoard, !firstPlayersTurn);
        if (gameStatusCheck.gameOver === true) {
          setGameOver(gameStatusCheck);
        }
        const gameUpdate = await apiCalls.updateGame({id: id,playerOne: gameInfoFromDatabase.playerOne, playerTwo: gameInfoFromDatabase.playerTwo, playerOneDisplayName: gameInfoFromDatabase.playerOneDisplayName, playerTwoDisplayName: gameInfoFromDatabase.playerTwoDisplayName,  playerOnesTurn : res.multiJump ? gameInfoFromDatabase.playerOnesTurn : !gameInfoFromDatabase.playerOnesTurn, board: newBoard, history: [...gameInfoFromDatabase.history,{board: newBoard, historyIndex: gameInfoFromDatabase.history.length, multijumpOptions: res.multiJump ? res.multiJumpOptions : []} ], gameOver: gameStatusCheck.gameOver,winner: gameStatusCheck.gameOver ? user.uid : null });
        console.log(gameUpdate);
        setCurrentUsersTurn(res.multiJump);
      }
      const traverseHistory = (direction) => {
        if (history.length === 1) return;
        if (direction === 'left' && currentHistoryIndex > 0) {
          setBoard(history[currentHistoryIndex - 1].board);
          setCurrentHistoryIndex(currentHistoryIndex - 1);
    
        }
        if (direction === 'present') {
          setCurrentHistoryIndex(history.length - 1);
          setBoard(history[history.length - 1].board);
        }
        if (direction === 'right' && currentHistoryIndex < history.length - 1) {
          setBoard(history[currentHistoryIndex + 1].board);
          setCurrentHistoryIndex(currentHistoryIndex + 1);
        }
    
        if (direction === 'beginning') {
          setBoard(history[0].board);
          setCurrentHistoryIndex(0);
        }
      }
      const resign = async()=>{
        console.log('resign')
        if(!id) return;
        if(gameOver.gameOver) return;
        let resignGame =  await apiCalls.updateGame({...gameInfoFromDatabase, gameOver: true, winner: user.uid === gameInfoFromDatabase.playerOne ? gameInfoFromDatabase.playerTwo : gameInfoFromDatabase.playerOne });
        console.log(resignGame);
        if(resignGame.status === 200) setGameOver({gameOver: true, winner: user.uid ===gameInfoFromDatabase.playerOne ? gameInfoFromDatabase.playerTwo : gameInfoFromDatabase.playerOne,  winnerDisplayName : gameInfoFromDatabase.playerOne === user.uid ? gameInfoFromDatabase.playerTwoDisplayName : gameInfoFromDatabase.playerOneDisplayName })

      }

  if(!id) return(<div className = 'header'>No multiplayer game has been chosen.</div>)
    return (
        <> 
            <h4 className = 'header'>{gameInfoFromDatabase.playerOneDisplayName}{gameInfoFromDatabase.playerOne === user.uid ? '(you)' : ''} vs {gameInfoFromDatabase.playerTwoDisplayName}{gameInfoFromDatabase.playerTwo === user.uid ? '(you)' : ''}</h4>
          <Board boardState={board} setBoard={attemptMove} styleInfo = {{shape: style.shape, boardStyle: style.boardStyle, flipboard: !userIsPlayerOne}} />
          <MultiplayerDashboard resign={resign} viewHistory = {traverseHistory} styleInfo = {style} gameOver = {gameOver} usersTurn = {currentUsersTurn} playerOnesTurn = {gameInfoFromDatabase.playerOnesTurn} />
          <MultiplayerGameEndModal gameOver = {gameOver} />
        </>
    )
}

export default PlayMultiplayer
