const Resign = ({resign, gameOver}) => {
    return !gameOver && (
        <button onClick = {resign} className = 'play-again' >
            Resign
        </button>
    )
}

export default Resign
