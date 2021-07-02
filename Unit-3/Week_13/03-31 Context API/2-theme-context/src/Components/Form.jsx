import React from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../Context/ThemeContextProvider';

const Container = styled.div`
    width:100%;
    padding: 20px;
    height: 599px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    outline: none;
`;

const Input = styled.input`
    border-radius: 5px;
    width: 200px;
    margin: 0 10px;
    height: 27px;
    padding: 0 10px;
`;
    
const Button = styled.button`
    border-radius: 5px;
    width: 120px;
    margin: 0 10px;
    height: 30px;
    border: none;
    outline: none;
    cursor: pointer;
    background: grey;
`;

export const Form = () => {

    const {theme} = React.useContext(ThemeContext)

    return (
        <>
            <Container>
                <form>
                    <Input type="email" placeholder="Enter Email" />
                    <Input type="text" placeholder="Enter Password" />
                    <Button style= {{background: theme.buttonColor}} >Login</Button>
                </form> 
            </Container>
        </>
    )
}
