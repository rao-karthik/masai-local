import React from 'react';
import styled from 'styled-components';

const BtnCont = styled.div`
    display: flex;
    width: 300px;
    margin: auto;
    margin-top:20px;
`;

const Btn = styled.button`
    width: 100px;
    height: 30px;
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    background: teal;
    margin: 0 20px;
`;

const Page = styled.p`
    margin-top: 0;
    font-size: 20px;
`;

export const Pagination = ({page, setPage}) => {
    return (
        <>
        <BtnCont>
            <Btn onClick = {()=> setPage(page-1)} >Prev</Btn>
            <Page>{page}</Page>
            <Btn onClick = {()=> setPage(page+1)} >Next</Btn>
        </BtnCont>
            
        </>
    )
}
