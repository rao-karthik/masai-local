import { ADD_TODO_FAILURE, 
         ADD_TODO_REQUEST, 
         ADD_TODO_SUCCESS, 
         DELETE_TODO_FAILURE, 
         DELETE_TODO_REQUEST, 
         DELETE_TODO_SUCCESS, 
         GET_TODO_FAILURE, 
         GET_TODO_REQUEST, 
         GET_TODO_SUCCESS, 
         IND_GET_TODO_FAILURE,
         IND_GET_TODO_REQUEST,
         IND_GET_TODO_SUCCESS, 
         TOGGLE_TODO_FAILURE, 
         TOGGLE_TODO_REQUEST,
         TOGGLE_TODO_SUCCESS} from "./actionType"

const initState = {
    todo: [],
    isLoading: false,
    isError: false,
    indTodo: {}
}

export const reducer = (state=initState, {type, payload})=>{
    switch(type) {
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
                todo: payload,
                isLoading: false
            }
        }
        case GET_TODO_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
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
                isLoading: false
            }
        }
        case ADD_TODO_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        case IND_GET_TODO_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
         }
         case IND_GET_TODO_SUCCESS: {
             return {
                 ...state,
                 indTodo: payload,
                 isLoading: false
             }
         }
         case IND_GET_TODO_FAILURE: {
             return {
                 ...state,
                 isLoading: false,
                 isError: true
             }
         }
        case TOGGLE_TODO_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
         }
         case TOGGLE_TODO_SUCCESS: {
             return {
                 ...state,
                 indTodo: payload,
                 isLoading: false
             }
         }
         case TOGGLE_TODO_FAILURE: {
             return {
                 ...state,
                 isLoading: false,
                 isError: true
             }
         }
        case DELETE_TODO_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
         }
         case DELETE_TODO_SUCCESS: {
             return {
                 ...state,
                 indTodo: payload,
                 isLoading: false
             }
         }
         case DELETE_TODO_FAILURE: {
             return {
                 ...state,
                 isLoading: false,
                 isError: true
             }
         }
        default:
            return state
    }
}