import './App.css';
import Board from './components/Board'
import { useState, useContext } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CalculateLegalMoves from './Utils/CalculateLegalMoves';
import CalculateGameStatus from './Utils/CalculateGameStatus';
import GameEndModal from './components/GameEndModal';
import originalBoard from './Utils/OriginalBoard';
import Footer from './components/Footer';
import About from './components/About';
import TopNav from './components/TopNav';
import Preferences from './components/Preferences';
import Rules from './components/Rules';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import PasswordReset from './auth/PasswordReset';
import UserProvider from './providers/UserProvider';
import MultiplayerPage from './components/MultiplayerPage';
// import {UserContext} from './providers/UserProvider';
import {UserContext} from './providers/FunctionalUserProvider';
import {auth, generateUserDocument} from './auth/firebase';
import PlayMultiplayer from './components/PlayMultiplayer';

function App() {
  const [firstPlayersTurn, setFirstPlayersTurn] = useState(true);
  const [board, setBoard] = useState(originalBoard);
  const [history, setHistory] = useState([{ board: board, historyIndex: 0 }]);
  const [currentHistoryIndex, setCurrentHistoryIndex] = useState(0);
  const [allowedMultiJumps, setAllowedMultiJumps] = useState([]);
  const [gameOver, setGameOver] = useState({ gameOver: false, winner: null });
  const [pieceShape, setPieceShape] = useState('circle');
  const[boardstyle, setBoardstyle] = useState('brown');
  const[flipBoard, setFlipBoard] = useState(false);
  const attemptMove = (num, origin, playerOnesPiece) => {
    num = parseInt(num, 10);
    origin = parseInt(origin, 10);
    if (num === origin || !num) return;
    if ((playerOnesPiece === 'black' && firstPlayersTurn === false) || (playerOnesPiece === 'red' && firstPlayersTurn === true)) return;
    if (board[num].hasPiece === true) return;
    if (allowedMultiJumps.length > 0 && !allowedMultiJumps.includes(parseInt(num, 10))) return;
    if (currentHistoryIndex !== history.length - 1 && history.length > 0) return;
    let res = CalculateLegalMoves(parseInt(num, 10), parseInt(origin, 10), board, firstPlayersTurn);
    if (!res.valid) return;
    if (res.multiJump) {
      setAllowedMultiJumps(res.multiJumpOptions);
    } else {
      setFirstPlayersTurn(!firstPlayersTurn);
      setAllowedMultiJumps([]);
    }
    const newBoard = board.map((item, index) => index == num ? { ...item, hasPiece: true, pieceColor: board[origin].pieceColor, pieceIsKing: (res.isKing) } : index == origin ? { ...item, hasPiece: false, pieceColor: null, pieceIsKing: false } : (res.jump === true && index === res.jumpedSquare) ? { ...item, hasPiece: false, pieceColor: null, pieceIsKing: false } : item);
    setBoard(newBoard);

    setHistory([...history, { board:newBoard, historyIndex: currentHistoryIndex + 1 }]);
    setCurrentHistoryIndex(currentHistoryIndex + 1);
    let gameStatusCheck = CalculateGameStatus(newBoard, !firstPlayersTurn);
    if (gameStatusCheck.gameOver === true) {
      setGameOver(gameStatusCheck);
    }

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
  const resetGame = ()=>{
    setFirstPlayersTurn(true);
    setBoard(originalBoard);
    setHistory([{ board: originalBoard, historyIndex: 0 }]);
    setCurrentHistoryIndex(0);
    setAllowedMultiJumps([]);
    setGameOver({ gameOver: false, winner: null });
    let hideModal = document.getElementsByClassName('end-modal')[0];
    hideModal.style.visibility = 'visible';
  }
const changeShape = (target)=>{
  setPieceShape(target);
}
const changeBoardStyle = (target)=>{
  setBoardstyle(target);
}
const rotateBoard = ()=>{
  setFlipBoard(!flipBoard);
}
//authentication
const [user, setUser] = useState(null);
auth.onAuthStateChanged(async userAuth=>{
  const user = await generateUserDocument(userAuth);
  // console.log(user);
  setUser(userAuth);
})
  return ( user == null ?
    <UserContext.Provider value={user}>
  <Router>
    <Route path='/' exact component = {SignIn}/>
    <Route path='/signUp' component = {SignUp}/>
    <Route path='/passwordReset' component = {PasswordReset}/>

  </Router>
  </UserContext.Provider >
  :
  <UserContext.Provider value={user}>
    <Router>
      <div className="App">
        <TopNav/>
      <Route path='/' exact render={(props)=>(
      <>
           <Board boardState={board} setBoard={attemptMove} styleInfo = {{shape: pieceShape, boardStyle: boardstyle, flipboard: flipBoard}} />
      <Dashboard styleInfo = {{shape: pieceShape, boardStyle: boardstyle, flipboard: flipBoard}}  resetGame = {resetGame} player={firstPlayersTurn} gameOver={gameOver.gameOver} viewHistory={traverseHistory} rotateBoard = {rotateBoard} />
      <GameEndModal resetGame = {resetGame} gameOver={gameOver} />
      
      </>)}/>
    <Route path ='/about' component = {About}/> 
    <Route path='/preferences' render = {(props)=>(
      <Preferences changeBoardstyle = {changeBoardStyle} changeShape = {changeShape} style = {{shape: pieceShape, boardStyle: boardstyle}}/>
    )}/>
    <Route path='/rules' component = {Rules}></Route>
    <Route path = '/multiplayer' render = {(props)=>(
      <MultiplayerPage user = {user}/>
    )}/>
        <Route path = '/play-multiplayer' render = {(props)=>(
      <PlayMultiplayer style ={{shape: pieceShape, boardStyle: boardstyle}}/>
    )}/>

      <Footer />
    </div>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
