import React from 'react'
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 50px;
    color: red;
`;


const Button = styled.div`
    width: 200px;
    height: 60px;
    padding: 1rem;
    text-align: center;
    cursor:pointer;
    background: ${(props)=>
        props.color === "primary" ? "#1976d2" : props.color === "secondary" ? "#e91e63" : "#cfd7dc"
    };
    &:hover {
        background: #cecece;
    };
`;

export const StyledComponents = () => {
    return (
        <div>
            <Title>Styled Components</Title>
            <Button color= "primary">Click Me</Button>
        </div>
    )
}
