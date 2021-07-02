import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { EditTitle } from '../Components/EditTitle';
import { IndTodo } from '../Components/IndTodo';
import { Home } from './Home';
import { LoginPage } from './LoginPage';
import { Navbar } from './Navbar'
import { PrivateRoute } from './PrivateRoute';

export const Routes = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <PrivateRoute path='/' exact >
                    <Home />
                </PrivateRoute>
                <PrivateRoute path= '/todo/:id' exact >
                    <IndTodo />
                </PrivateRoute>
                <PrivateRoute path='/todo/:id/edit' exact>
                    <EditTitle />
                </PrivateRoute>
                <Route path='/login' >
                    <LoginPage />
                </Route>
                <Route>
                    Error 404: Page not Found
                </Route>
            </Switch>
        </div>
    )
}
