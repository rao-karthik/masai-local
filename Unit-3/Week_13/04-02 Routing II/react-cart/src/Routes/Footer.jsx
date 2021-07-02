import React from 'react';
import styled from 'styled-components';
import { FooterItems } from '../Compoents/FooterItems';

const Container = styled.div`
    background: #e0e0e0;
    height: 300px;
`;

export const Footer = () => {
    return (
        <>
            <Container>
                <FooterItems />
            </Container>
        </>
    )
}
