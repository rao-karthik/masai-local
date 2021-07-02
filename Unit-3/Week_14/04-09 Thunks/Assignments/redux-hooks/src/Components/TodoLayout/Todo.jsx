import React, { useEffect } from 'react'
import { Sidebar } from './Sidebar';
import styled from 'styled-components';
import { AllTodo } from './AllTodo';
import { InProgress } from './InProgress';
import { Done } from './Done';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getTodos } from '../../State/Todos/action';

const Container = styled.div`
    display: flex;
    min-height: 500px;
    border: 2px solid black;
    padding: 0;
    width: 1006px;
    margin: auto;
`;

export const Todo = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getTodos())
    },[])
    
    return (
        <>
            <div style={{textAlign:'center', margin:'0 0 20px'}}>
                <Link style={{textDecoration:'none', margin:'10px'}} to='/addTodo' >Add Todo</Link>
                <Link style={{textDecoration:'none', margin:'10px'}} to='/summary' >Summary</Link>
            </div>
            <Container>
                <Sidebar />
                <AllTodo />
                <InProgress />
                <Done />
            </Container>
        </>
    )
}
