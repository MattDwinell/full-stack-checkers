const NewGameDashboard = ({display, makeNewGame, hideShowForm}) => {
    const formValidateAndSubmit = async(e)=>{
        e.preventDefault();
        let formData =  new FormData(document.querySelector('#newGameForm'));
        let playerChoice = formData.get('player');
        let alias = formData.get('alias');
        if(! playerChoice || ! alias || ! alias.length > 0){
            alert('please input a display name for this game');
        }else{
            let createdGame = await makeNewGame(playerChoice, alias);
            if(createdGame){
                hideShowForm('popup');
            }
        }
    }
    return display &&(
        <div className = 'new-game-dashboard'> 
            <form id='newGameForm' name='newGameForm' className='new-game-form'>
              <h6>I would like to go...</h6>
              <div className='new-game-form-input'>  <input type="radio" name="player" value="p1" defaultChecked='true'></input><label htmlFor='p1'> First</label></div>
              <div className='new-game-form-input'> <input type="radio" name="player" value="p2"></input><label htmlFor='p1'> Second</label></div>
              <h6>Choose your display name for this game:</h6>
              <div className = 'new-game-form-input'><input maxLength='16' type='text' placeholder='e.g. checkersfiend' name='alias' ></input>&nbsp;&nbsp;
              <button onClick = {(e)=>formValidateAndSubmit(e)}>create new game</button>
              </div>
            </form>
        </div>
    )
}

export default NewGameDashboard
