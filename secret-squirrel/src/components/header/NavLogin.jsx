import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'
const Nav = () => {
  return (
    <div className="container">
        <ul >
            <li className='nav-links'>
              {/* <NavLink to='/main'>Main</NavLink> */}
              <NavLink to='/'>About</NavLink>
                {/* <a href="#">Home</a>

                <a href="#">About</a>
                <a href="#">Log Out</a> */}
            </li>
        </ul>
    </div>
  )
}

export default Nav