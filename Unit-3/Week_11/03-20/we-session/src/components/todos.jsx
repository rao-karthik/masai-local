import React, { useState } from 'react';
import { TodoInput } from './todosInput';
import { TodoItem } from './todosItem';
import {v4 as uuid} from 'uuid';
import styles from './todos.module.css';

export function Todo(){
    const [inputQuery, setInputQuery] = useState("");
    const [todos, setTodos] = useState([]);

    const handleChange = (e)=>{
    const {value} = e.target;
    setInputQuery(value);
    }

    const handleAdd = ()=>{
    const payload = {
        title: inputQuery,
        status: false,
        id: uuid()
    }
    const updatedData = [...todos, payload];
    setTodos(updatedData);
    setInputQuery("");
    }

    const handleToggle = (id)=>{
        const updatedTodo = todos.map(item => item.id === id ? {...item, status: !item.status} : item);
        setTodos(updatedTodo);
    }

    const handleDelete = (id)=>{
        const updatedData = todos.filter(item => item.id !== id);
        setTodos(updatedData);
    }

    return (
    <div className = {styles.todos} >
        <TodoInput {...todos} handleChange = {handleChange} handleAdd = {handleAdd} />
        
        <TodoItem data = {todos} handleDelete = {handleDelete} handleToggle = {handleToggle} />
    </div>
    )
}