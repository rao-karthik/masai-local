import React from 'react';
import styled from 'styled-components';
import { DarkModeContext } from '../Contexts/DarkModeContextProvider';

const Container = styled.div`
    height: 743px;
    width: 60px;
    position: absolute;
    left: 0%;
    right: 94.38%;
    top: 0%;
    bottom: 0%;
    background: #FFFFFF;
    box-shadow: 0px 0px 2px #E5E9F2;
`;

const Icon = styled.div`
    height: 45px;
    width: 62px;
    top: 200px;
    border-radius: 5px;
    position: relative;
    border-radius: 0 5px 5px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2px 0;

    &:hover {
        background: linear-gradient(180deg, #679CF6 0%, #4072EE 100%);
        box-shadow: 0px 2px 5px #ACB2C1;
        cursor: pointer;
    }
`;

const User = styled.div`
    height: 34px;
    width: 34px;
    left: 13px;
    top: 30px;
    position: absolute;
`;

const UsrImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 17px;
`;

const Add = styled.div`
    height: 34px;
    width: 34px;
    left: 13px;
    top: 670px;
    position: absolute;
    border-radius: 17px;
    background: #29CB97;
    display: flex;
    justify-content:center;
`;

export const Sidebar = () => {

    const {theme } = React.useContext(DarkModeContext);

    return (
        <>
            <Container style={{background: theme.sidebarColor}}>
                <User><UsrImg src="https://via.placeholder.com/150" /></User>
                <Icon><i style={{color:"#DADADA"}} class="far fa-chart-bar"></i></Icon>
                <Icon><i style={{color:"#DADADA"}} class="fas fa-box"></i></Icon>
                <Icon><i style={{color:"#DADADA"}} class="fas fa-shopping-cart"></i></Icon>
                <Icon><i style={{color:"#DADADA"}} class="far fa-comment-alt"></i></Icon>
                <Icon><i style={{color:"#DADADA"}} class="far fa-file-alt"></i></Icon>
                <Icon><i style={{color:"#DADADA"}} class="fas fa-cog"></i></Icon>
                <Add><p style={{fontSize: "20px", color:"white", marginTop: "2px"}} >+</p></Add>
            </Container>
        </>
    )
}
