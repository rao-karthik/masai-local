import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    text-align: left;
    width:390px;
    padding: 10px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background: #607d8b;
    height: 150px;
    box-shadow: 0 0 10px 2px #607d8b;
    color: white;
    margin: 10px;
`;

const ImgBox =styled.div`
    width: 150px;
    height: 150px;
    margin-right: 10px;
`;

const Img = styled.img`
    height: 100%;
    widht: 100%;
    border-radius: 5px;
`;

const ContentBox = styled.div`
    margin-left: 10px;
    width: 220px;
`;

const Content = styled.p`
    margin: 5px;
    font-size: 14px;
`;

const Dish = styled.h2`
    margin-top: 0;
`;

const Recipe = styled.div`

`;

export const HomeOutp = ({idMeal, strMealThumb, strMeal, strDrinkAlternate, strCategory, strArea, strTags}) => {
    return (
        <>
            <Container>
                <ImgBox>
                    <Img src={strMealThumb} />
                </ImgBox>
                <ContentBox>
                    <Dish>{strMeal}</Dish>
                    <Content>Category: {strCategory}</Content>
                    <Content>Area: {strArea}</Content>
                    <Content>Tags: {strTags}</Content>
                    <Link to={`/recipe/${idMeal}`}>Get Recipe</Link>
                </ContentBox>
            </Container> 
        </>
    )
}
