import React from 'react';
import styled from 'styled-components';
import { DarkModeContext } from '../Contexts/DarkModeContextProvider';
import { Users } from './Users';

const Container = styled.div`

`;

const TitleBox = styled.div`
height: 43px;
width: 240px;
border-radius: nullpx;
position: absolute;
left: 122px;
top: 30px;
`;

const Title = styled.h3`
font-size: 28px;
font-weight: 400;
line-height: 42px;
letter-spacing: 0px;
text-align: left;
`;

const TogBtn = styled.div`
    height: 30px;
    width: 60px;
    border-radius: 20px;
    position: absolute;
    left: 338px;
    top: 30px;
    background: #C4C4C4;
    cursor: pointer;
`;

const TogRound = styled.div`
    cursor: pointer;
    height: 30px;
    width: 30px;
    left: 338px;
    top: 30px;
    border-radius: 15px;
    position: absolute;
    background: #2991CB;
`;

const Mode = styled.p`
    height: 16px;
    width: 88px;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0px;
    position: absolute;
    left: 238px;
    top: 32px;
    line-height: 16px;
    text-align: right;
`;

export const Dashboard = () => {

    const { currentTheme, toggleTheme, theme } = React.useContext(DarkModeContext);

    return (
        <>
            <Container>
                <TitleBox>
                    <Title style={{color: theme.usersTitleColor}} >My Dashboard</Title>
                    <Mode style={{color: theme.usersTitleColor}}>{currentTheme} mode</Mode>
                    <TogBtn onClick={toggleTheme} ></TogBtn>
                    <TogRound style={{background: theme.buttonColor, left: theme.left}} onClick={toggleTheme} ></TogRound>
                </TitleBox>
                <Users />
            </Container>
        </>
    )
}
