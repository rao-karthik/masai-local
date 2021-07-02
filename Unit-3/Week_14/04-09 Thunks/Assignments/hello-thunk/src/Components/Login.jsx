import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, getRegisteredUserDetails } from '../State/action';

const Input = styled.input`
    width: 250px;
    height: 30px;
    margin: 8px 0;
    border-radius: 5px;
    outline: none;
    border: 1px solid black;
    padding: 0 10px;
`;

const initDetails = {
    username: '',
    password: ''
}

export const Login = () => {

    const [loginInp, setLoginInp] = useState(initDetails);
    const token = useSelector(state=> state.token);
    const isAuth = useSelector(state=> state.isAuth);
    const isLoading = useSelector(state=> state.isLoading);
    const isError = useSelector(state=> state.isError);
    const registeredDetails = useSelector(state=> state.registeredDetails);
    const state = useSelector(state=> state)
    // console.log(state)

    const { name, email, mobile, description } = registeredDetails;

    const dispatch = useDispatch();
    const { username } = loginInp;

    const handleChange = (e)=>{
        const { name, value} = e.target;
        const updatedData = {
            ...loginInp,
            [name]: value
        }
        setLoginInp(updatedData);
    }

    const getDetailsParams = {
        username,
        token
    }
    console.log(getDetailsParams)

    const handleSubmit= (e)=>{
        e.preventDefault();
        dispatch(loginUser(loginInp))
        // setTimeout(()=>{
            dispatch(getRegisteredUserDetails(getDetailsParams));
        // },1000)
    }
    
    return (
        <div>
            {
                isLoading ? <div>...Loading</div> :
                isError ? <div>Something Went Wrong</div> :
                !isAuth ? 
                    <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}  >
                    <Input type="text" placeholder="Enter Username" name="username" onChange={handleChange} />
                    <Input type="text" placeholder="Enter Password" name="password" onChange={handleChange} />
                    <Input type="submit" value="Login" />
                </form>
                :
                <div>
                    <p>Username: {username}</p>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                    <p>Mobile: {mobile}</p>
                    <p>Description: {description}</p>
                </div>
            }
        </div>
    )
}
