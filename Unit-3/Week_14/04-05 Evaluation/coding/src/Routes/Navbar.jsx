import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    padding: 20px 140px;
    background: #65181e;
    color: white;
    justify-content: space-between;
`;

const RightEle = styled.div`

`;

const LeftEle = styled.div`

`;

const leftLinks = [
    {
        to: '/',
        name: 'Home'
    }
]

const rightLinks = [
    {
        to: '/register',
        name: 'Sign Up'
    }
]

export const Navbar = () => {
    return (
        <>
            <Container>
                <LeftEle>
                    {
                        leftLinks.map(link=> <Link style={{color:"white", margin:"8px", textDecoration:"none", fontSize:"20px"}} to={link.to} >{link.name}</Link>)
                    }
                </LeftEle>
                <RightEle>
                    {
                        rightLinks.map(link=> <Link style={{color:"white", margin:"8px", textDecoration:"none", fontSize:"20px"}} to={link.to} >{link.name}</Link>)
                    }
                </RightEle>
            </Container>
        </>
    )
}
