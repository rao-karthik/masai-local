import React from 'react';
import styled from 'styled-components';

const ImageCont = styled.div`
    width: 100px;
    position: absolute;
    left: 7rem;

    @media screen   and (max-width: 1035px){
        display: none;
    }
`;

const ImageCon = styled.img`
    width: 100%;
    height: 100%;
`;

export const Logo = ({image}) => {
    return (
        <>
            <ImageCont>
                <ImageCon src = {image} />
            </ImageCont>
        </>
    )
}
