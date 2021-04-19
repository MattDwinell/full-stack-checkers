import MultiplayerGamePreview from './MultiplayerGamePreview';
const AllMultiplayerGames = ({currentGames}) => {
    return (
        <div>
            {currentGames.map((item, index)=><MultiplayerGamePreview gameInfo = {item} key={index} />)}
        </div>
    )
}

export default AllMultiplayerGames
