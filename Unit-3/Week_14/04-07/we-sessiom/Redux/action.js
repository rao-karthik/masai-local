import { DECREMENT_COUNTER, GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS, INCREMENT_COUNTER } from "./actionTypes";
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./actionTypes"

export const incrementCounter = (amount) => {
  return {
    type: INCREMENT_COUNTER,
    payload: amount
  };
};

export const decrementCounter = (amount) => {
  return {
    type: DECREMENT_COUNTER,
    payload: amount
  };
};

const addTodo =(payload)=>{
    return {
        type: ADD_TODO,
        payload: payload
    }
}

const toggleTodo = (id)=>{
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}

const deleteTodo = (id)=>{
    return {
        type: DELETE_TODO,
        payload: id
    }
}

const getTodoSuccess = (payload)=>{
  return {
    type: GET_TODO_SUCCESS,
    payload
  }
}

const getTodoFailure = (payload)=>{
  return {
    type: GET_TODO_FAILURE,
    payload
  }
}

const getTodoRequest = (payload)=>{
  return {
    type: GET_TODO_REQUEST,
    payload
  }
}

export { addTodo, toggleTodo, deleteTodo, getTodoRequest, getTodoSuccess, getTodoFailure }