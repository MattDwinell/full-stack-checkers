const Preferences = ({ changeShape, style, changeBoardstyle }) => {
    return (
        <div className='preferences-page'>
            <h4>Customize Board</h4>
            <div className='radio-control'>
                Piece shape
            <div>
                    <input onChange={() => changeShape(document.querySelector('input[name="shape"]:checked').value)} defaultChecked={style.shape === 'circle'} type='radio' value='circle' name='shape' />
                    <label htmlFor='circle'> &nbsp;Round</label>
                </div>
                <div>
                    <input onChange={() => changeShape(document.querySelector('input[name="shape"]:checked').value)} defaultChecked={style.shape === 'square'} name='shape' value='square' type='radio' />
                    <label htmlFor='square'> &nbsp;Square</label>
                </div>
            </div>
            <div className='radio-control'>
                Board Color
            <div>
                    <input onChange={() => changeBoardstyle(document.querySelector('input[name="boardstyle"]:checked').value)} defaultChecked={style.boardStyle === 'brown'} type='radio' value='brown' name='boardstyle' />
                    <label htmlFor='circle'> &nbsp;Brown and Tan</label>
                </div>
                <div>
                    <input onChange={() => changeBoardstyle(document.querySelector('input[name="boardstyle"]:checked').value)} name='boardstyle' value='bw' type='radio' defaultChecked={style.boardStyle === 'bw'} />
                    <label htmlFor='square'> &nbsp;Black and White</label>
                </div>
                <div>
                    <input onChange={() => changeBoardstyle(document.querySelector('input[name="boardstyle"]:checked').value)} name='boardstyle' value='green' type='radio' defaultChecked={style.boardStyle === 'green'} />
                    <label htmlFor='square'> &nbsp;Shades of Green</label>
                </div>
            </div>
        </div>
    )
}

export default Preferences
