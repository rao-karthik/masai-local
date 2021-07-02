import React, { useContext } from 'react';
import { decrementCounter, incrementCounter } from '../Redux/action';
import { ReduxContext } from '../Redux/ReduxContextProvider';

export const Counter = () => {
    const { getState, dispatch } = useContext(ReduxContext);

    const { counter } = getState();

    return (
        <div>
            <h3>{counter}</h3>
            <button onClick = {()=> dispatch(incrementCounter(1))} >Add</button>
            <button onClick = {()=> dispatch(decrementCounter(1))} >Reduce</button>
        </div>
    )
}