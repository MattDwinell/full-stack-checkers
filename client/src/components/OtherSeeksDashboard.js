import OtherSeekPreview from './OtherSeekPreview';
const OtherSeeksDashboard = ({display, openSeeks}) => {
    return display && (
        <div className = 'preview-dashboard'>
           {openSeeks.map((item, index)=> <OtherSeekPreview game={item} key={index} />)}
        </div>
    )
}

export default OtherSeeksDashboard
