import React from 'react';
import {v4 as uuid} from 'uuid';
import {TodoInput} from './todoInput';
import {TodoItem} from './todoItem';
import styles from './todo.module.css'

function TodoList(){
    const [query, setQuery] = React.useState("");
    const [todo, setTodo] = React.useState([]); // todo is an empty array here
    const [showCompleted, setShowCompleted] = React.useState(false);

    const handleChange = (e)=>{
        const {value} = e.target; //extracting the value from input
        setQuery(value);
    }

    const handleAdd = ()=>{
        const payLoad = {
            id: uuid(), // adding id
            title: query,
            status: false
        }

        const updatedTodo = [...todo, payLoad]; // storing data in the variable
        setTodo(updatedTodo); // uppdating the todo List
        setQuery("");
    }

    const handleToggle = (id)=>{
        const updatedTodo = todo.map( item => item.id == id ? {...item, status: !item.status} : item);
        setTodo(updatedTodo);
    }

    const handleDelete = (id)=> {
        const updatedTodo = todo.filter(item => item.id !== id);
        setTodo(updatedTodo);
    }

    return (
        <div>
            <TodoInput query = {query} handleChange = {handleChange} handleAdd = {handleAdd} />
            
            <div>
                <div>
                    <h3>NOT COMPLETED TASKS</h3>
                </div>
                {
                    todo.filter(item=> !item.status).map ((item) => <TodoItem key = {item.id} {...item} handleToggle = {handleToggle} handleDelete = {handleDelete} />)
                }
            </div>

            <button className= {styles.btn} onClick= {()=>setShowCompleted(!showCompleted)} >{showCompleted? "Hide": "Show"} Completed Tasks</button>
            
            {showCompleted && (
                <>
                    <div>
                        <h3>COMPLETED TASKS</h3>
                    </div>
                        {
                            todo.filter(item=> item.status).map ((item) => <TodoItem key = {item.id} {...item} handleToggle = {handleToggle} handleDelete = {handleDelete} />)
                        }
                </>
            )}
        </div>
    )
}

export {TodoList}