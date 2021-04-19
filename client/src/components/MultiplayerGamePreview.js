const MultiplayerGamePreview = ({gameInfo}) => {
    return (
        <div className = 'multiplayer-preview'>
            {gameInfo.playerOne? `${gameInfo.playerOneDisplayName}` : 'Waiting on Player 1'} {gameInfo.playerTwoDisplayName ? `vs ${gameInfo.playerTwoDisplayName}` : 'Waiting for 2nd player to join'}
        </div>
    )
}

export default MultiplayerGamePreview
