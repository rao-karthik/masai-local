import React, { useState } from 'react';

/*
    * Counter Component
    * Allows user to add and reduce a value
    * PascalCase for creating components
*/

function Counter(){
    /*
        * State Management

    */
    const [counter, setCounter] = React.useState(0);

    const updateValue = (val) =>{
        setCounter(counter + val)
    }

    return (
        <>
            <h1>Counter</h1>
            <div>{counter}</div>
            <button onClick = {()=> updateValue(1)}>ADD</button>
            {/* 
                not using onClick = {updateValue(1)}
                bcoz it will invoke the function when we click. So it will throw an error
             */}
            <button onClick = {()=> updateValue(-1)}>REMOVE</button>
        </>
    )
}

export default Counter;