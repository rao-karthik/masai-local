import React from 'react';
import { Sidebar } from './Sidebar';
import styled from 'styled-components';
import { Dashboard } from './Dashboard';
import { DarkModeContext } from '../Contexts/DarkModeContextProvider';

const Container = styled.div`
    height: 743px;
    width: 1519px;
    background: #F5F6FA;
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
`;

export const Darkmode = () => {

    const { theme } = React.useContext(DarkModeContext)

    return (
        <Container style={{background: theme.dashboardColor}}>
            <Sidebar />
            <Dashboard />
        </Container>
    )
}
