import React, { useContext, useState } from 'react';
import { addNum, divNum, incrementCounter, mulNum, subNum } from '../Redux/action';
import { ReduxContext } from '../Redux/ReduxContextProvider';

export const Value = () => {

    const { getState, dispatch } = useContext(ReduxContext);

    const { counter, total } = getState()

    const [inp, setInp] = useState('');

    let num = Number(inp)
    
    return (
        <div>
            <label>
                Value:
                <input type="number" onChange={(e)=> setInp(e.target.value)} />
                <button onClick={()=> dispatch(addNum(num))} >Add</button>
                <button onClick={()=> dispatch(subNum(num))} >Sub</button>
                <button onClick={()=> dispatch(mulNum(num))} >Mul</button>
                <button onClick={()=> dispatch(divNum(num))} >Divide</button>
            </label>
            <h1>Total: {total}</h1>
        </div>
    )
}
