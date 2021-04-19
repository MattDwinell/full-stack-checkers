const TogglingButton = ({toggleBool, trueString, falseString, toggleFunc}) => {
    return (
        <div className = 'style-button'>
        <button className = {toggleBool ? `red-background` : ``} onClick = {()=>(toggleFunc(false))}> {toggleBool ? trueString : falseString}</button>
        </div>
    )
}

export default TogglingButton
