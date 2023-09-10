import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='NavBar'>
      <Link to={'/'} className='NavItems'>Home</Link>
      <Link to={'/blogs'} className='NavItems'>Blogs</Link>
      <Link to={'/Tech'} className='NavItems'>Tech</Link>
      <Link to={'/Games'} className='NavItems'>Games</Link>
      <Link to={'/about'} className='NavItems' >About</Link>
      <Link to={'/contact'} className='NavItems'>Contact Us</Link>
    </div>
  )
}

export default Navbar
