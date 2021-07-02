import React, { useEffect } from 'react'
import { Sidebar } from './Sidebar';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../../State/Todos/action';

const Container = styled.div`
    display: flex;
    height: 500px;
    border: 2px solid black;
    padding: 0;
    width: 1006px;
    margin: auto;
`;

const Head = styled.div`
    padding: 10px 40px 0;
    width: 152px;
    height: 230px;
    margin: 0;
`;

const Data = styled.div`
    width: 120px;;
    height: 30px;
    border: 1px solid black;
    margin: 8px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
`;

const Text = styled.p`
    margin: 0;
`;

const BackBtn = styled.button`
    position: absolute;
    top: 500px;
    right: 220px;
`;

export const Summary = () => {

    const todos = useSelector(state=> state.todosRed.todos);

    const inProgress = todos.filter(item=> item.status === "inProgress");
    const done = todos.filter(item=> item.status === "done");
    const todo = todos.filter(item=> item.status === "todo");

    const dispatch = useDispatch();

    const history = useHistory()

    const handleBack = ()=>{
        history.replace('/');
    };

    useEffect(()=>{
        dispatch(getTodos())
    },[])
    
    return (
        <>
            <Container>
                <Sidebar />
                <Head>
                    <h3>Summary</h3>
                    <Data><Text>Todo</Text><Text>{todo.length}</Text></Data>
                    <Data><Text>Done</Text><Text>{done.length}</Text></Data>
                    <Data><Text>In Progress</Text><Text>{inProgress.length}</Text></Data>
                    <BackBtn onClick={handleBack} >Go Back</BackBtn>
                </Head>
            </Container>
        </>
    )
}
