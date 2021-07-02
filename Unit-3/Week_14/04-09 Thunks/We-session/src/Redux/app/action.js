import { deleteData, getData, indTodoData, postData, toggleStatus } from "../../Components/apiData"
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
         TOGGLE_TODO_SUCCESS, 
         UPDATE_TODO_TITLE_FAILURE, 
         UPDATE_TODO_TITLE_REQUEST,
         UPDATE_TODO_TITLE_SUCCESS} from "./actionType"

const getTodoRequest = (payload)=>{
    return {
        type: GET_TODO_REQUEST,
        payload
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

const addTodoRequest = (payload)=>{
    return {
        type: ADD_TODO_REQUEST,
        payload
    }  
}

const addTodoSuccess = (payload)=>{
    return {
        type: ADD_TODO_SUCCESS,
        payload
    }    
}

const addTodoFailure = (payload)=>{
    return {
        type: ADD_TODO_FAILURE,
        payload
    }    
}

const indGetTodoRequest = (payload)=>{
    return {
        type: IND_GET_TODO_REQUEST,
        payload
    }  
}

const indGetTodoSuccess = (payload)=>{
    return {
        type: IND_GET_TODO_SUCCESS,
        payload
    }    
}

const indGetTodoFailure = (payload)=>{
    return {
        type: IND_GET_TODO_FAILURE,
        payload
    }    
}

const toggleTodoRequest = (payload)=>{
    return {
        type: TOGGLE_TODO_REQUEST,
        payload
    }  
}

const toggleTodoSuccess = (payload)=>{
    return {
        type: TOGGLE_TODO_SUCCESS,
        payload
    }    
}

const toggleTodoFailure = (payload)=>{
    return {
        type: TOGGLE_TODO_FAILURE,
        payload
    }    
}

const deleteTodoRequest = (payload)=>{
    return {
        type: DELETE_TODO_REQUEST,
        payload
    }  
}

const deleteTodoSuccess = (payload)=>{
    return {
        type: DELETE_TODO_SUCCESS,
        payload
    }    
}

const deleteTodoFailure = (payload)=>{
    return {
        type: DELETE_TODO_FAILURE,
        payload
    }    
}

const updateTodoTitleRequest = (payload)=>{
    return {
        type: UPDATE_TODO_TITLE_REQUEST,
        payload
    }  
}

const updateTodoTitleSuccess = (payload)=>{
    return {
        type: UPDATE_TODO_TITLE_SUCCESS,
        payload
    }    
}

const updateTodoTitleFailure = (payload)=>{
    return {
        type: UPDATE_TODO_TITLE_FAILURE,
        payload
    }    
}

const getTodos = (params)=>(dispatch, getState)=> {
    dispatch(getTodoRequest());

    getData()
    .then(res=>{
        dispatch(getTodoSuccess(res.data))
    })
    .catch(err=>{
        dispatch(getTodoFailure())
    })
}

const addTodos = (payload)=>(dispatch)=>{
    dispatch(addTodoRequest())

    postData(payload.title, payload.status)
    .then(res=>{
        dispatch(addTodoSuccess(res.data));
        dispatch(getTodos())
    })
    .catch(err=>{
        dispatch(addTodoFailure(err))
    })
}

const indTodoDetails = (params)=>(dispatch, getState)=>{
    dispatch(indGetTodoRequest())

    indTodoData(params)
    .then(res=>{
        // console.log(res.data)
        dispatch(indGetTodoSuccess(res.data))
    })
    .catch(err=>{
        dispatch(indGetTodoFailure(err))
    })
}

const handleToggle = (payload)=>(dispatch)=>{
    const { id, status } = payload;
    dispatch(toggleTodoRequest())

    toggleStatus(id, status)
    .then(res=>{
        dispatch(toggleTodoSuccess(res.data));
        // dispatch(indTodoDetails())
    })
    .catch(err=>{
        dispatch(toggleTodoFailure(err))
    })
}

const handleDelete = (payload)=>(dispatch, getState)=>{
    dispatch(deleteTodoRequest())

    deleteData(payload)
    .then(res=>{
        dispatch(deleteTodoSuccess(res.data));
    })
    .catch(err=>{
        dispatch(deleteTodoFailure(err))
    })
}

export { getTodoRequest, 
         getTodoSuccess, 
         getTodoFailure, 

         addTodoRequest, 
         addTodoSuccess, 
         addTodoFailure, 

         indGetTodoRequest, 
         indGetTodoSuccess, 
         indGetTodoFailure,

         toggleTodoRequest,
         toggleTodoSuccess,
         toggleTodoFailure,

         deleteTodoRequest,
         deleteTodoSuccess,
         deleteTodoFailure,
         
         updateTodoTitleRequest,
         updateTodoTitleSuccess,
         updateTodoTitleFailure,
         
         getTodos,
         addTodos,
         indTodoDetails,
         handleToggle,
         handleDelete}