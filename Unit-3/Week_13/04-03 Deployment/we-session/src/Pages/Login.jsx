import React from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import { LoginItems } from '../Components/LoginItems'
import { AuthContext } from '../Context/AuthContextProvider';
import axios from 'axios';

const initDetails = {
    email: '',
    password: ''
}

export const Login = () => {

    const [input, setInput] = React.useState(initDetails);
    const {email, password} = input;

    const {isAuth, loginSuccess, token} = React.useContext(AuthContext);

    const [isLoading, setIsLoading] = React.useState(false);

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setInput({
            ...input,
            [name]: value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const payload = {
            ...input
        }
        handleLogin(payload)
    }

    const handleLogin = ()=>{
        setIsLoading(true);
        const baseURL = process.env.REACT_APP_BASE_URL
        axios
            .post(`${baseURL}/login`, {
            email,
            password
            })
            .then(res=>{
                loginSuccess(res.data.token)
            })
            .catch(err=>{})
            .finally(()=>{
                setIsLoading(false)
            })
    }

    if (isAuth){
        return <Redirect to='/dashboard' push />
    }

    
    return (
        <>
            {
                isLoading ? <h3>...Loading</h3> : 
                <LoginItems {...input} handleChange= {handleChange} handleSubmit= {handleSubmit} /> 
            }
        </>
    )
}
