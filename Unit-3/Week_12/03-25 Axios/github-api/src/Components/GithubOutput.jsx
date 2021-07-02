import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    border-radius: 5px;
    padding:10px;
    width:350px;
    margin: 20px;
    background-image: linear-gradient(
        to right top,
        #070537,
        #701255,
        #ca394c,
        #f88c23,
        #e7eb12
    );
    color:white
`;

const ImageBox = styled.div`
    width: 100px;
    height: 100px;
    margin: 10px 20px
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
`;

const ContentBox = styled.div`
    margin: 0px 20px
`;

export const GithubOutput = ({avatar_url, login, id, type})=>{
    return (
        <>
        <Container>
            <ImageBox>
                <Image src= {avatar_url} alt=""/>
            </ImageBox>
            <ContentBox>
                <p>Id: {id} </p>               
                <p>Login: {login} </p>                
                <p>Type: {type} </p>
            </ContentBox>
        </Container>
        </>
    )
}