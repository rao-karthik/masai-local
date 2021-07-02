import React from 'react';

export const AuthContext = React.createContext();

export function AuthContextProvider ({children}) {

    const [isAuth, setIsAuth] = React.useState(false);

    const handleToggleAuth = ()=>{
        setIsAuth(prev => !prev)
    }

    const value = {
        isAuth,
        handleToggleAuth
    }
    return <AuthContext.Provider value = {value}>{children}</AuthContext.Provider>
}