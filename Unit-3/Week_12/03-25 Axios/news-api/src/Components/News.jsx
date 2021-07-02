import { useState, useEffect } from 'react';
import { NewsInput } from './NewsInput';
import styled from 'styled-components';
import { getData } from './newsAPI';
import { NewsDisp } from './NewsDisp';

const Container = styled.div`
    background-image: linear-gradient(to right top, #052c37, #005965, #008982, #00ba88, #12eb76);
`;

const Msg = styled.div`
    color: white;
    width: 500px;
    margin:auto;
    justify-content: center;
    text-align: center;
    padding: 20px;
`;

export const News = () => {

    const [input, setInput] = useState('');
    const [data, setData] = useState([]);

    const [page, setPage] = useState(1);
    const perPage = 20;

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleChange = (e)=>{
        const {value} = e.target;
        setInput(value);
    }

    const handleSearch = ()=>{
        handleGetData();
    }

    const handleGetData = ()=>{
        setIsLoading(true);
        setIsError(false);
        getData(input, page, perPage)
        .then(res=>{
            const recData = res.data.articles;
            console.log(recData)
            setData(recData)
        })
        .catch(err=>{
            setIsError(true);
            setIsLoading(false);
        })
        .finally(err=>{
            setIsLoading(false);
        })
    }

    useEffect(()=>{
        handleGetData()
    }, [page])

    return (
        <>
            <Container>
                <NewsInput handleChange = {handleChange} handleSearch = {handleSearch} />

                {isError ? <Msg><h1>Input Empty or Something went wrong</h1></Msg> : null}

                {isLoading ? <Msg><h1>loading...</h1></Msg> : <NewsDisp data = {data} page ={page} setPage = {setPage} />}
            </Container>
        </>
    )
}