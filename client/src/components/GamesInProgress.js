import CurrentGamePreview from './CurrentGamePreview';
const GamesInProgress = ({games, user}) => {
    return games.length > 0 &&(
        <>
        <h4 className='progress-header'>Games Currently in Progress</h4>
        <table className = 'preview-dashboard'>
            <thead>
                <tr>
                    <th>
                        Player One
                    </th>
                    <th>
                        Player Two
                    </th>
                    <th>
                        Turn
                    </th>
                    <th>Moves Made</th>
                    <th>Time of Last Move/ join</th>
                    <th>Play</th>
                </tr>
            </thead>
            <tbody>
            {games.map((item,index)=><CurrentGamePreview user={user} game={item} key={index} />)}
            </tbody>
        </table>
        </>
    )
}

export default GamesInProgress
