import PastGamesPreview from './PastGamesPreview';
const PreviousGamesDashboard = ({ games, display, user }) => {
    return display && (
        <table className='preview-dashboard'>
            <thead>
                <tr>
                    <th>Player One</th><th>Player Two</th><th># of Moves</th><th>Winner</th><th>Board</th>
                </tr>
            </thead>
            <tbody>
                {games.map((item, index) => <PastGamesPreview user={user} game={item} key={index} />)}
            </tbody>
        </table>
    )
}

export default PreviousGamesDashboard
