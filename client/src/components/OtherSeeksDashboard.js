import OtherSeekPreview from './OtherSeekPreview';
const OtherSeeksDashboard = ({ display, openSeeks, joinGame }) => {
    return display && (
        <table className='preview-dashboard'>
            <thead>
                <tr>
                    <th>Player One</th><th>Player Two</th><th>Join</th>
                </tr>
            </thead>
            <tbody>
                {openSeeks.map((item, index) => <OtherSeekPreview joinGame={joinGame} game={item} key={index} />)}
            </tbody>
        </table>
    )
}

export default OtherSeeksDashboard
