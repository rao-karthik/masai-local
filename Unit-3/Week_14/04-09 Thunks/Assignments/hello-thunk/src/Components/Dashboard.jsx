import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux'
import { githubUserSearch } from '../State/action';
import Axios from 'axios';
import { DasboardOut } from './DasboardOut';

const axios = Axios.create({
	baseURL: 'https://api.github.com/'
})

const Input = styled.input`
    width: 250px;
    height: 30px;
    margin: 8px 0;
    border-radius: 5px;
    outline: none;
    border: 1px solid black;
    padding: 0 10px;
`;

export const Dashboard = () => {

    const [ searchInp, setSearchInp ] = useState(' ');
    const dispatch = useDispatch()
    const [page, setPage] = useState(1);

    const userData = useSelector(state=> state.userData);

    const handleChange = (e)=>{
        const { value } = e.target;
        setSearchInp(value)
    }

    const handleSearch = ()=>{
        console.log(searchInp)
        const data = {
            page,
            searchInp
        }
        dispatch(githubUserSearch(data));
    }

    useEffect(()=>{
        dispatch(githubUserSearch(searchInp));
    },[page])

    return (
        <div>
            <Input type="text" placeholder="Search Here..." value={searchInp} onChange={handleChange} />
            <button onClick={handleSearch} >Search</button>
            {
                userData.map(data => <DasboardOut {...data} />)
            }
            {
                userData.length>0 && 
                    <div>
                        <button disabled={page === 1} onClick={()=> setPage(page-1)} >Prev</button>
                        <button disabled={page === 3} onClick={()=> setPage(page+1)} >Next</button>
                    </div>
            }
        </div>
    )
}
