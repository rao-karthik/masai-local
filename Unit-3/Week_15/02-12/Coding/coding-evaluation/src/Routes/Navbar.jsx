import { Link } from "react-router-dom"

const links = [
  {
    to: '/',
    title: 'Home'
  },
  {
    to: '/login',
    title: 'Login'
  }
]

export const Navbar = ()=>{
  return (
    <div>
      {
        links.map(link=> <Link key={link.to} to={link.to} > {link.title} </Link>)
      }
    </div>
  )
}