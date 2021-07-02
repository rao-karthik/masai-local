import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { RecipePage } from '../Components/RecipePage'
import { Home } from './Home'
import { Navbar } from './Navbar'

export const Routes = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/recipe/:userId">
                    <RecipePage />
                </Route>
            </Switch>
        </div>
    )
}
