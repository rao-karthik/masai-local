import { ADD_TODO_FAILURE, 
         ADD_TODO_REQUEST, 
         ADD_TODO_SUCCESS,

         GET_TODO_FAILURE, 
         GET_TODO_REQUEST, 
         GET_TODO_SUCCESS

} from "./actionType";
import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'https://json-server-mocker-kartik.herokuapp.com/'
})

const addTodoRequest = ()=>{
    return {
        type: ADD_TODO_REQUEST
    }
}
const addTodoSuccess = ()=>{
    return {
        type: ADD_TODO_SUCCESS
    }
}
const addTodoFailure = ()=>{
    return {
        type: ADD_TODO_FAILURE
    }
}

const getTodoRequest = ()=>{
    return {
        type: GET_TODO_REQUEST
    }
}
const getTodoSuccess = (payload)=>{
    return {
        type: GET_TODO_SUCCESS,
        payload
    }
}
const getTodoFailure = ()=>{
    return {
        type: GET_TODO_FAILURE
    }
}

const getTodos = (params)=>(dispatch, getState)=> {
    dispatch(getTodoRequest());

    const config = {
        url:'/todos',
        method: 'get'
    }
    axios(config)
    .then(res=>{
        dispatch(getTodoSuccess(res.data))
    })
    .catch(err=>{
        dispatch(getTodoFailure())
    })
}

const addTodos = (payload)=>dispatch=>{
    dispatch(addTodoRequest());
    
    const config = {
        url:'/todos',
        data: payload,
        method: 'post'
    }
    axios(config)
    .then(res=>{
        dispatch(addTodoSuccess(res.data))
        dispatch(getTodos())
    })
    .catch(err=>{
        dispatch(addTodoFailure(err))
    })
}

export { getTodos, addTodos }