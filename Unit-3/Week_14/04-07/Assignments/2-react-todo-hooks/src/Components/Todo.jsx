import React, { useEffect, useState } from 'react';
import { TodoInput } from './TodoInput';
import{ useDispatch, useSelector } from 'react-redux';
import { TodoOut } from './TodoOut';
import { addTodoRequest, addTodoSuccess, getTodoFailure, getTodoRequest, getTodoSuccess, addTodoFailure } from '../Redux/action';
import { getData, postData } from './apiData';

export const Todo = () => {

    const todos = useSelector(state=>state.todo);
    const dispatch = useDispatch();
    const isLoading = useSelector(state=> state.isLoading)
    const isError = useSelector(state=> state.isError)


    const handleAdd = (payload)=>{
        addTodos(payload)
    }

    const addTodos = (payload)=>{
        dispatch(addTodoRequest())

        postData(payload.title, payload.status)
        .then(res=>{
            dispatch(addTodoSuccess(res.data));
            getTodos()
        })
        .catch(err=>{
            dispatch(addTodoFailure(err))
        })
    }
    
    const getTodos = ()=> {
        dispatch(getTodoRequest());

        getData()
        .then(res=>{
            dispatch(getTodoSuccess(res.data))
        })
        .catch(err=>{
            dispatch(getTodoFailure())
        })
    }

    useEffect(()=>{
        getTodos()
    },[])
    
    return (
        <div>
            <TodoInput addData={handleAdd} />
            {
                isLoading ? <div>...Loading</div> :
                isError ? <div>Something Went Wrong</div>:
                todos.length > 0 &&
                todos.map(item=> <TodoOut ket={item.id} {...item} />)
            }
        </div>
    )
}
