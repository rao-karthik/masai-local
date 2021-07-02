import { createStore } from "redux";
import { decrementCounter, incrementCounter } from "./action";
import { reducer } from "./reducer";

export const store = createStore(reducer);

console.log(store.getState());

store.dispatch(incrementCounter(1));
console.log(store.getState());
store.dispatch(incrementCounter(5));
console.log(store.getState());
store.dispatch(decrementCounter(1));
console.log(store.getState());
