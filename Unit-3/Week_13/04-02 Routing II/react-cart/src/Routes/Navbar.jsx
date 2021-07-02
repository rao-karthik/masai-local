import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 50px;
    background: black;
    display: flex;
    align-items: center;
    padding: 5px 90px;
    justify-content: space-between;
`;

const Left = styled.div`

`;

const Right = styled.div`

`;

const leftLinks = [
    {
        to: '/',
        name:'Home'
    },
    {
        to: 'about',
        name: 'About Us'
    },
    {
        to: '/products',
        name: 'Products'
    }
]

const rightLinks = [
    {
        to: '/login',
        name: 'Login'
    },
    {
        to: '/cart',
        name: <i class="fas fa-shopping-cart"></i>
    }
]

export const Navbar = () => {
    return (
        <>
            <Container>
                <Left>
                    {
                        leftLinks.map(item=> <Link style={{margin:"7px", color:"white", textDecoration:"none", fontSize:"18px"}} to={item.to} >{item.name}</Link>)
                    }
                </Left>
                <Right>
                {
                    rightLinks.map(item=> <Link style={{margin:"7px", color:"white", textDecoration:"none", fontSize:"18px"}} to={item.to} >{item.name}</Link>)
                }
                </Right>
            </Container>
        </>
    )
}
