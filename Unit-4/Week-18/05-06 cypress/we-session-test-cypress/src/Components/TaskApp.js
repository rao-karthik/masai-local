import React, {Component} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import TaskForm from './TaskForm'
import TaskList from './TaskList'


export default function TodoApp () {
  
  const [ todos, setTodos ] = React.useState([])
  
  const handleSubmit = (e)=>{
    e.preventDefault()

    const form = new FormData(e.target);

    const payload = {
      title: form.get("title"),
      status: false
    }

    fetch("/tasks", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res=>res.json())
    .then(res=>{
      setTodos([...todos, res])
    })
    .catch(err=>{
      console.log(err)
    })
    
  }
  
  return (
    <Router>
      <div className="container-fluid text-center">
        <header className="p-2">
          <h1>Tasks</h1>
          <TaskForm onSubmit={handleSubmit} />
        </header>
        <section className="mt-2">
          <TaskList todos={todos} />
        </section>
      </div>
    </Router>
  )
}