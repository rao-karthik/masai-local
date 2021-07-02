import React from 'react';
import styled from 'styled-components';

const Comp = styled.div`
    width: 100%;
    height:100%;
`;

export const CreditComp = ({children}) => {
    return (
        <Comp>
            {children}
        </Comp>
    )
}
