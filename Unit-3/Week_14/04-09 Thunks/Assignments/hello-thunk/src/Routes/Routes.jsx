import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { Navbar } from './Navbar'
import { RegisterPage } from './RegisPage'

export const Routes = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route path='/' exact>
                    <HomePage />
                </Route>
                <Route path='/login'>
                    <LoginPage />
                </Route>
                <Route path='/register' >
                    <RegisterPage/>
                </Route>
            </Switch>
        </div>
    )
}
