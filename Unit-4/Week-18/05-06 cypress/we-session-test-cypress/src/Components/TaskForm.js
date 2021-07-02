import React from 'react'

const TaskForm = props =>
  <form onSubmit={props.onSubmit}>
    <input
      type='text'
      autoFocus
      name='title'
      className="p-2 rounded border task-input"
      placeholder="Add something?"/>
  </form>

  export default TaskForm