import React from 'react';
import { Home } from './Home';
import { Navbar } from './Navbar';
import { Switch, Route} from 'react-router-dom';
import { Login } from './Login';
import { Products } from './Products';
import { About } from './About';
import { Footer } from './Footer';
import { Faq } from '../Compoents/Faq';
import { Jobs } from '../Compoents/Jobs';
import { Contact } from '../Compoents/Contact';
import { Cart } from '../Compoents/Cart';
import { Banner } from '../Compoents/Banner';

export const Routes = () => {
    return (
        <div>
            <Banner />
            <Navbar />
            <Switch>
                <Route exact path='/' >
                    <Home />
                </Route>
                <Route exact path='/login' >
                    <Login />
                </Route>
                <Route exact path= '/products'>
                    <Products />
                </Route>
                <Route exact path= '/about'>
                    <About />
                </Route>
                <Route exact path= '/cart'>
                    <Cart />
                </Route>
                <Route exact path= '/faq'>
                    <Faq />
                </Route>
                <Route exact path= '/job-opportunities'>
                    <Jobs />
                </Route>
                <Route exact path= '/contact'>
                    <Contact />
                </Route>
                <Route>
                    Error 404: Page not found
                </Route>
            </Switch>
            <Footer />
        </div>
    )
}
