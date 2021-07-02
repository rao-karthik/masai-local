import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router'

export const PrivateRoute = ({children, path, redirectPath='/login', push=false}) => {

    const isAuth = useSelector(state=>state.logReg.isAuth)
    
    return (
        isAuth ? (
            <Route path={path} exact>
                {children}
            </Route>
        ) : (
            <Redirect to={redirectPath} push={push} />
        )
    )
}
