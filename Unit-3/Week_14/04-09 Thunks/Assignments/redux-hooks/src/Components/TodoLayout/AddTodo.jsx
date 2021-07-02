import React, { useEffect, useState } from 'react'
import { Sidebar } from './Sidebar';
import styled from 'styled-components';
import { AllTodo } from './AllTodo';
import { InProgress } from './InProgress';
import { Done } from './Done';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { AddSubTask } from './AddSubTask';
import { addTodos, getTodos } from '../../State/Todos/action';
import { useHistory } from 'react-router';

const Container = styled.div`
    display: flex;
    min-height: 500px;
    border: 2px solid black;
    padding: 0;
    width: 1006px;
    margin: auto;
`;

const AddContent = styled.div`
    display: flex;
    justify-content: space-between;
    height: auto;
    padding: 20px 0;
`;

const Content = styled.div`
    width: 234px;
    margin: 0 10px;
    height: auto;
`;

const Input = styled.input`
    margin-bottom: 20px;
`;

const Tags = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 5px;
`;

const OtherContent = styled.div`
    position: absolute;
    top: 300px;
`;

const BackBtn = styled.button`
    position: absolute;
    top: 500px;
    right: 220px;
`;

const initData = {
    title: '',
    date: '',
    description: '',
    status: 'inProgress',
    official: false,
    personal: false,
    others: false
}


export const AddTodo = () => {

    const [addInp, setAddInp] = useState(initData);
    const subTasks = useSelector(state=> state.subTasks)
    const [subTask, setSubTask] = useState([])
    // const [task, setTask] = useState([])

    const todos = useSelector(state=> state.todosRed.todos);

    const dispatch = useDispatch();

    const history = useHistory();

    const handleInp = (e)=>{
        const { name, value, checked, type } = e.target;
        const updatedValue = type === 'checkbox' ? checked : value;
        const updated = {
            ...addInp,
            [name] : updatedValue
        };
        setAddInp(updated);
    };

    const handleCreate = ()=>{
        const payload = {
            id: uuid(),
            ...addInp,
            subTasks: subTask
        };
        dispatch(addTodos(payload));
        setAddInp(initData);
        history.push('/');
    };

    const handleBack = ()=>{
        history.replace('/');
    };

    useEffect(()=>{
        dispatch(getTodos());
    },[]);
    
    return (
        <Container>
            <Sidebar />
            <div>
                <AddContent>
                    <Content style= {{display:'flex', flexDirection:'column', margin:'10px'}}>
                        <Input type="text" placeholder='Title' name="title" onChange={handleInp} />
                        <textarea name="description" onChange={handleInp} />
                    </Content>
                    <Content>
                        <AddSubTask subTask={subTask} setSubTask={setSubTask} />
                    </Content>
                    <Content style={{display:'flex', flexDirection:'column', padding:'10px'}}>
                        <Input type="date" name='date' onChange={handleInp} />

                        <button onClick={handleCreate} >Create New Task</button>

                        <BackBtn onClick={handleBack} >Go Back</BackBtn>
                    </Content>
                </AddContent>

                <OtherContent>
                    <Tags>
                        <label>
                            <input type="radio" name='status' value='todo' onChange={handleInp} />
                            Todo
                        </label>
                        <label>
                            <input type="radio" name='status' value='inProgress' onChange={handleInp} />
                            In Progress
                        </label>
                        <label>
                            <input type="radio" name='status' value='done' onChange={handleInp} />
                            Done
                        </label>
                    </Tags>
                    <Tags> 
                        Tag (multiple possible)
                        <label>
                            <input type="checkbox"  name='official' onChange={handleInp} />
                            Official
                        </label>
                        <label>
                            <input type="checkbox" name="personal"  onChange={handleInp} />
                            Personal
                        </label>
                        <label>
                            <input type="checkbox" name="others" onChange={handleInp} />
                            Others
                        </label>
                    </Tags>
                </OtherContent>
            </div>
        </Container>
    )
}
