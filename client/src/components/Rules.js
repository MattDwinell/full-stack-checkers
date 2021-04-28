const Rules = () => {
    return (
        <div className = 'rules'>
            <h5>General rules</h5>
            <p>Your goal is to remove all of the opponent's pieces by capturing them or forcing them into a position where they cannot move.</p>
            <p>Any piece can move diagonally forward, only kings can move diagonally backwards.</p>
            <p>A simple checkers move would be moving your piece diagonally forward one square.</p>
            <p>Jumping requires that the nearest diagonal square be occupied by the opponent's piece, and that the subsequent square after that piece is unoccupied.</p>
            <p>When you jump you capture the opponent's piece, removing it from the board.</p>
            <p> For single jumps, jumping is not required.</p>
            <p> If one of your pieces reaches the back-rank of the other side of the board, it becomes a king and can move backwards as well as forwards.</p>
            <h5>House rule</h5>
                <p>While single jumps are not mandatory, if you jump and have the option to double jump, you must take it.</p>
        </div>
    )
}

export default Rules
