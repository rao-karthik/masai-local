import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./actionType"

const loginSuccess = (token)=>{
    return {
        type: LOGIN_SUCCESS,
        payload: token
    }
}

const loginFailure = (err)=>{
    return {
      type: LOGOUT_SUCCESS,
      payload: err
    }
}

export { loginSuccess, loginFailure }