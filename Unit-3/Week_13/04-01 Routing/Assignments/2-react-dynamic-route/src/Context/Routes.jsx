import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Route, Switch } from 'react-router-dom'
import { Home } from './Home'
import { AllProducts } from './AllProducts'
import { ProductDetails } from '../Components/ProductDetails'

export const Routes = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/products'>
                    <AllProducts />
                </Route>
                <Route exact path='/products/:id'>
                    <ProductDetails />
                </Route>
                <Route>
                    <h3>Error: 404 Page Not Found</h3>
                </Route>
            </Switch>
        </div>
    )
}
