import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter } from '../Redux/action';

export const Counter = () => {

    const counter = useSelector(state=> state.counter);

    const dispatch = useDispatch();
    
    return (
        <div>
            <h1>Counter</h1>
            <h3>{counter}</h3>
            <button onClick= {()=>dispatch(decrementCounter(1))}>Reduce</button>
            <button onClick= {()=>dispatch(incrementCounter(1))}>Add</button>
        </div>
    )
}
