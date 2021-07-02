import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "./actionType"

const incrementCounter = (count)=>{
    return {
        type: INCREMENT_COUNTER,
        payload: count
    }
}

const decrementCounter = (count)=>{
    return {
        type: DECREMENT_COUNTER,
        payload: count
    }
}

export { incrementCounter, decrementCounter }