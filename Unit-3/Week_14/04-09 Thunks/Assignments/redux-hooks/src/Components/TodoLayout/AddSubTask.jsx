import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';

export const AddSubTask = ({subTask, setSubTask}) => {

    const [ subInp, setSubInp ] = useState('');

    const subTasks = useSelector(state=> state.todosRed.subTasks)
    const dispatch = useDispatch();

    const handleSubInp = (e)=>{
        const { value } = e.target;
        setSubInp(value)
    }

    const addSubTask = ()=>{
        const data = [
            ...subTask,
            {
                id: uuid(),
                subTask: subInp,
                status: false
            }
        ]
        setSubTask(data)
        setSubInp('')
    }
    // console.log(subTask)

    const handleDelete = (id)=>{
        const updated = subTask.filter(item=> item.id !== id);
        setSubTask(updated);
    }
    
    return (
        <div style={{display: 'flex', flexDirection:'column'}}>
            <div style={{margin:'10px'}}>
                <input type="text" value={subInp} name='subtask' placeholder='Add SubTask' name='subTask' onChange={handleSubInp} />
                <button onClick={addSubTask}>Add</button>
            </div>
            {
                subTask.map(task=> <div style={{ border:'2px solid black', display: 'flex', justifyContent: 'space-between', padding:'10px', minHeight: '20px', margin: '5px 10px'}}>
                    <input type="checkbox"/>
                    <p style={{margin:'0'}}>{task.subTask}</p>
                    <button onClick={()=>{handleDelete(task.id)}} >delete</button>
                </div>)
            }
        </div>
    )
}
