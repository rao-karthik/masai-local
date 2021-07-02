import React from 'react'

export const UseRefFocus = () => {

    const inputRef = React.useRef();

    React.useEffect (()=>{
        console.log(inputRef)
    }, [])

    return (
        <div>
            <input ref = {inputRef}  type="text"/>
            <button onClick = {()=> inputRef.current.focus()} >Focus</button>
        </div>
    )
}
