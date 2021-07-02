import React from 'react'

const TaskItem = props =>
  <li>
    <div >
      <label>
        {props.todo.title}
      </label>
    </div>
  </li>

const TaskList = props =>
  <ul className="task-list">
    {props.todos?.map(todo => <TaskItem key={todo.id} todo={todo} />)}
  </ul>

export default TaskList