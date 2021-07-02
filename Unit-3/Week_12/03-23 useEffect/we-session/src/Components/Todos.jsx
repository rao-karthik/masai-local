import React from 'react'
import {getTodo} from "./TodoApi.js"

export const Todos = () => {
    const [Todos, setTodos] = React.useState([])

    const handleGetTodo = ()=> {
        getTodo()
        .then((res) => console.log(res))
    }

    React.useEffect(()=> {
        handleGetTodo()
    }, []);

    return (

        <div>
            <div>Todo</div>
            <input type="text" placeholder= "add something" />
            <button>Add</button>
        </div>
    )
}
