import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginFailure, loginSuccess } from '../Redux/auth/action';
import styled from 'styled-components';
import { loginData } from './apiData';
import axios from 'axios';

const Container = styled.div`
    width: 250px;
    height: 180px;
    background: #212121;
    color: white;
    border-radius: 10px;
    padding: 20px;
    margin: 130px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Input = styled.input`
    width: 200px;
    height: 30px;
    border-radius: 5px;
    margin: 15px 0;
    border: none;
    outline: none;
    padding: 0 10px;
`;

const Btn = styled.button`
    width: 80px;
    height: 30px;
    border-radius: 5px;
    margin: 15px 0;
    border: none;
    outline: none;
    background: #00e676;
    font-weight: 600;
    cursor: pointer;
`;

const initDetails = {
    email: '',
    password: ''
}

export const Login = ()=>{

    const [loginInp, setLoginInp] = useState(initDetails);
    const { email, password } = loginInp;

    const dispatch = useDispatch();
    const isAuth = useSelector(state=> state.auth.isAuth);

    const handleLoginInp = (e)=>{
        const { name, value} = e.target;
        const updated = {
            ...loginInp,
            [name]: value
        }
        setLoginInp(updated);
    }
    
    const handleLogin = (email, password)=>{
        // axios
        //     .post("https://reqres.in/api/login", {
        //     email,
        //     password
        //     })
            loginData(email, password)
            .then(res=>{
                console.log(res.data.token)
                if(res.data.token !== undefined){
                    dispatch(loginSuccess(res.data.token))
                }
            })
            .catch(err=>{
                dispatch(loginFailure(err))
            })
    }

    // useEffect(()=>{
    //     handleLogin()
    // },[])
    
    if( isAuth ){
        return <Redirect to='/' />
    }
    return (
        <Container>
            <Input type="email" name="email" value={email} placeholder="Enter Email" onChange={handleLoginInp} />
            <Input type="text" name="password" password={password} placeholder="Enter Password" onChange={handleLoginInp} />
            <Btn onClick={()=>handleLogin(email, password)} >Login</Btn>
        </Container>
    )
}