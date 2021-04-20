const GameCreateJoinModal = ({hideShow, display, message}) => {
    return display&& (
        <div className = 'banner-modal' onClick={hideShow}>
          {message}
        </div>
    )
}

export default GameCreateJoinModal
