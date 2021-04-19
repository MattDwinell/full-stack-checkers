import UserSeekPreview from './UserSeekPreview';
const UserSeeksDashboard = ({display,openSeeks}) => {
    return display && (
        <div className = 'preview-dashboard'>
            {openSeeks.map((item, index)=> <UserSeekPreview game={item} />)}
        </div>
    )
}

export default UserSeeksDashboard
