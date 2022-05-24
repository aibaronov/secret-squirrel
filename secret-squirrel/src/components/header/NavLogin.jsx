import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'
const Nav = () => {
  return (
    <div className="container">
        <ul >
            <li className='nav-links'>
              <NavLink to='/about'>About</NavLink>
              <NavLink to='/'>Log In</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Nav