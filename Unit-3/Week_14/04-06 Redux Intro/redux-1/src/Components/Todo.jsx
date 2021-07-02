import React, { useContext, useEffect, useState } from 'react';
import { TodoInput } from './TodoInput';
import { ReduxContext } from '../Redux/ReduxContextProvider';
import { TodoOut } from './TodoOut';
import { addTodo, toggleTodo } from '../Redux/action';

export const Todo = () => {

    const { getState, dispatch } = useContext(ReduxContext);

    const { todo } = getState();

    const [input, setInput] = useState('');

    const handleChange = (e)=>{
        const { value } = e.target;
        setInput(value)
    }

    const handleAdd = ()=>{
        const payload = {
            id: todo.length + 1,
            title: input,
            status: false
        }
        dispatch(addTodo(payload));
    }

    const handleToggle = (id)=>{
        const upDated = todo.map(item=> item.id === id ? {...item, status: !item.status} : item)
        dispatch(toggleTodo(upDated))
    }

    const handleDelete = (id)=>{
        const upDated = todo.filter(item=> item.id !== id);
        // dispatch(addTodo(upDated))
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
