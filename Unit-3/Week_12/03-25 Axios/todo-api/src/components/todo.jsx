import React from 'react';
import {v4 as uuid} from 'uuid';
import {TodoInput} from './todoInput';
import {TodoItem} from './todoItem';
import styles from './todo.module.css'
import { getData, addData, toggleData } from './DataApi.js';
import { Pagination } from './Pagination';

function TodoList(){
    const [query, setQuery] = React.useState("");
    const [todo, setTodo] = React.useState([]); // todo is an empty array here
    const [showCompleted, setShowCompleted] = React.useState(false);

    const [isLoading, setIsLoading] = React.useState(true);
    const [isError, setIsError] = React.useState(false);

    const [page, setPage] = React.useState(1);
    const limit = 5;

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

        addData(payLoad)
        .then((response)=>{
            fetchTodos();
        })
        .catch(err =>{
            setIsError(true);
            setIsLoading(false); 
        })
        setQuery("");
    }

    const handleToggle = (id, status)=>{
        toggleData(id, status)
        .then(()=>{
            fetchTodos()
        })
    }

    const handleDelete = (id)=> {
        const updatedTodo = todo.filter(item => item.id !== id);
        setTodo(updatedTodo);
    }

    const fetchTodos = ()=>{
        setIsLoading(true)
        getData({page, limit})
        .then((response)=>{
            setTodo(response.data)
        })
        .catch(err =>{
            setIsError(true);
            setIsLoading(false); 
        })
        .finally(()=>{
            setIsLoading(false);
        })
    }

    React.useEffect(()=>{
        fetchTodos()
    }, [page])

    return (
        <div>
            <TodoInput query = {query} handleChange = {handleChange} handleAdd = {handleAdd} />
            <Pagination currentPage = {page} onChange = {page=>setPage(page)} limit = {limit} />
            
            {
                isLoading ? (
                    <div>... Loading</div>
                ) : (
                    <div>
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
        </div>
    )
}

export {TodoList}