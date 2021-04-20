const UserSeekPreview = ({game, cancel}) => {
    return (
        <tr className='seek-preview'>
           <td className = {game.playerOneDisplayName ? 'tan-highlight' : ''}>{game.playerOneDisplayName || 'Waiting...'}</td><td className = {game.playerTwoDisplayName ? 'tan-highlight' : ''}>{game.playerTwoDisplayName || 'Waiting...'}</td><td ><span onClick = {()=>cancel(game.id)} className='delete-request'>X</span></td>
        </tr>
    )
}

export default UserSeekPreview
