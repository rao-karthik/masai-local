import React, { useState } from 'react';
import styled from 'styled-components';

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

export const TodoInput = ({addData}) => {

    const [inp, setInp] = useState('');
    
    const handleInp = (e)=>{
        const { value } = e.target;
        setInp(value)
    }

    const handleAdd = ()=>{
        const payload = {
            title: inp,
            status: false
        }
        addData(payload);
        setInp("");
    }
    
    return (
        <Container>
            <h1>TODOS</h1>
            <div>
                <Input type="text" onChange={handleInp} placeholder="Enter a Todo..." />
                <Btn onClick={handleAdd} >ADD</Btn>
            </div>
        </Container>
    )
}
