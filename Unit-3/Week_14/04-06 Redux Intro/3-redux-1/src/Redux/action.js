import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./actionType"

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

export { addTodo, toggleTodo, deleteTodo }