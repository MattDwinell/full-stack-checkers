import MoveArrows from './MoveArrows';
import Resign from './Resign';
const MultiplayerDashboard = ({usersTurn,playerOnesTurn, styleInfo, gameOver, viewHistory, resign}) => {
    return (
        <div className = 'dashboard'>
                       <span className = 'player-info grid-item'>{gameOver.gameOver ? `${gameOver.winnerDisplayName} won ` : usersTurn ? `Your turn` : `Their turn`} <span style={{visibility : gameOver.gameOver ? 'hidden' : 'visible'}}  className ={playerOnesTurn ? 'p1 ex ' + styleInfo.shape +' ' + styleInfo.boardStyle : 'p2 ex '+ styleInfo.shape +' ' + styleInfo.boardStyle} ></span></span>
                       <MoveArrows viewHistory = {viewHistory} /> 
                       <Resign gameOver={gameOver.gameOver} resign={resign} />

        </div>
    )
}

export default MultiplayerDashboard
