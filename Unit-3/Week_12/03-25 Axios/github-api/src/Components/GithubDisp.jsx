import React from 'react';
import styled from 'styled-components';
import { GithubOutput } from './GithubOutput';

const Container = styled.div`
    width: 82%;
    height: auto;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const GithubDisp = ({data})=>{
    return (
        <>
            <Container>
                {
                    data.map(item=> <GithubOutput {...item} />)
                }
            </Container>
        </>
    )
}