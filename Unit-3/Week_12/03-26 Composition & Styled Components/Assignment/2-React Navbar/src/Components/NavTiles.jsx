import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    color: white;
    padding: 0 100px;
    justify-content: space-between;
`;

const LeftCont = styled.div`
    font-size: 20px;
    padding: 13px 0;
`;

const RightCont = styled.div`
    display: flex;
`;

const RightElem = styled.p`
    margin: auto 10px;

    &:hover {
        cursor: pointer;
    }
`;

export const NavTiles = () => {
    return (
        <Container>
            <LeftCont>
                Site name
            </LeftCont>
            <RightCont>
                <RightElem>About Us</RightElem>
                <RightElem>Prices</RightElem>
                <RightElem>Start Page</RightElem>
                <RightElem>Offer</RightElem>
                <RightElem>Contact</RightElem>
            </RightCont>  
        </Container>
    )
}
