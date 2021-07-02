import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
    width: 230px;
    height: 88%;
    border: 2px solid black;
    margin: 26px 13px;
    padding: 0;
    display: flex;
    flex-direction: column;
`;
    
const Head = styled.div`
    padding: 10px 40px 0;
    width: 152px;
    height: 30px;
    border-bottom: 2px solid black;
    margin: 0;
    text-align: center;
`;

const Details = styled.div`
    padding: 20px;
    width: 160px;
    border: 2px solid black;
    margin: 13px;
`;

const Data = styled.div`
    width: 35px;
    height: auto;
    border: 1px solid black;
    margin: 2px 0;
    display: inline-block;
    padding: 2px;
    font-size: 9px;
    position: relative;
`;

const Task = styled.h3`
    text-align: left;
    margin: 0;
`;

const Text = styled.p`
    margin: 0;
`;

const SubTasks = styled.div`
    margin-top: 10px;
`;

const STask = styled.div`
    display: flex;
`;

export const AllTodo = () => {

    const todos = useSelector(state=> state.todosRed.todos);

    const filTodo = todos.filter(item=> item.status === 'todo')
    
    return (
        <Container>
            <Head>
                <Text>TODO</Text>
            </Head>
            {
                filTodo.map(item=>
                    <Details>
                        <Task>{item.title}</Task>
                        <Data>{ item.personal && item.official && item.others ? "Personal, Official, Others" :
                                item.personal && item.offical ? "Personal, Offical" :
                                item.personal && item.others ? "Personal, Others" :
                                item.offical && item.others ? "Official, Others" :
                                item.personal ? "Personal" : 
                                item.official ? "Official" : "Others" }</Data>

                        <Data style={{border:'none', width:'50px', marginLeft:'65px'}}>{item.date}</Data>
                        <Data style={{display: 'block', border:'none', fontSize:'12px'}} >{item.description}</Data>
                        <SubTasks>
                            {
                                item.subTasks && item.subTasks.map(sub=>
                                    <STask>
                                        <input style={{margin:'6px 10px 0 0'}} type="checkbox"/>
                                        <Text>{sub.subTask}</Text>
                                    </STask>
                                    )
                            }
                        </SubTasks>
                    </Details>
                    )
            }
        </Container>
    )
}
