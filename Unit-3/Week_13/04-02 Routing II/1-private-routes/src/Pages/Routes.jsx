import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Login } from './Login'
import { Dashboard } from './Dashboard'
import { Home } from './Home'
import { Navbar } from './Navbar'
import { Settings } from './Settings'
import { PrivateRoute } from './PrivateRoutes'

export const Routes = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <PrivateRoute exact path='/dashboard'>
                    <Dashboard />
                </PrivateRoute>
                <PrivateRoute exact path= '/dashboard/settings'>
                    <Settings />
                </PrivateRoute>
                <Route path='/login'>
                    <Login />
                </Route>
            </Switch>
        </div>
    )
}
