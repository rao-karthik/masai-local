import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../State/LoginRegister/action';

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
    const token = useSelector(state=> state.logReg);
    console.log(token)
    const dispatch = useDispatch();

    const handleChange = (e)=>{
        const { name, value} = e.target;
        const updatedData = {
            ...loginInp,
            [name]: value
        }
        setLoginInp(updatedData);
    }

    const handleSubmit= (e)=>{
        e.preventDefault();
        dispatch(loginUser(loginInp))
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}  >
                <Input type="text" placeholder="Enter Username" name="username" onChange={handleChange} />
                <Input type="text" placeholder="Enter Password" name="password" onChange={handleChange} />
                <Input type="submit" value="Login" />
            </form>
        </div>
    )
}
