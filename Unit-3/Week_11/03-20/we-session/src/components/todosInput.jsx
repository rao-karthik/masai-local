import React from 'react';
import styles from './todosInput.module.css';

export function TodoInput({title, handleChange, handleAdd}){
    return (
    <div className = {styles.todoInput}>
        <button onClick = {handleAdd} >+</button>
        <input type="text" placeholder="Add a to-do..." onChange= {handleChange} value= {title} />
    </div>
    )
}