import React from 'react';
import styled from 'styled-components';
import { NewsOutput } from './NewsOutput';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 1050px;
    margin: auto;
    padding-bottom: 15px;
`;

const BtnsCont = styled.div`
    display: flex;
    padding-bottom: 30px;
    width: 250px;
    margin: auto;
`;

const PageNo = styled.p`
    color: white;
    font-size: 22px;
    padding: 0;
    margin: 0;
`;

const Btns = styled.button`
    width: 100px;
    height: 33px;
    border: none;
    outline: none;
    border-radius: 5px;
    color: white;
    background: grey;
    margin: 0 20px;
    cursor: pointer;
`;

export const NewsDisp = ({data, page, setPage}) => {
    return (
        <>
            <Container>
                {
                    data.map(item=> <NewsOutput {...item} />)
                }
            </Container>
            <BtnsCont>
                <Btns onClick = {()=>setPage(page-1)} >Prev</Btns>
                <PageNo> {page} </PageNo>
                <Btns onClick = {()=>setPage(page+1)} >Next</Btns>
            </BtnsCont>
        </>
    )
}
