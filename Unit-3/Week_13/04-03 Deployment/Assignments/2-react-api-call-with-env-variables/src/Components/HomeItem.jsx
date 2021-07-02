import React from 'react';
import { getData } from './apiData';
import { HomeInput } from './HomeInput';
import { HomeOutp } from './HomeOutp';
import styled from 'styled-components';

const Out = styled.div`
    display: flex;
    width: 1290px;
    margin: auto;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

export const HomeItem = () => {

    const [input, setInput] = React.useState("");
    const [data, setData] = React.useState([]);

    const handleChange = (e)=>{
        const { value } = e.target;
        setInput(value)
    }

    const handleGetData = ()=>{
        getData(input)
        .then(res=>{
            setData(res.data.meals);
        })
    }

    const handleSearch = ()=>{
        handleGetData();
        setInput("");
    }

    React.useEffect(()=>{
        handleGetData()
    },[])
    
    return (
        <div>
            <HomeInput handleChange= {handleChange} handleSearch = {handleSearch} />
            <Out>
                {
                    data?.map(item=> <HomeOutp key={item.idMeal} {...item} />)
                }
            </Out>
        </div>
    )
}
