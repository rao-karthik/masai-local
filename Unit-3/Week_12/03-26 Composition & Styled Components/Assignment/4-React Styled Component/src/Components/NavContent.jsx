import React from 'react';
import styled from 'styled-components';

const NavCont = styled.div`
    padding: 0 0 0 80px;
    color: white;
    width: 100%;
    
    &@media screen   and (max-width: 1035px){
        padding: 0px;
        background: red;
    }
`;

const Btns = styled.button`
    width: 100px;
    height: 35px;
    outline: none;
    border: none;
    background: #1bb76e;
    border-radius: 5px;
    margin: 0 20px;
    color: white;
    font-size: 16px;

    &@media screen   and (max-width: 1035px){
        font-size: 14px;
    }
`;

const Search = styled.input`
    width: 35%;
    height: 30px;
    border-radius: 5px;
    margin: 0 5rem;
    background: #hsla(0,0%,100%,.25);
    opacity: 0.3;
    outline: none;
    padding: 0 10px;
`;

const SignIn = styled.button`
    width: 70px;
    height: 30px;
    background: none;
    outline: none;
    border: none;
    margin: 0 20px;
    color: white;
    font-size: 16px;
    
    @media all (max-width: 1035px){
        font-size: 14px;
    }
`;

export const NavContent = () => {
    return (
        <NavCont>
            <Btns>New Post</Btns>
                <Search type="text" placeholder="Images, #tags,@users oh my!" />
                <SignIn>Sign In</SignIn>
                <Btns>Sign Up</Btns>
        </NavCont>
    )
}
