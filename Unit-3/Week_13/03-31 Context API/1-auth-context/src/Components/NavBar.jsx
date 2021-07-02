import React from 'react';
import styled from 'styled-components';
import { AuthContext } from '../Context/AuthContextProvider';

const Container = styled.div`
    width:100%;
    padding: 20px;
    background: #212121;
    margin: auto;
`;
    
const Button = styled.button`
    border-radius: 5px;
    width: 120px;
    margin: 10px 0;
    height: 30px;
    border: none;
    outline: none;
    cursor: pointer;
`;

export const Navbar = () => {
    
    const {isAuth, toggleIsAuth} = React.useContext(AuthContext);

    return (
        <>
            <Container>
                <Button onClick = { toggleIsAuth } >{ isAuth ? "Logout" : "Login" }</Button> 
            </Container>
        </>
    )
}
