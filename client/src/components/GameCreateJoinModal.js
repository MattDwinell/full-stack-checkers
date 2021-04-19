const GameCreateJoinModal = ({hideShow, display}) => {
    return display&& (
        <div className = 'banner-modal' onClick={hideShow}>
          New game created! Waiting for another player to join
        </div>
    )
}

export default GameCreateJoinModal
