const OtherSeekPreview = ({game}) => {
    return (
        <div className='seek-preview'>
            Player One: {game.playerOneDisplayName || 'Waiting...'} Player Two: {game.playerTwoDisplayName || 'Waiting...'} 
        </div>

    )
}

export default OtherSeekPreview
