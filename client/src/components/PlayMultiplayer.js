import {useLocation} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Board from './Board';
import CalculateLegalMoves from './../Utils/CalculateLegalMoves';
import CalculateGameStatus from './../Utils/CalculateGameStatus';
import originalBoard from './../Utils/OriginalBoard';
import apiCalls from './../Utils/apiCalls';
const PlayMultiplayer = ({style}) => {
useEffect(()=>{
  let intervalGameUpdate = setInterval(refreshGameData, 2000);
  return ()=>clearInterval(intervalGameUpdate);
},[])


   const location = useLocation();
   if(location.locationInfo == null){
     location.locationInfo = {game: {history:[0], board:originalBoard }, user:{}}
   }
    const {game, user} = location.locationInfo;
    const userIsPlayerOne = user.uid == game.playerOne;
    //add state variables with original values pulled from game object
    const [firstPlayersTurn, setFirstPlayersTurn] = useState(game.playerOnesTurn);
    const [board, setBoard] = useState(game.board);
    const [history, setHistory] = useState(game.history);
    const [currentHistoryIndex, setCurrentHistoryIndex] = useState(game.history.length -1);
    const [allowedMultiJumps, setAllowedMultiJumps] = useState([]);
    const [gameOver, setGameOver] = useState({ gameOver: game.gameOver, winner: null });
    const [currentUsersTurn, setCurrentUsersTurn] = useState((game.playerOnesTurn && game.playerOne === user.uid) ||(!game.playerOnesTurn && game.playerTwo === user.uid));
  //  console.log(game.history);
   const refreshGameData = async()=>{
     if(! game.id) return;
    //  console.log('refresh');
     let res = await apiCalls.getGameById(game.id);
     if(!res.status === 200) return;
     let updatedGame = res.data;
     console.log(updatedGame);
     if(updatedGame.history.length <= history.length)return;
     console.log('time to update state');
   }

 
    const attemptMove = async(num, origin, playerOnesPiece) => {
      if(!currentUsersTurn) return;
        num = parseInt(num, 10);
        origin = parseInt(origin, 10);
        console.log(`goal: ${num} origin: ${origin}`);
        console.log(history);
        if (num === origin || !num) return;
        if ((playerOnesPiece === 'black' && ! userIsPlayerOne) || (playerOnesPiece === 'red' && userIsPlayerOne)) return;
        if (board[num].hasPiece === true) return;
        if (allowedMultiJumps.length > 0 && !allowedMultiJumps.includes(parseInt(num, 10))) return;
        if (currentHistoryIndex !== history.length - 1 && history.length > 0) return;
        let res = CalculateLegalMoves(parseInt(num, 10), parseInt(origin, 10), board, firstPlayersTurn);
        let preservedFirstPlayersTurn = firstPlayersTurn;
        if (!res.valid) return;
        if (res.multiJump) {
          setAllowedMultiJumps(res.multiJumpOptions);
        } else {
          setFirstPlayersTurn(!firstPlayersTurn);
          setAllowedMultiJumps([]);
        }
        const newBoard = board.map((item, index) => index == num ? { ...item, hasPiece: true, pieceColor: board[origin].pieceColor, pieceIsKing: (res.isKing) } : index == origin ? { ...item, hasPiece: false, pieceColor: null, pieceIsKing: false } : (res.jump === true && index === res.jumpedSquare) ? { ...item, hasPiece: false, pieceColor: null, pieceIsKing: false } : item);
        //hook into db before updating state, that way client-side board only updates after database updates.
        setBoard(newBoard);
    
        setHistory([...history, { board:newBoard, historyIndex: currentHistoryIndex + 1 }]);
        setCurrentHistoryIndex(currentHistoryIndex + 1);
        let gameStatusCheck = CalculateGameStatus(newBoard, !firstPlayersTurn);
        if (gameStatusCheck.gameOver === true) {
          setGameOver(gameStatusCheck);
        }
        const gameUpdate = await apiCalls.updateGame({id: game.id,playerOne: game.playerOne, playerTwo: game.playerTwo, playerOneDisplayName: game.playerOneDisplayName, playerTwoDisplayName: game.playerTwoDisplayName,  playerOnesTurn : ! game.playerOnesTurn, board: newBoard, history: [...game.history,{board: newBoard, historyIndex: game.history.length} ], gameOver: gameStatusCheck.gameOver,winner: gameStatusCheck.gameOver && user.uid });
        console.log(gameUpdate);
        setCurrentUsersTurn(res.multiJump);
      }
  if(!user.uid) return(<div className = 'header'>No multiplayer game has been chosen.</div>)
    return (
        <> 
            <h4 className = 'header'>{game.playerOneDisplayName} vs {game.playerTwoDisplayName}</h4>
          <Board boardState={board} setBoard={attemptMove} styleInfo = {{shape: style.shape, boardStyle: style.boardStyle, flipboard: !userIsPlayerOne}} />
        </>
    )
}

export default PlayMultiplayer
