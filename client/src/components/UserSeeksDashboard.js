import UserSeekPreview from './UserSeekPreview';
const UserSeeksDashboard = ({ display, openSeeks, cancel }) => {
    return display && (
        <table className='preview-dashboard'>
            <thead>
                <tr>
                    <th>Player One</th>
                    <th>Player Two</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {openSeeks.map((item, index) => <UserSeekPreview cancel={cancel} game={item} key={index} />)}
            </tbody>
        </table>
    )
}

export default UserSeeksDashboard
