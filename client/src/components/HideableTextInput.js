const HideableTextInput = ({display, inputId, updateDisplayName}) => {
    return display && (
        <>
          <input id={`input-${inputId.toString()}`} onChange={(e)=>updateDisplayName(e.target.value)}  type='text' maxLength='16' placeholder='Display Name'></input> 
        </>
    )
}

export default HideableTextInput
