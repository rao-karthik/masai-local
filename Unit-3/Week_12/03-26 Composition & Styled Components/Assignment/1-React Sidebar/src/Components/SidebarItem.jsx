import React from 'react'
import styled from 'styled-components';

const SideBItems = styled.div`
    display: flex;
    padding: 20px 40px;
    width: 150px;
    justify-content: space-between;
    font-size: 20px;
    opacity: 0.8;
    color: white;

    &:hover {
        opacity: 1.5;
        cursor:pointer;
        background: white;
    }
`;

export const SidebarItem = ({title, icon}) => {
    return (
        <div>
            <SideBItems>
                <div>{icon}</div>
                <div>{title}</div>
            </SideBItems>
        </div>
    )
}
