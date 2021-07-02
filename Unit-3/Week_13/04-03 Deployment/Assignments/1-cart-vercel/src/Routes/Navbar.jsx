import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    background: black;
    padding: 10px 100px;
`;

const links = [
    {
        to: '/',
        name: "Home"
    },
    {
        to: '/cart',
        name: "Cart"
    }
]

export const Navbar = () => {
    return (
        <>
            <Container>
                {
                    links.map(link=> <Link style={{textDecoration: "none", margin:"0 10px", color: "white", fontSize: "20px"}} to={link.to} >{link.name}</Link>)
                }
            </Container>
        </>
    )
}
