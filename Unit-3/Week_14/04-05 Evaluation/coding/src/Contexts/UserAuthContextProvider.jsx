import React from 'react';
import { Redirect } from 'react-router';
import {v4 as uuid} from 'uuid';
import { postData } from '../Components/apiData';

export const UserAuthContext = React.createContext();

const initDetails = {
    name: '',
    email: '',
    password: '',
    highestQual: '',
    passYr: '',
    dob: {
        day: '1',
        mon: 'jan',
        yr: '1994'
    },
    gender: 'm',
    state: 'DL'
}

export const UserAuthContextProvider = ({children}) => {

    const [regInp, setReginp] = React.useState(initDetails);
    const [regData, setRegData] = React.useState([]);

    const {name, email, password, highestQual, dob, passYr, gender, state} = regInp;

    const handleRegInp = (e)=>{
        const {name, value, day, mon, yr} = e.target;
        const updatedData = {
            ...regInp,
            [name] : value,
            dob: {
                day: day,
                mon: mon,
                yr: yr
            }
        };
        setReginp(updatedData)
        {
            <Redirect to='./' />
        }
    }

    const handleRegister = (e)=>{
        e.preventDefault();
        const payload = [
            ...regData,
            {
                id: uuid(),
                name,
                email,
                password,
                highestQual,
                dob,
                passYr,
                gender,
                state
            }
        ]
        postData(payload)
    }

    const value = {
        handleRegInp,
        handleRegister
    }
    
    return (
        <UserAuthContext.Provider value={value}>
            {children}
        </UserAuthContext.Provider>
    )
}
