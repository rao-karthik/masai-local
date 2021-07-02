import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    width: 360px;
    margin: auto;
    padding: 0 90px;
    height: 80px;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    margin: 10px auto;
    background: #212121;
    color: white;
    border-radius: 10px;
`;

export const TodoOut = ({id, title, status, handleToggle, handleDelete}) => {
    
    return (
        <div>
            <Link style={{textDecoration:'none'}} to={`/todo/${id}`}>
                <Container>
                    <p>Todo: {title}</p>
                    <p>Status: {status ? "Done" : "Not Done"}</p>
                </Container>
            </Link>
        </div>
    )
}
