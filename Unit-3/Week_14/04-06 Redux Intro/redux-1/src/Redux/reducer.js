import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./actionType";

const initState = {
    todo: []
};

export const reducer = (state=initState, action)=>{
    switch (action.type){
        case ADD_TODO: {
            return {
                ...state,
                todo: [...state.todo, action.payload]
            }
        }
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
        default: 
            return state
    }
}