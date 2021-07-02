import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { RegisterDetails } from '../Components/RegisterDetails';
import { Home } from './Home';
import { Login } from './Login';
import { Navbar } from './Navbar';
import { Register } from './Register';

export const Routes = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/register">
                    <Register />
                </Route>
                <Route exact path="/register/details">
                    <RegisterDetails />
                </Route>
                <Route>
                    <h3>Error 404: Page Not Found</h3>
                </Route>
            </Switch>
        </div>
    )
}
