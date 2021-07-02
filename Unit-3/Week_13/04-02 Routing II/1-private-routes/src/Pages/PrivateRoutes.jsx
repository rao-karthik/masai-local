import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider'

export const PrivateRoute = ({children, path, exact=false, redirectPath='/login', push=false}) => {

    const { isAuth } = React.useContext(AuthContext);
    
    return (
        isAuth ? (
            <Route path= {path} exact={exact}>
                {children}
            </Route>
        ) : (
            <Redirect to={redirectPath} push={push} />
        )
    )
}
