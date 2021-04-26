import {Link} from 'react-router-dom';
const CurrentGamePreview = ({game, user}) => {
    let date = new Date(game.updatedAt);
    let dateString = (date.getMonth() +1) + '/' + date.getDate() + '/' + date.getFullYear()+ ',  ' + date.getHours()+ ':' + (date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()) + ' (EDT)' ;
    let currentUsersTurn = game.playerOnesTurn && user.uid == game.playerOne || ! game.playerOnesTurn && user.uid == game.playerTwo 

    return (
        <tr className = {currentUsersTurn? 'preview user-turn' : 'preview opponent-turn'}>
            <td>&nbsp;{game.playerOneDisplayName}{game.playerOne === user.uid ? ' (you)' : ''}</td>
            <td>{game.playerTwoDisplayName}{game.playerTwo === user.uid ? ' (you)' : ''}</td>
            <td>{currentUsersTurn ? 'Your go' : 'their turn'}</td>
            <td>{game.history.length -1}</td>
            <td>{dateString}</td>
            <td><Link to={{ params:{id: game.id} ,pathname:`/play-multiplayer/${game.id}`,locationInfo:{game: game, user: user}}}>
                <button className = 'preview-action-btn'>{currentUsersTurn ? 'play' : 'View Board'}</button></Link></td>
            
        </tr>
        
    )
}

export default CurrentGamePreview