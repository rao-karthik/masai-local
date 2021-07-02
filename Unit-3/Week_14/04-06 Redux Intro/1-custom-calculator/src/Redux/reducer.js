import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "./actionTypes"

const initState = {
    counter: 0
}

export const reducer = (state=initState, {type, payload})=>{
    switch(type) {
        case INCREMENT_COUNTER: {
            return {
                ...state,
                counter: state.counter + payload
            }
        }
        case DECREMENT_COUNTER: {
            return {
                ...state,
                counter: state.counter - payload
            }
        }
        default: 
            return state;
    }
}