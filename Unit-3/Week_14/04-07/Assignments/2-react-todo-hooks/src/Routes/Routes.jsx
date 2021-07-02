import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { EditTitle } from '../Components/EditTitle';
import { IndTodo } from '../Components/IndTodo';
import { Home } from './Home';
import { Navbar } from './Navbar'

export const Routes = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route path='/' exact >
                    <Home />
                </Route>
                <Route path= '/todo/:id' exact>
                    <IndTodo />
                </Route>
                <Route path='/todo/:id/edit' exact>
                    <EditTitle />
                </Route>
                <Route>
                    Error 404: Page not Found
                </Route>
            </Switch>
        </div>
    )
}
