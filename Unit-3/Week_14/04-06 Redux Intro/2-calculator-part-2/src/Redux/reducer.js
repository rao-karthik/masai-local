import { ADD_NUM, DECREMENT_COUNTER, DIVIDE_NUM, INCREMENT_COUNTER, MULTIPLY_NUM, SUBTRACT_NUM } from "./actionTypes"

const initState = {
    counter: 0,
    total: 0
}

export const reducer = (state=initState, action)=>{
    switch(action?.type) {
        case INCREMENT_COUNTER: {
            return {
                ...state,
                counter: state.counter + action.payload
            }
        }
        case DECREMENT_COUNTER: {
            return {
                ...state,
                counter: state.counter - action.payload
            }
        }
        case ADD_NUM: {
            return {
                ...state,
                total: state.counter + action.payload
            }
        }
        case SUBTRACT_NUM: {
            return {
                ...state,
                total: state.counter - action.payload
            }
        }
        case MULTIPLY_NUM: {
            return {
                ...state,
                total: state.counter * action.payload
            }
        }
        case DIVIDE_NUM: {
            return {
                ...state,
                total: state.counter / action.payload
            }
        }
        default: 
            return state;
    }
}