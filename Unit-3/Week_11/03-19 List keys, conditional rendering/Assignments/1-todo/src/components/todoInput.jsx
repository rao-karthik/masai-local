import React from 'react';
import styles from './todoInput.module.css'

function TodoInput ({query, handleAdd, handleChange}){
    return (
        <div className= {styles.inputBox}>
            <h1>TODO</h1>
            <div>
                <input  value = {query} 
                        onChange= {handleChange} 
                        type="text" 
                        placeholder="Enter Task" />
                
                <button onClick = {handleAdd}>Add</button>
            </div>
        </div>
    )
}

export {TodoInput}