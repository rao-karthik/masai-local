import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    font-size: 14px;
    padding: 20px 50px;
`;


const Social = styled.div`
    position: relative;
    left: 600px;
    top: 120px;
`;

const links = [
    {
        to: '/faq',
        name: 'FAQ'
    },
    {
        to: '/job-opportunities',
        name: 'Job Opportunities'
    },
    {
        to: '/contact',
        name: 'Contact Us'
    }
]

export const FooterItems = () => {
    return (
        <>
            <Container>
                {
                    links.map(link=> <Link style={{fontSize: "14px", display:"flex", flexDirection:"column", textAlign: "left", margin:"7px", color:"black", textDecoration:"none"}} to={link.to} >{link.name}</Link>)
                }
                <Social>
                    <i style={{fontSize: '30px', margin:"0 5px"}} class="fab fa-facebook"></i>
                    <i style={{fontSize: '30px', margin:"0 5px"}} class="fab fa-twitter"></i>
                    <i style={{fontSize: '30px', margin:"0 5px"}} class="fab fa-instagram"></i>
                </Social>
            </Container>   
        </>
    )
}
