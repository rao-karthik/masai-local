import { LOGIN_FAILURE, 
    LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
   
    LOGOUT_REQUEST, 
   
    REGISTER_FAILURE, 
    REGISTER_REQUEST, 
    REGISTER_SUCCESS,} from "./actionType";


const initState = {
    isLoading: false,
    isError: false,
    isAuth: false,
    token: ''
}


export const LRReducers = (state= initState, action)=>{
const { payload } = action;
    switch(action?.type) {
        case REGISTER_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }
        case REGISTER_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isError: false
            }
        }
        case REGISTER_FAILURE: {
            return {
                ...state,
                isError: true,
                isLoading: false
            }
        }
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
                isLoading: false,
                isError: false,
                isAuth: true,
                token: payload
            }
        }
        case LOGIN_FAILURE: {
            return {
                ...state,
                isError: true,
                isLoading: false
            }
        }
        case LOGOUT_REQUEST: {
            return {
                isAuth: false
            }
        }
        default:
            return state;
    }
}