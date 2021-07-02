import React from 'react';
import { Link } from 'react-router-dom';

const links = [
    {
        to: "/",
        page: "Home"
    },
    {
        to: "/products",
        page: "Products"
    }
]

export const Navbar = () => {
    return (
        <div>
            {
                links.map(link=> <Link to={link.to} >{link.page}</Link>)
            }
        </div>
    )
}
