import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS } from "./actionType";

const initState = {
  isAuth: true,
  isLoading: false,
  isError: false,
  token: ''
}

export const LogReducer = (state=initState, action)=>{
  const { payload } = action;
  switch(action?.type){
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        isError: false,
        userData: payload
      }
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        isAuth:  false
      }
    }
    default:
      return state
  }
}