import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { reducer } from "./app/reducer";
import { authReducer } from './auth/authReducer'

const rootReducer = combineReducers({
    app: reducer,
    auth: authReducer
})

// const middleWareLogger = store => next => action => {
//     console.log("dispatching action 1", action);
//     console.table(store.getState());
//     const val = next(action);
//     console.log("done updating 1", action);
//     console.table(store.getState());
//     return(val);
// }

// const middleWareLogger2 = store => next => action => {
//     console.log("dispatching action 2", action);
//     console.table(store.getState());
//     const val = next(action);
//     console.log("done updating 2", action);
//     console.table(store.getState());
//     return(val);
// }

const middleWareFunctionLogger = store => next => action => {
    if(typeof action === "function"){
        return action (store.dispatch, store.getState)
    }
    return next(action)
}

export const store = createStore(
    rootReducer,
    compose (
        applyMiddleware(middleWareFunctionLogger),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )    
);