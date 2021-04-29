import MoveArrows from './MoveArrows'; 
import PlayAgain from './PlayAgain';
import FlipBoard from './FlipBoard';
const Dashboard = ({player, viewHistory, gameOver, resetGame, styleInfo, rotateBoard}) => {
    return (
        <div className = 'dashboard'>
           <span className = 'player-info grid-item'>{gameOver ? `Game over! ` : player ? `Player one's turn` : `Player two's turn`} <span className ={player ? 'p1 ex ' + styleInfo.shape +' ' + styleInfo.boardStyle : 'p2 ex '+ styleInfo.shape +' ' + styleInfo.boardStyle} ></span></span> 
           <MoveArrows viewHistory = {viewHistory} />
           <PlayAgain resetGame = {resetGame} gameOver = {gameOver}/>
           <FlipBoard rotateBoard = {rotateBoard}/>
        </div>
    )
}

export default Dashboard
