import { ADD_NUM, DECREMENT_COUNTER, DIVIDE_NUM, INCREMENT_COUNTER, MULTIPLY_NUM, SUBTRACT_NUM } from "./actionTypes"

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

export const addNum = (count)=>{
    return {
        type: ADD_NUM,
        payload: count
    };
};
export const subNum = (count)=>{
    return {
        type: SUBTRACT_NUM,
        payload: count
    };
};
export const mulNum = (count)=>{
    return {
        type: MULTIPLY_NUM,
        payload: count
    };
};
export const divNum = (count)=>{
    return {
        type: DIVIDE_NUM,
        payload: count
    };
};