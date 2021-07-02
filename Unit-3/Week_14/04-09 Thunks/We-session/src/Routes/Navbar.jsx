import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { loginFailure } from '../Redux/auth/action';

const Container = styled.div`
    height: 60px;
    background: #212121;
    margin: 0 0 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Btn = styled.button`
    width: 80px;
    height: 30px;
    border-radius: 5px;
    margin: 0 10px;
    border: none;
    outline: none;
    background: #00e676;
    font-weight: 600;
    cursor: pointer;
`;

const links = [
    {
        to: '/',
        title: 'Home'
    }
]

export const Navbar = () => {

    const isAuth = useSelector(state=> state.auth.isAuth);
    const dispatch = useDispatch();

    const handleLogout= ()=>{
        dispatch(loginFailure())
    }
    
    return (
        <Container>
            {
                links.map(link=> <Link style={{color:'white', margin:'0 10px', textDecoration:'none', fontSize:'30px'}} to={link.to} >{link.title}</Link>)
            }
            {
                !isAuth ? <Link style={{color:'white', margin:'0 10px', textDecoration:'none', fontSize:'30px'}} to='/login' >Login</Link> :
                <Btn onClick={handleLogout} >LogOut</Btn>
            }
        </Container>
    )
}
