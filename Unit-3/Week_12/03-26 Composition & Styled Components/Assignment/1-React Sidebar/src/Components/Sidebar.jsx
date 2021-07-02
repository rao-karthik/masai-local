import React from 'react'
import styled from 'styled-components';

const Sideb = styled.div`
    width: 230px;
    background: grey;
    margin: 50px 0 0 20px;
`;

export const Sidebar = ({children}) => {
    return (
        <Sideb>
            {children}
        </Sideb>
    )
}
