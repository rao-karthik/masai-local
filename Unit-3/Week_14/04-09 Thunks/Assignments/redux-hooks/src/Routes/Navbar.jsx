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
        <div style={{textAlign:'center', margin:'10px 0 20px'}}>
            {
                links.map(link=> <Link style={{margin:'0 20px', textDecoration:'none'}} to={link.to} >{link.title}</Link>)
            }
        </div>
    )
}
