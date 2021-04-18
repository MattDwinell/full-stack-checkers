const CalculateLegalMoves = (goalSquare, startSquare, board, playerOne) => {
    if( ! board[startSquare] )return  { valid: false, jump: false, jumpedSquare: null, multiJump: false, multiJumpOptions:[], isKing:false };
    let corners = [1, 3, 5, 7, 8, 23, 24, 39, 40, 55, 56, 58, 60, 62];
    let edges  = [1,3,5,7,56,58,60,62];
    let singleJumpOption = [];
    let jumpedSquare = [];
    let resObject = { valid: false, jump: false, jumpedSquare: null, multiJump: false, multiJumpOptions:[], isKing: board[startSquare].pieceIsKing };
    let baseMoveLeft, baseMoveRight, jumpLeft, jumpRight;
    let options = [];
    if (playerOne) {
        baseMoveLeft = -9
        baseMoveRight = -7;
        jumpLeft = -18;
        jumpRight = -14;
    } else {
        baseMoveLeft = 7;
        baseMoveRight = 9;
        jumpLeft = 14;
        jumpRight = 18;
    }
    const calcSingleJumpOptions = (start, baseMove, jumpMove, player, multi = false)=>{
        if(!corners.includes(start+baseMove) && start+ baseMove >= 0 && start + baseMove < 64 && board[start+baseMove].hasPiece && ((player && board[start+baseMove].pieceColor === 'red') || (!player && board[start + baseMove].pieceColor ==='black')) && ! board[start + jumpMove].hasPiece ){
           if(! multi){ singleJumpOption.push(start + jumpMove);
            jumpedSquare.push(start + baseMove);
           }else{
               resObject.multiJump = true;
               resObject.multiJumpOptions.push(start + jumpMove);
           }
        }
    }
    if(startSquare % 8 !== 7) options.push(startSquare + baseMoveRight);
    if(startSquare % 8 !== 0) options.push(startSquare + baseMoveLeft);
    if(resObject.isKing && startSquare % 8 !== 7) options.push(startSquare - baseMoveLeft);
    if(resObject.isKing && startSquare % 8 !== 0) options.push(startSquare - baseMoveRight);
    //jump logic
calcSingleJumpOptions(startSquare, baseMoveLeft, jumpLeft, playerOne);
calcSingleJumpOptions(startSquare, baseMoveRight, jumpRight, playerOne);
if(resObject.isKing){
    calcSingleJumpOptions(startSquare, -baseMoveRight, -jumpRight, playerOne);
    calcSingleJumpOptions(startSquare, -baseMoveLeft, -jumpLeft, playerOne);
}
    if (options.includes(goalSquare)) {
        resObject.valid = true;     
    }else if(singleJumpOption.includes(goalSquare)){
        resObject.valid = true;
        resObject.jumpedSquare = jumpedSquare[singleJumpOption.indexOf(goalSquare)];
        resObject.jump = true;
        //calculating multijumps
        if(goalSquare % 8 !==  0){
            calcSingleJumpOptions(goalSquare, baseMoveLeft, jumpLeft, playerOne, true );
        }
        if(goalSquare % 8 !== 7){
            calcSingleJumpOptions(goalSquare, baseMoveRight, jumpRight, playerOne, true );
        }
        if(resObject.isKing && goalSquare % 8!== 0){
            calcSingleJumpOptions(goalSquare, - baseMoveRight, -jumpRight, playerOne, true);
        }
        if(resObject.isKing && goalSquare % 8 !== 7){
            calcSingleJumpOptions(goalSquare, -baseMoveLeft, -jumpLeft, playerOne, true);
        }

    }
    if(resObject.valid && edges.includes(goalSquare) && ((playerOne && goalSquare % 2 === 1 || (!playerOne && goalSquare % 2 === 0)))) resObject.isKing = true;
    
    return resObject;
}

export default CalculateLegalMoves
