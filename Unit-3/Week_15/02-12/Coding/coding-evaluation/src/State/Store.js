import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { LogReducer } from "./Auth/LogReducer";
import { userReducer } from "./Users/userReducer";

const rootReducer = combineReducers({
  logRed: LogReducer,
  userRed : userReducer
})

export const Store = createStore(
  rootReducer,
  compose (
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)