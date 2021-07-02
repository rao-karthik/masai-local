import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    height: 60px;
    background: #212121;
    margin: 0 0 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const links = [
    {
        to: '/',
        title: 'Home'
    }
]

export const Navbar = () => {
    return (
        <Container>
            {
                links.map(link=> <Link style={{color:'white', textDecoration:'none', fontSize:'30px'}} to={link.to} >{link.title}</Link>)
            }
        </Container>
    )
}
