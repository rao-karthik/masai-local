import React from 'react';
import { Link } from 'react-router-dom'

const links = [
    {
        to: '/',
        name: 'Home'
    }
]

export const Navbar = () => {
    return (
        <div>
            {
                links.map(link=> <Link to={link.to} >{link.name}</Link>)
            }
        </div>
    )
}
