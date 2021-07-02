import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { updateTodoTitleFailure, updateTodoTitleRequest, updateTodoTitleSuccess } from '../Redux/action';
import { editTitle } from './apiData';

const Container = styled.div`
    width: 500px;
    height: 150px;
    background: #212121;
    color: white;
    border-radius: 10px;
    padding: 20px;
    margin: auto;
`;

const Input = styled.input`
    width: 200px;
    height: 30px;
    border-radius: 5px;
    margin: 0 5px;
    border: none;
    outline: none;
    padding: 0 10px;
`;

const Btn = styled.button`
    width: 80px;
    height: 30px;
    border-radius: 5px;
    margin: 0 5px;
    border: none;
    outline: none;
    background: #00e676;
    font-weight: 600;
    cursor: pointer;
`;

const BackBtn = styled.button`
    width: 120px;
    height: 30px;
    background: #00e676;
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    margin: 10px;
`;

export const EditTitle = () => {

    const dispatch = useDispatch();
    const indTodo = useSelector(state=> state.indTodo);
    const { id } = useParams();

    const [newTitle, setNewTitle] = useState('')

    const history = useHistory();

    const handleNewInp = (e)=>{
        const {value} = e.target;
        setNewTitle(value)
    }

    const handleTitleupdate = (newId, updatedTitle)=>{
        dispatch(updateTodoTitleRequest())

        editTitle(newId, updatedTitle)
        .then(res=>{
            dispatch(updateTodoTitleSuccess(res.data))
            history.replace(`/todo/${id}`)
        })
        .catch(err=>{
            dispatch(updateTodoTitleFailure(err))
        })
    }

    const handleGoBack = ()=>{
        history.push(`/todo/${id}`);
    }

    useEffect(()=>{
        const { title } = indTodo;
        setNewTitle(title)
    },[])
    
    return (
        <>
            <Container>
                <h1>UPDATE TODO TITLE</h1>
                <div>
                    <Input type="text"  onChange = { handleNewInp } value={newTitle}  placeholder="Enter a new Todo..." />
                    <Btn onClick={()=>handleTitleupdate(id, newTitle)} >Update</Btn>
                </div>
            </Container>
            <BackBtn onClick= {handleGoBack} >Go Back</BackBtn>
        </>
    )
}
