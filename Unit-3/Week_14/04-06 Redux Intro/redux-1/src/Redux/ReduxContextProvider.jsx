import React, { createContext, useEffect, useState } from 'react';
import { store } from './store';

export const ReduxContext = createContext();

export const ReduxContextProvider = ({children}) => {

    const { getState, dispatch } = store;

    const [ state, setState ] = useState(0)

useEffect(() => {
    const forceUpdate = () => setState((prev) => prev + 1);
    store.subscribe(() => {
        forceUpdate();
    });
}, []);

    const value = {
        getState,
        dispatch
    }
    
    return (
        <ReduxContext.Provider value = {value} >
            {children}
        </ReduxContext.Provider>
    )
}
