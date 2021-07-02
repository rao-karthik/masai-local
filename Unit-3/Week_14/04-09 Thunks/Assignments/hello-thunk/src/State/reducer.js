import { LOGIN_FAILURE, 
         LOGIN_REQUEST, 
         LOGIN_SUCCESS, 
        
         REGISTER_FAILURE, 
         REGISTER_REQUEST, 
         REGISTER_SUCCESS,

         USER_REGISTERED_DETAILS_REQUEST,
         USER_REGISTERED_DETAILS_SUCCESS,
         USER_REGISTERED_DETAILS_FAILURE,

         GITHUB_SEARCH_REQUEST,
         GITHUB_SEARCH_SUCCESS,
         GITHUB_SEARCH_FAILURE } from "./actionType";


const initState = {
    isLoading: false,
    isError: false,
    token: '',
    userData: [],
    registeredDetails: {},
    isAuth: false
}


export const Reducer = (state= initState, action)=>{
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
        case USER_REGISTERED_DETAILS_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }
        case USER_REGISTERED_DETAILS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isError: false,
                registeredDetails: payload
            }
        }
        case USER_REGISTERED_DETAILS_FAILURE: {
            return {
                ...state,
                isError: true,
                isLoading: false
            }
        }
        case GITHUB_SEARCH_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }
        case GITHUB_SEARCH_SUCCESS: {
            return {
                ...state,
                userData: payload,
                isLoading: false,
                isError: false
            }
        }
        case GITHUB_SEARCH_FAILURE: {
            return {
                ...state,
                isError: true,
                isLoading: false
            }
        }
        default:
            return state;
    }
}