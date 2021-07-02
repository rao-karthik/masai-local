import { reducer } from "./reducer";
import { createStore } from 'redux';
import { decrementCounter, incrementCounter } from "./action";

export const store = createStore(reducer);
store.dispatch(incrementCounter(1));
// console.log(store.getState())
store.dispatch(decrementCounter(1))
console.log(store.getState())