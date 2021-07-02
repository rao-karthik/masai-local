import {createContext, useState} from 'react'
import { getData } from '../Components/dataAPI';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [isAuth, setIsAuth] = useState(false);

    const toggleIsAuth = ()=>{
        getData()
        .then(res=>{
            const token = res.data.token;
            console.log(token)
            token === "QpwL5tke4Pnpja7X4" ? setIsAuth(prev => !prev) : setIsAuth(false);
        })
    }

    const value = {
        isAuth,
        toggleIsAuth
    }
    
    return (
        <AuthContext.Provider value = {value}>
            {children}
        </AuthContext.Provider>
    )
}
