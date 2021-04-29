import { Link } from 'react-router-dom'
const PastGamesPreview = ({ game, user }) => {
    return (
        <tr className='preview'>
            <td>&nbsp;{game.playerOneDisplayName}{game.playerOne === user.uid ? ' (you)' : ''}</td>
            <td>{game.playerTwoDisplayName}{game.playerTwo === user.uid ? ' (you)' : ''}</td>
            <td>{game.history.length - 1}</td>
            <td>{game.winner === game.playerOne ? game.playerOneDisplayName : game.playerTwoDisplayName}</td>
            <td><Link to={{ params: { id: game.id }, pathname: `/play-multiplayer/${game.id}` }}>
                <button className='preview-action-btn'>View Board</button></Link></td>
        </tr>
    )
}

export default PastGamesPreview
