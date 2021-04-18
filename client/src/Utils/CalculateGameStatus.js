const CalculateGameStatus = (boardState, playerOneTurn) => {
    const resObject = { gameOver: true, winner: playerOneTurn ? 'two':'one'   };
    let corners = [1, 3, 5, 7, 8, 23, 24, 39, 40, 55, 56, 58, 60, 62];
    const moveLeftAndRight = (square) => {
        let num = square.number;
        let moveLeft = -9;
        let moveRight = -7;
        let moveBackLeft = 7;
        let moveBackRight = -9;
        if (!playerOneTurn) {
            moveLeft = 7
            moveRight = 9;
            moveBackRight = -7
            moveBackLeft = -9
        }
        //try moving left and right, no jump
        if (num % 8 !== 0 && num + moveLeft >= 0 && num + moveLeft <= 64 && boardState[num + moveLeft].hasPiece === false) return true;
        if (num % 8 !== 7 && num + moveRight >= 0 && num + moveRight <= 64 && boardState[num + moveRight].hasPiece === false) return true;
        if (square.pieceIsKing && num % 8 !== 0 && num + moveBackLeft >= 0 && num + moveBackLeft <= 64 && boardState[num + moveBackLeft].hasPiece === false) return true;
        if (square.pieceIsKing && num % 8 !== 7 && num + moveBackRight >= 0 && num + moveBackRight <= 64 && boardState[num + moveBackRight].hasPiece === false) return true;
        //try moving left and right via jumping. Ugly, but can clean up later into a code that just takes in parameters of move directions & player
        if (num % 8 !== 0 && num + (moveLeft * 2) >= 0 && num + (moveLeft * 2) <= 64 && ! corners.includes(num+moveLeft) && boardState[num + moveLeft].hasPiece === true && ((playerOneTurn && boardState[num + moveLeft].pieceColor === 'red') || (!playerOneTurn && boardState[num + moveLeft].pieceColor === 'black')) && boardState[num + (moveLeft * 2 )].hasPiece === false ) return true;
        if (num % 8 !== 7 && num + (moveRight * 2) >= 0 && num + (moveRight * 2) <= 64 && ! corners.includes(num+moveRight) && boardState[num + moveRight].hasPiece === true && ((playerOneTurn && boardState[num + moveRight].pieceColor === 'red') || (!playerOneTurn && boardState[num + moveRight].pieceColor === 'black')) && boardState[num + (moveRight * 2 )].hasPiece === false ) return true;
        if (square.pieceIsKing && num % 8 !== 7 && num + (moveBackRight * 2) >= 0 && num + (moveBackRight * 2) <= 64 && ! corners.includes(num+moveBackRight) && boardState[num + moveBackRight].hasPiece === true && ((playerOneTurn && boardState[num + moveBackRight].pieceColor === 'red') || (!playerOneTurn && boardState[num + moveBackRight].pieceColor === 'black')) && boardState[num + (moveBackRight * 2 )].hasPiece === false ) return true;
        if (square.pieceIsKing && num % 8 !== 0 && num + (moveBackLeft * 2) >= 0 && num + (moveBackLeft * 2) <= 64 && ! corners.includes(num+moveBackLeft) && boardState[num + moveBackLeft].hasPiece === true && ((playerOneTurn && boardState[num + moveBackLeft].pieceColor === 'red') || (!playerOneTurn && boardState[num + moveBackLeft].pieceColor === 'black')) && boardState[num + (moveBackLeft * 2 )].hasPiece === false ) return true;  
    }
    boardState.forEach(square => {
        if (square.hasPiece && ((playerOneTurn && square.pieceColor === 'black') || (!playerOneTurn && square.pieceColor === 'red'))) {
            let canMove = moveLeftAndRight(square);
            if (canMove) {
                resObject.gameOver = false;
                return resObject
            }

        }
    });
    return resObject;
}
export default CalculateGameStatus
