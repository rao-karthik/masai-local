import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { LRReducers } from './LoginRegister/LRReducers';
import { TodoReducer } from './Todos/TodoReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({ logReg: LRReducers, todosRed: TodoReducer })

export const store = createStore(
    rootReducer,
    compose (
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)