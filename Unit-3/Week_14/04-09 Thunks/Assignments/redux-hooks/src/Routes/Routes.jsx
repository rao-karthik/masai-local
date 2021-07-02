import React from 'react';
import { Navbar } from './Navbar';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { RegisterPage } from './RegisterPage';
import { AddTodo } from '../Components/TodoLayout/AddTodo';
import { PrivateRoute } from './PrivateRoute';
import { Summary } from '../Components/TodoLayout/Summary';

export const Routes = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <PrivateRoute path='/' exact>
                    <HomePage />
                </PrivateRoute>
                <Route path='/login'>
                    <LoginPage />
                </Route>
                <Route path='/register'>
                    <RegisterPage />
                </Route>
                <PrivateRoute path='/addTodo'>
                    <AddTodo />
                </PrivateRoute>
                <PrivateRoute path='/summary'>
                    <Summary />
                </PrivateRoute>
            </Switch>
        </div>
    )
}
