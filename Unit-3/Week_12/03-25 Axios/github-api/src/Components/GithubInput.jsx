import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 400px;
    height: 100px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(
        to right top,
        #070537,
        #701255,
        #ca394c,
        #f88c23,
        #e7eb12
    );
    margin: auto;
    margin-top: 20px;
`;

const SearchInput = styled.input`
    background: #f07e2a;
    height: 25px;
    margin: 15px;
    border-radius: 5px;
    border: none;
    outline: none;
    color: white;
    width: 200px;
    padding-left: 10px;

    &::-webkit-input-placeholder {
        color:white;
        opacity: 0.5;
    }
`;

const SearchBtn = styled.button`
    height: 25px;
    width: 80px;
    margin: 15px;
    border-radius: 5px;
    border: none;
    outline: none;
    cursor: pointer;
    background: grey;
    color: white;
`;

export const GithubInput = ({ handleChange, handleSearch, isLoading }) => {
    return (
        <Container>
            <SearchInput type="text" onChange={handleChange} placeholder= "Search Here..." />
            <SearchBtn onClick={handleSearch}> {isLoading ? "Loading..." : "Search"} </SearchBtn>
        </Container>
    );
};
