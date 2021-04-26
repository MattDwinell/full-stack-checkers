import {Link} from 'react-router-dom';
const MultiplayerGameEndModal = ({gameOver}) => {
    const close = ()=>{
        let hideModal = document.getElementsByClassName('end-modal')[0];
        hideModal.style.visibility = 'hidden';
    }
    let display = gameOver.gameOver ? 'flex' : 'none';
    return gameOver.gameOver && (
        <div>
            <div className='end-modal' style={{ display: display }}>
                <span onClick={close} className='close-modal'>X</span>
                <p>{gameOver.winnerDisplayName} has won!</p>
                <Link className='return-link' to='/multiplayer'>Return To Dashboard</Link>
            </div>
        </div>
    )
}

export default MultiplayerGameEndModal
