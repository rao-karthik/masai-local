import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { deleteTodo, toggleTodo } from '../Redux/action';
import { ReduxContext } from '../Redux/ReduxContextProvides';

const Container = styled.div`
    display: flex;
    width: 460px;
    margin: auto;
    padding: 0 40px;
    height: 80px;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    margin: 10px auto;
    background: #212121;
    color: white;
    border-radius: 10px;
`;

const Popup = styled.div`
    width: 250px;
    height:250px;
    position: absolute;
    top:30vh;
    left: 35%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #212121;
    border-radius: 20px;
    box-shadow:  0 0 10px white;
    z-index: 2;
    opacity: .8;

    @media (max-width: 600px) {
        left: 20%;
    }
    @media (max-width: 780px) {
        left: 38%;
    }
    @media (min-width: 1000px) {
        left: 40%;
    }
    @media (min-width: 1100px) {
        left: 42%;
    }
`;

const Btn = styled.button`
    width: 60px;
    height: 30px;
    background: #00e676;
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
`;

const PopBtn = styled.button`
    width: 150px;
    height: 40px;
    background: #00e676;
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 20px;
    font-size: 18px;
    font-weight: 600;
`;

const Exit = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 20px;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    color: white;
`;

export const TodoOut = ({id, toDo, title, status, handleToggle, handleDelete}) => {

    const [show, setShow] = useState(false);

    // const { getState, dispatch } = useContext(ReduxContext);

    const dispatch = useDispatch();

    const handleEdit = ()=>{
        setShow(true);
    }

    const handleExit = ()=>{
        setShow(false);
    }
    
    return (
        <div>
            <Container>
                <p>{title}</p>
                <p>{status ? "Done" : "Not Done"}</p>
                <Btn onClick={handleEdit} >Edit</Btn>
            </Container>
            {
                show && 
                <Popup>
                    <PopBtn onClick={()=>dispatch(toggleTodo(id))} >Toggle</PopBtn>
                    <PopBtn onClick={()=>dispatch(deleteTodo(id))} >Delete</PopBtn>
                    <Exit onClick={handleExit} >X</Exit>
                </Popup>
            }
        </div>
    )
}
