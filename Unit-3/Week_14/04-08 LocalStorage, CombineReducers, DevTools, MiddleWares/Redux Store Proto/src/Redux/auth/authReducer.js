import { loadData, saveData } from "../../utils/localstorage"
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./actionType"

const isAuth = loadData("auth") || false;

const initState = {
  isAuth: isAuth
}

export const authReducer = (state=initState, {type, payload})=>{
    switch(type) {
        case LOGIN_SUCCESS: {
            saveData("auth", true)
            return {
                ...state,
                isAuth: true
            }
        }
        case LOGOUT_SUCCESS: {
            saveData("auth", false)
            return {
                ...state,
                isAuth: false
            }
        }
        default:
            return state
    }
}