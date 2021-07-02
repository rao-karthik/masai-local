import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const links = [
  {
      to: '/',
      title: 'Home',
      exact: true
  },
  {
      to: '/about-us',
      title: 'About',
      exact: true
  },
  {
      to: '/contact',
      title: 'Contact',
      exact: true
  },
  {
      to: '/services',
      title: 'Services',
      exact: true
  },
  {
      to: '/login',
      title: 'Login',
      exact: true
  }
]

function NavBar() {
  return (
    <>
      {
        links.map(link=> 
        <NavLink 
            style={{color: "black", display: "flex", justifyContent: "center", marginBottom: "20px"}}
            to={link.to}
            exact={link.exact}>

            {link.title}
            
        </NavLink>)
      }
    </>
  )
}

export default NavBar
