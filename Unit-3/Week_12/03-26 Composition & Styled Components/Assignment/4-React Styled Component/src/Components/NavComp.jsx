import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
    background: #19183c;
    width: 100%;
    padding: 20px 0;
    position: relative;
    top: 0;
`;

export const NavComp = ({children}) => {
    return (
        <Nav>
            {children}
        </Nav>
    )
}
