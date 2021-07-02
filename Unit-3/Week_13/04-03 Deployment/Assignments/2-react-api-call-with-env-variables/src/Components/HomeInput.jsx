import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 400px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #607d8b;
    box-shadow: 0 0 10px 2px #607d8b;
    border-radius: 5px;
    margin: auto;
    margin-top: 20px;
`;

const Input = styled.input`
    height: 28px;
    width: 240px;
    padding-left: 10px;
    outline: none;
    border: none;
    border-radius: 5px;
    margin-right: 8px;
`;

const Btn = styled.button`
    height: 30px;
    width: 80px;
    border: none;
    outline: none;
    background: red;
    color: white;
    border-radius: 5px;
    margin-left: 8px;
    cursor: pointer;
`;

export const HomeInput = ({ handleChange, handleSearch }) => {
    return (
        <>
            <Container>
                <Input type="text" onChange= {handleChange} />
                <Btn onClick = {handleSearch} >Search</Btn>
            </Container>   
        </>
    )
}
