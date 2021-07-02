import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { About } from '../Components/About';
import { Contact } from '../Components/Contact';
import { Home } from '../Components/Home';
import { Login } from '../Components/Login';
import NavBar from '../Components/Navbar/index';
import { Services } from '../Components/Services';

export const Routes = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/about-us">
                    <About />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/services">
                    <Services />
                </Route>
                <Route>
                    <h3>Error 404: Page Not Found</h3>
                </Route>
            </Switch>
        </div>
    )
}
