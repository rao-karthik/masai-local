import React from 'react';
import styles from "./todosItemList.module.css"

export function TodoItemList ({title, id, status, handleDelete, handleToggle}){
    return (
        <div className = {styles.list}>
            <div>
                {
                    status ? 
                    (<input type="checkbox" checked  onChange = {() => handleToggle(id)} /> ) :
                    
                    ( <input type="checkbox"  onChange = {() => handleToggle(id)} />)
                }
                <div>{title}</div>
            </div>
            <button onClick = {() => handleDelete(id)} >-</button>
        </div> 
    )
}