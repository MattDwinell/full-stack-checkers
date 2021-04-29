import HideableTextInput from './HideableTextInput';
import { useState } from 'react';
const OtherSeekPreview = ({ game, joinGame }) => {
    const [display, setDisplay] = useState(false);
    const [displayName, setDisplayName] = useState('');
    const updateDisplay = async () => {
        if (!display) {
            setDisplay(true);
        } else if (displayName.length > 0) {
            let join = await joinGame(game, displayName);
            if (join === 'success') {
                setDisplay(false);
            }
        }
    }
    const updateDisplayName = (name) => {
        setDisplayName(name);
    }
    return (
        <tr className='seek-preview'>
            <td className={game.playerOneDisplayName ? 'tan-highlight' : ''}>{game.playerOneDisplayName || 'Waiting...'}</td><td className={game.playerTwoDisplayName ? 'tan-highlight' : ''}>{game.playerTwoDisplayName || 'Waiting...'}</td><td ><HideableTextInput updateDisplayName={updateDisplayName} inputId={game.id} display={display} /><span className='join-new-game' onClick={updateDisplay}>&#10003;</span></td>
        </tr>

    )
}

export default OtherSeekPreview
