import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Cart } from './Cart'
import { Home } from './Home'
import { Navbar } from './Navbar'

export const Routes = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/cart'>
                    <Cart />
                </Route>
            </Switch>
        </div>
    )
}
