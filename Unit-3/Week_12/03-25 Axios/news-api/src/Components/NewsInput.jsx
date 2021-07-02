import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 430px;
    margin: auto;
    padding: 50px;
    `;
    
    const SearchInp = styled.input`
    width: 300px;
    height: 30px;
    border: 1px solid white;
    outline: none;
    border-radius: 5px;
    padding-left: 10px;
    background: #00af87;
    margin-right: 10px;
    color: white;

    &::-webkit-input-placeholder {
        color: white;
        opacity:0.7;
    }
`;

const SearchBtn = styled.button`
    cursor: pointer;
    width: 100px;
    height: 33px;
    border: none;
    outline: none;
    border-radius: 5px;
    background: grey;
    opacity: 0.8;
    color: white;

    &:hover {
        opacity: 1;
    }
`;

export const NewsInput = ({ handleChange, handleSearch }) => {
    return (
        <>
            <Container>
                <SearchInp type="text" placeholder="Search Here..." onChange= {handleChange} />
                <SearchBtn onClick = {handleSearch} >Search</SearchBtn>
            </Container>
        </>
    )
}