import React from 'react';
import { ADD_TODO_REQUEST, 
         ADD_TODO_SUCCESS,
         ADD_TODO_FAILURE, 

         GET_TODO_REQUEST, 
         GET_TODO_SUCCESS,
         GET_TODO_FAILURE

} from './actionType';

const initState = {
    todos: [],
    isLoading: false,
    isError: false
}

export const TodoReducer = (state=initState, action) => {
    const { payload } = action;
    switch(action?.type) {
        case ADD_TODO_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }
        case ADD_TODO_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isError: false
            }
        }
        case ADD_TODO_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        case GET_TODO_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }
        case GET_TODO_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isError: false,
                todos: payload
            }
        }
        case GET_TODO_FAILURE: {
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
