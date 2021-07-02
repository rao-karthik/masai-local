import React, { useState } from 'react';

function Todo (){
    const [query, setQuery] = useState("todo");
    const[todos, setTodos] = useState([])

    const handleChange = (e)=> {
        const{value} = e.target;
        setQuery (value);
    }

    const handleAdd = ()=>{
        const payload = {
            title : query,
            status: false
        }

        const updatedTodo = [...todos, payload];
        setTodos(updatedTodo);
        setQuery ("");
    }
    return (
        <div>
            <h1>Todo</h1>
            <div>
                <input value= {query} onChange = {handleChange} type="text"/>
                <button onClick = {handleAdd}>ADD</button>
            </div>
            <h3>{query}</h3>
            <div>
                { todos.map ((item)=> 
                    <div>
                        {`${item.title} - ${item.status}`}
                    </div>)       
                }
            </div>
        </div>
    )

}

export default Todo;