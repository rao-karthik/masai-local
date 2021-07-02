import { DECREMENT_COUNTER, INCREMENT_COUNTER, ADD_TODO, DELETE_TODO, TOGGLE_TODO, GET_TODO_REQUEST, GET_TODO_SUCCESS, GET_TODO_FAILURE } from "./actionTypes";

const initState = {
  counter: 0,
  todo: [],
  isLoading: false,
  isError: false
};

export const reducer = (state = initState, action) => {
  switch (action?.type) {
    case INCREMENT_COUNTER: {
      return {
        ...state,
        counter: state.counter + action.payload
      };
    }
    case DECREMENT_COUNTER: {
      return {
        ...state,
        counter: state.counter - action.payload
      };
    }
    // case ADD_TODO: {
    //     return {
    //         ...state,
    //         todo: [...state.todo, action.payload]
    //     }
    // }
    case TOGGLE_TODO: {
        return {
            ...state,
            todo: [...state.todo.map(item=> item.id === action.payload ? {...item, status: !item.status} : item)]
        }
    }
    case DELETE_TODO: {
        return {
            ...state,
            todo: [...state.todo.filter((item) => item.id !== action.payload)]
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
        todo: action.payload,
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
    default:
      return state;
  }
};
