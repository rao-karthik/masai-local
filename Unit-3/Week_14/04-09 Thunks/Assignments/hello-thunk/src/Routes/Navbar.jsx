import React from 'react';
import { Link } from 'react-router-dom';

const links = [
    {
        to: '/',
        title: 'Home'
    },
    {
        to: '/login',
        title: 'Login'
    },
    {
        to: '/register',
        title: 'Register'
    }
]

export const Navbar = () => {
    return (
        <div>
            {
                links.map(link=><Link key={link.to} style={{margin:'20px'}} to={link.to} >{link.title}</Link>)
            }
        </div>
    )
}
