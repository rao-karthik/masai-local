import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 500px;
    margin: 10px;
    border-radius: 5px;
    box-shadow: 0px 0px 1px 3px white;
`;

const Link = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: blue;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

const ImageCont = styled.div`
    width: 100%;
    height: 200px;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
`;

const ContentCont = styled.div`
    width: 460px;
    padding: 20px;
`;

const Title = styled.h3`
    color: #e2bcb7;
`;

const Content = styled.p`
    font-size: 13px;
    color: white;
`;

const Author = styled.h5`
    text-align: right;
    font-size: 13px;
`;

export const NewsOutput = ({ url, title, urlToImage, description, content, author }) => {
    return (
        <>
            <Container>
                <ImageCont>
                    <Image src={urlToImage} />
                </ImageCont>
                <ContentCont>
                    <Title> {title} </Title>
                    <Content> {description} </Content>
                    <Content> {content} <Link href = {url} >Click here to read full story</Link> </Content>
                    <Author> {author} </Author>
                </ContentCont>
            </Container>
        </>
    )
}
