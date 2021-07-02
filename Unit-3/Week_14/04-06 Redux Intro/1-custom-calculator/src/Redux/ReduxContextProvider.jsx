import React, { useEffect, useState } from 'react'
import { createContext } from "react";
import { store } from './store';

export const ReduxContext = createContext();

export const ReduxContextProvider = ({children}) => {

    const {getState, dispatch, subscribe } = store;

    const [state, setState] = useState(0);

    useEffect(()=>{
        const forcedUpdate = ()=> setState(prev=> prev-1)

        const unsubscribe = subscribe(()=>{
            forcedUpdate();
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    
    
    const value = {
        getState,
        dispatch
    }
    
    return (
        <ReduxContext.Provider value={value} >
            {children}
        </ReduxContext.Provider>
    )
}
