import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { logoutRequest } from '../../State/LoginRegister/action';

const Container = styled.div`
    width: 200px;
    min-height:100%;
    border-right: 2px solid black;
    margin: 0px 13px 0 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
`;

const Top = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
`;
    
const Head = styled.div`
    padding: 10px 40px 0;
    width: 122px;
    height: 100px;
    border-bottom: 2px solid black;
    margin: 0;
`;

const Details = styled.div`
    padding: 20px;
    width: 160px;
`;

const Data = styled.div`
    width: 120px;;
    height: 30px;
    border: 1px solid black;
    margin: 8px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
`;

const Text = styled.p`
    margin: 0;
`;

const Bottom = styled.div`
    width: 202px;
    height: 30px;
    border-top: 2px solid black;
    cursor: pointer;
`;

export const Sidebar = () => {

    const todos = useSelector(state=> state.todosRed.todos);
    console.log(todos)

    const dispatch = useDispatch();

    const personal = todos.filter(item => item.personal === true);
    const official = todos.filter(item => item.official === true);
    const others = todos.filter(item => item.others === true);
    console.log(others)

    const handlelogout = ()=>{
        dispatch(logoutRequest())
    }
    
    return (
        <Container>
            <Top>
                <Head>
                    <p>User details fetch from api mocker</p>
                </Head>
                <Details>
                    <Data><Text>All</Text><Text>{todos.length}</Text></Data>
                    <Data><Text>Personal</Text><Text>{personal.length}</Text></Data>
                    <Data><Text>Official</Text><Text>{official.length}</Text></Data>
                    <Data><Text>Others</Text><Text>{others.length}</Text></Data>
                </Details>
            </Top>
            <Bottom onClick={handlelogout} ><Text>Logout</Text></Bottom>
        </Container>
    )
}
