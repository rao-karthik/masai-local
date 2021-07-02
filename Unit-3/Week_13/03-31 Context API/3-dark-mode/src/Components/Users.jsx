import React from 'react';
import styled from 'styled-components';
import { DarkModeContext } from '../Contexts/DarkModeContextProvider';

const Container = styled.div`
    height: 380px;
    width: 400px;
    border-radius: 5px;
    background: #FFFFFF;
    box-shadow: 0px 1px 4px #E5E9F2;
    position: absolute;
    left: 122px;
    right: 60.14%;
    top: 120px;
    bottom: 38.77%;
`;

const Head = styled.div`
    height: 514px;
    width: 360px;
    border-radius: 5px;
    position: absolute;
    left: 0px;
    right: 60.14%;
    top: 120px
    bottom: 38.77%;
    display: flex;
    justify-content: space-between;
    padding: 20px;
`;

const P = styled.p`
    padding: 0;
    margin: 0;
    font-size: 16px;
`;

const User = styled.div`
    height: 34px;
    width: 34px;
    padding: 20px;
    position: absolute;
    top: 40px;
`;

const UsrBox = styled.div`
    display: flex;
`;

const UsrImg = styled.img`
    height: 34px;
    width: 34px;
    border-radius: 17px;
    left: 13px;
`;

const UsrDet = styled.div`
margin-left: 10px;
`;

const Det = styled.p`
    margin: 0;
    font-size: 13px;
    text-align: left;
    width: 100px;
`;

const Line = styled.div`
    height: 3px;
    width: 360px;
    border-radius: 1.5px;
    background: #363C43;
    margin-top: 10px;
    position: absolute;
`;

const LineCol = styled.div`
    height: 5px;
    width: 250px;
    border-radius: 2.5px;
    background: #29CB97;
    top: -1px;
    margin-top: 10px;
    position: relative;
`;

const Bottom = styled.div`   
    display: flex;
    justify-content: space-between;
    width: 360px;
    margin-top: 5px;
`;
const Prof = styled.p`
    font-size: 13px;
    width: 120px;
    margin: 0;
`;

const Points = styled.h4`
    font-size: 13px;
    margin: 0;
`;

export const Users = () => {

    const { theme } = React.useContext(DarkModeContext);

    return (
        <>
            <Container style={{background: theme.userContainer}}>
                <Head>
                    <P style={{color: theme.usersTitleColor}} >Active Users</P>
                    <div style={{color: theme.usersTitleColor}}><P><span style={{fontSize:"13px", color: "#748AA1", margiRight: "5px"}} >for</span> August 2020</P></div>
                </Head>
                <User>
                    <UsrBox>
                        <UsrImg src="https://via.placeholder.com/150" />
                        <UsrDet>
                            <Det style={{color: theme.usersTitleColor}}>Nrupul Dev</Det>
                            <Det style={{color:"#748AA1", fontSize:"11px"}}>Bangalore</Det>
                        </UsrDet>
                    </UsrBox>
                    <Line style={{background: theme.lineCol}}></Line>
                    <LineCol></LineCol>
                    <Bottom>
                        <Prof style={{color: theme.usersTitleColor}}>Professional Level 15</Prof>
                        <Points style={{color: theme.usersTitleColor}}>4723 Points</Points>
                    </Bottom>
                </User>

                <User style={{top:"140px"}}>
                    <UsrBox>
                        <UsrImg src="https://via.placeholder.com/150" />
                        <UsrDet>
                            <Det style={{color: theme.usersTitleColor}}>Nrupul Dev</Det>
                            <Det style={{color:"#748AA1", fontSize:"11px"}}>Bangalore</Det>
                        </UsrDet>
                    </UsrBox>
                    <Line style={{background: theme.lineCol}}></Line>
                    <LineCol style={{width:"190px", background: "#4072EE"}} ></LineCol>
                    <Bottom>
                        <Prof style={{color: theme.usersTitleColor}}>Professional Level 11</Prof>
                        <Points style={{color: theme.usersTitleColor}}>2339 Points</Points>
                    </Bottom>
                </User>

                <User style={{top:"250px"}} >
                    <UsrBox>
                        <UsrImg src="https://via.placeholder.com/150" />
                        <UsrDet>
                            <Det style={{color: theme.usersTitleColor}}>Nrupul Dev</Det>
                            <Det style={{color:"#748AA1", fontSize:"11px"}}>Bangalore</Det>
                        </UsrDet>
                    </UsrBox>
                    <Line style={{background: theme.lineCol}}></Line>
                    <LineCol style={{width:"120px", background: "#B558F6"}} ></LineCol>
                    <Bottom>
                        <Prof style={{color: theme.usersTitleColor}}>Professional Level 6</Prof>
                        <Points style={{color: theme.usersTitleColor}}>1884 Points</Points>
                    </Bottom>
                </User>
            </Container>   
        </>
    )
}
