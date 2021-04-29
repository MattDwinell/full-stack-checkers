const PlayAgain = ({ gameOver, resetGame }) => {
    return (
        <button onClick={resetGame} className='play-again' >
            {gameOver ? `Play Again` : `Restart Game`}
        </button>
    )
}

export default PlayAgain
