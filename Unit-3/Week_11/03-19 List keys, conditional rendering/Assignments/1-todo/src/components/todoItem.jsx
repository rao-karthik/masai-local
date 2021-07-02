import React from 'react';
import styles from './todoItem.module.css'

function TodoItem({id, title, status, handleToggle, handleDelete}){
    return (
        <div className = {styles.output}>
            <div><span>Title:</span> {title}</div>

            <div><span>Status:</span> {status? "Done" : "Not Done"}</div>  {/* if status is true it will print Done else it will print Not Done */}

            <div className= {styles.btnBox}>
                <button onClick = {()=> handleToggle(id) }>Toggle</button>
                <button onClick = {()=> handleDelete(id) }>Delete</button>
            </div>
        </div>
    )
}

export {TodoItem};