import React from 'react';
import { ThemeContext } from '../Context/ThemeContextProvider';
import { Form } from './Form';
import styled from 'styled-components';

const Button = styled.button`
    border-radius: 5px;
    width: 120px;
    margin: 20px 0;
    height: 30px;
    border: none;
    outline: none;
    cursor: pointer;
    background: grey;
`;

export const Navbar = () => {

    const {currentTheme, toggleTheme, theme} = React.useContext(ThemeContext);
    
    return (
        <div>
            <Button style= {{background: theme.buttonColor}} onClick = {toggleTheme} >Change to {currentTheme === "light" ? "Dark" : "Light"}</Button>
            <Form />
        </div>
    )
}
