import React, { useContext, useEffect, useState } from 'react';
import { TodoInput } from './TodoInput';
import { ReduxContext } from '../Redux/ReduxContextProvides';
import { TodoOut } from './TodoOut';
import { addTodo, getTodoFailure, getTodoRequest, getTodoSuccess, toggleTodo } from '../Redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from './apiData';

export const Todo = () => {

    // const { getState, dispatch } = useContext(ReduxContext);

    const todo = useSelector(state=> state.todo)

    // const { todo } = getState();

    const dispatch = useDispatch()

    const [input, setInput] = useState('');

    const handleChange = (e)=>{
        const { value } = e.target;
        setInput(value)
    }

    const getTodos = ()=>{
        dispatch(getTodoRequest())

        getData()
        .then(res=>{
            console.log()
            dispatch(getTodoSuccess(res.data))
        })
        .catch(err=>{
            dispatch(getTodoFailure(err))
        })
    }

    const handleAdd = ()=>{
        const payload = {
            id: todo.length + 1,
            title: input,
            status: false
        }
        dispatch(addTodo(payload));
    }
    
    return (
        <div>
            <TodoInput handleAdd={handleAdd} handleChange={handleChange} />
            {
                todo.map(item=> <TodoOut key={item.id} toDo={item} {...item} handleToggle={handleToggle} handleDelete={handleDelete} />)
            }
        </div>
    )
}
