import apiCalls from './../Utils/apiCalls';
const OpenSeeks = ({user}) => {
     const makeNewGame =async ()=>{
         const newGame = {
             playerOne: 'me',
             playerTwo: 'you',
             board: {object: 'empty'},
             history: [1,2,3],
             gameOver: false,
             playerOnesTurn: true
         }
         const currentGames = await apiCalls.createGame(newGame);
         console.log(currentGames);
    }
    const retrieveGames = async()=>{
        const currentGames = await apiCalls.getGames();
        console.log(currentGames);
    }
    return (
        <div className = 'open-games'>
           uid: {user.uid}
           <button onClick = {makeNewGame}>new game</button>
           <button onClick = {retrieveGames}>view all games</button>
        </div>
    )
}

export default OpenSeeks
