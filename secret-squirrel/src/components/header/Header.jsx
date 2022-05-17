import React from 'react'
import Nav from './Nav'
import Logo from './Logo'
import './Header.css'
const Header = () => {
  return (
    <div className="container">
      <Logo/>
      <div className='squirrel-header'>
        <h1>SECRET SQUIRREL</h1>
      </div>
      <Nav/>
    </div>
  )
}

export default Header