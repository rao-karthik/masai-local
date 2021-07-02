import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "./actionTypes"

export const incrementCounter = (count)=>{
    return {
        type: INCREMENT_COUNTER,
        payload: count
    };
};

export const decrementCounter = (count)=>{
    return {
        type: DECREMENT_COUNTER,
        payload: count
    };
};