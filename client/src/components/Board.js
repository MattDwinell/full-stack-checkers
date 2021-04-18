import Square from './Square';
const Board = ({boardState, setBoard, styleInfo}) => {
    return (<div className = {`board ${styleInfo.flipboard ? 'rotated' : ''}`}>
                {boardState.map((num, index)=><Square number={num.number} pieceColor = {num.pieceColor} pieceIsKing = {num.pieceIsKing} setBoard = {setBoard} color={num.color} populated = {num.hasPiece} rowNum = { Math.floor(num.number / 8)} styleInfo={styleInfo} key={index} />)}
        </div>
    )
}
export default Board
