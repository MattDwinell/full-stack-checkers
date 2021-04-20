const GamesInProgress = ({games}) => {
    return games.length > 0 &&(
        <>
        <h4 className='progress-header'>Games Currently in Progress</h4>
        <div className = 'preview-dashboard'>
            {games.map((item,index)=><div>{item.id}</div>)}
        </div>
        </>
    )
}

export default GamesInProgress
