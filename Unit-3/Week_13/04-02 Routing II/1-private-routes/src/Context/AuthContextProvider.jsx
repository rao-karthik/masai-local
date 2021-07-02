import React from 'react'

export const AuthContext = React.createContext();

export const AuthContextProvider = ({children}) => {

    const [isAuth, setIsauth] = React.useState(false);
    const [token, setToken] = React.useState('');

    const loginSuccess = (token)=>{
        setIsauth(true);
        setToken(token)
    }

    const logoutSuccess = ()=>{
        setIsauth(false)
    }
    
    const value = {
        isAuth,
        token,
        loginSuccess,
        logoutSuccess
    }
    
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
