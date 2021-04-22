import Token from './TokenPiece';
const Square = ({color, number, populated, setBoard, pieceColor, pieceIsKing, styleInfo}) => {
    function drop(event){
        setBoard(event.target.id.replace('square', ''), event.dataTransfer.getData('text'),event.dataTransfer.getData('color') );
    }
    const allowDrop=(event)=>{
        if(color === 'black'){
        event.preventDefault();
        
        }
    }
    let squareColor = color ==='black' ? '#954535': '#d2a56d' ;
    let textColor = color === 'black' ? 'white' : 'black';
    if(styleInfo.boardStyle === 'bw') squareColor = textColor;
    if(styleInfo.boardStyle === 'green') squareColor = color=== 'black' ? '#32612D' : '#5ca08e'; 
    
    return (
        <div id={'square' + number} draggable='false' onDragOver={(e)=>allowDrop(e)} onDrop={(event)=>drop(event)} className = 'square' onClick = {()=>{console.log(populated)}} style={{backgroundColor: squareColor, color: textColor }} >
            {populated ? <Token styleInfo = {styleInfo} pieceIsKing ={pieceIsKing}  pieceColor = {pieceColor} id={number}/> : null}
        </div>
    )
}

export default Square
