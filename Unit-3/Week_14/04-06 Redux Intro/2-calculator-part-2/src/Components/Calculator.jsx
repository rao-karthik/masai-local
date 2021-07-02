import React, { useContext } from 'react'
import { decrementCounter, incrementCounter } from '../Redux/action';
import { ReduxContext } from '../Redux/ReduxContextProvider'
import { Counter } from './Counter';
import { Value } from './Value';

export const Calculator = () => {

    const { getState, dispatch } = useContext(ReduxContext);

    const { counter } = getState();
    
    return (
        <div>
            <h1>Counter</h1>
            <Counter />
            <Value />
        </div>
    )
}
