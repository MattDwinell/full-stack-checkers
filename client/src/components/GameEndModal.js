import PlayAgain from './PlayAgain';
const GameEndModal = ({gameOver, resetGame}) => {
    const close = ()=>{
        let hideModal = document.getElementsByClassName('end-modal')[0];
        hideModal.style.visibility = 'hidden';
    }

    let display = gameOver.gameOver ? 'flex' : 'none';
    return (
        <div className = 'end-modal' style={{display: display}}>
            <span onClick = {close} className = 'close-modal'>X</span>
           <p>Player {gameOver.winner} has won!</p>
           <PlayAgain resetGame={resetGame} gameOver = {gameOver.gameOver}/>
        </div>
    )
}

export default GameEndModal
