import React from 'react';
import styled from 'styled-components';

const Container =styled.div`
    display: flex;
    width: 280px;
    border-radius: 5px;
    margin: auto;
    margin-top: 20px;
    background: #22272e;
    color: white;
`;

const ImageBox = styled.div`
    width: 100px;
    height: 100px;  
    margin-top: 15px;  
    margin-left: 20px;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50px;
`;

const ContentBox = styled.div`
    margin-left: 20px;
`;

const Content = styled.p``;

export const ProductListItem = ({title, cost, category, image}) => {
    return (
        <>
           <Container>
                <ImageBox>
                    <Image src = {image} />
                </ImageBox>
                <ContentBox>
                    <Content>Title: {title} </Content>
                    <Content>Cost: Rs{cost} </Content>
                    <Content>Category: {category} </Content>
                </ContentBox>
           </Container>
        </>
    )
}
