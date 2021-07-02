import React, { useEffect } from 'react';
import { TodoInput } from './TodoInput';
import{ useDispatch, useSelector } from 'react-redux';
import { TodoOut } from './TodoOut';
import { addTodoRequest, addTodoSuccess, getTodoFailure, getTodoRequest, getTodoSuccess, addTodoFailure, getTodos, addTodos } from '../Redux/app/action';
import { getData, postData } from './apiData';
import styled from 'styled-components';

const Loading = styled.div`
    font-size: 50px;
    margin-top: 180px;
`;

export const Todo = () => {

    const todos = useSelector(state=>state.app.todo);
    const dispatch = useDispatch();
    const isLoading = useSelector(state=> state.app.isLoading)
    const isError = useSelector(state=> state.app.isError)


    const handleAdd = (payload)=>{
        dispatch(addTodos(payload))
    }

    useEffect(()=>{
        dispatch(getTodos())
    },[])
    
    return (
        <div>
            <TodoInput addData={handleAdd} />
            {
                isLoading ? <Loading>...Loading</Loading> :
                isError ? <Loading>Something Went Wrong</Loading>:
                todos.length > 0 &&
                todos.map(item=> <TodoOut key={item.id} {...item} />)
            }
        </div>
    )
}
