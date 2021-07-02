import { GET_POSTS_FAILURE, GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_USERS_FAILURE, GET_USERS_REQUEST, GET_USERS_SUCCESS } from "./actionType";

const initState = {
    isLoading: false,
    isError: false,
    posts: [],
    userData: []
}

export const userReducer = (state=initState, action) => {
    const { payload } = action;
    switch(action?.type) {
        case GET_POSTS_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }
        case GET_POSTS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isError: false,
                posts: payload
            }
        }
        case GET_POSTS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        case GET_USERS_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }
        case GET_USERS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isError: false,
                users: payload
            }
        }
        case GET_USERS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        default:
            return state;
    }
}
