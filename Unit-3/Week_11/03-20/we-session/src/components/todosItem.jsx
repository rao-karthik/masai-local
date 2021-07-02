import React, { useState } from 'react';
import {TodoItemList} from './todosItemList';
import styles from './todosItem.module.css';

export function TodoItem({data, handleDelete, handleToggle}){

    const [showCompleted, setShowCompleted] = useState(false)

    return (
        <div>
            {
                data.filter(item => !item.status).map(item => <TodoItemList key = {item.id} {...item} handleDelete = {handleDelete} handleToggle = {handleToggle} />)
            }

            <button className = {styles.completed} onClick={()=> setShowCompleted(!showCompleted)}>{showCompleted? "HIDE" : "SHOW"} COMPLETED TO-DOS</button>

            {showCompleted && (
                <>
                    {
                        data.filter(item => item.status).map(item => <TodoItemList key = {item.id} {...item} handleDelete = {handleDelete} handleToggle = {handleToggle} />)
                    }
                </>
            )}


        </div>
    )
}