import React from 'react'
import styled from 'styled-components';

const NavCom = styled.div`
    height: 60px;
    background: black;
`;

export const NavComp = ({children}) => {
    return (
        <NavCom>
            {children}
        </NavCom>
    )
}
