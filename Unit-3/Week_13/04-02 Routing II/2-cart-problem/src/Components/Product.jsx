import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../Contexts/AppContextProvider'

const Container = styled.div`
    display: flex;
    width: 400px;
    height: 200px;
    border: 1px solid black;
    align-items: center;
    border-radius: 5px;
    margin: 20px;
`;

const ImageBox = styled.div`
    width: 100px;
    height: 100px;
    margin: 10px; 
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 5p
`;

const ContentBox = styled.div`
    margin-left: 10px;
`;

const QuantBox = styled.div`
    display: flex;
    position: relative;
    left: 175px;
    top: 10px;
`;

const QuantBtn = styled.button`
    width: 30px;
    height: 30px;
    outline: none;
    background: none;
    border: 1px solid black;
    cursor: pointer;
`;

const PBox = styled.div`
    width: 28px;
    height: 28px;
    margin: 0;
    padding: 0;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 0;
    border-left: 0;
`;

const QuantCount = styled.p`
    margin: 0;
`;

const DesDiv = styled.div`
    position: relative;
    top: -5px;
`;

const Descrip = styled.p`
    display: inline-block;
    margin-left: 5px;
`;

const CartBtn = styled.button`
    background: teal;
    position: relative;
    top: -15px;
    left: 150px;
    border: none;
    width: 100px;
    height: 25px;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    outline: none;
`;


export const Product = ({id, product, price, description, image, quantity}) => {

    const {countInc, countDec, handleData, handleAdd} = React.useContext(AppContext);
    return (
        <>
            <Container>
                <ImageBox>
                    <Image src={image} />
                </ImageBox>
                <ContentBox>
                    <QuantBox>
                        <QuantBtn disabled = {quantity === 0} onClick = {()=>countDec(id, quantity)}>-</QuantBtn>
                        <PBox><QuantCount>{quantity}</QuantCount></PBox>
                        <QuantBtn onClick = {()=>countInc(id, quantity)} >+</QuantBtn>
                    </QuantBox>
                    <DesDiv>
                        <Descrip>Product: </Descrip>
                        <Descrip>{product}</Descrip>
                    </DesDiv>
                    <DesDiv>
                        <Descrip>Description: </Descrip>
                        <Descrip>{description}</Descrip>
                    </DesDiv>
                    <DesDiv>
                        <Descrip>Price: </Descrip>
                        <Descrip>Rs {price}</Descrip>
                    </DesDiv>
                    <CartBtn onClick= {()=> handleAdd(id, quantity)} >Add to Cart</CartBtn>
                </ContentBox>
            </Container>
        </>
    )
}
