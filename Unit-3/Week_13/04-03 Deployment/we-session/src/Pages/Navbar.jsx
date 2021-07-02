    import React from 'react'
import { Link } from 'react-router-dom'

    const links = [
        {
            name: 'Home',
            to: '/',
            exact: true
        },
        {
            name: 'Dashboard',
            to: '/dashboard',
            exact: true
        },
        {
            name: 'Login',
            to: '/login',
            exact: true
        }
    ]
    
    export const Navbar = () => {
        return (
            <div>
                {
                    links.map(links=> <Link to={links.to} exact={links.exact} >{links.name}</Link>)
                }
            </div>
        )
    }
    