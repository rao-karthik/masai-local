import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../State/LoginRegister/action';

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
    name: '',
    email: '',
    password: '',
    username: '',
    mobile: '',
    description: ''
}

export const Register = () => {

    const [registerInp, setRegisterInp] = useState(initDetails);
    const dispatch = useDispatch();

    const handleChange = (e)=>{
        const { name, value} = e.target;
        const updatedData = {
            ...registerInp,
            [name]: value
        }
        setRegisterInp(updatedData);
    }

    const handleSubmit= (e)=>{
        e.preventDefault();
        dispatch(registerUser(registerInp))
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}  >
                <Input type="text" placeholder="Enter Name" name="name" onChange={handleChange} required />
                <Input type="text" placeholder="Enter Email" name="email" onChange={handleChange} required />
                <Input type="text" placeholder="Enter Password" name="password" onChange={handleChange} required />
                <Input type="text" placeholder="Enter Username" name="username" onChange={handleChange} required />
                <Input type="text" placeholder="Enter Mobile" name="mobile" onChange={handleChange} required />
                <Input type="text" placeholder="Enter Description" name="description" onChange={handleChange} required />
                <Input type="submit" value="Register" />
            </form>
        </div>
    )
}