import React from 'react'
import NavLogin from './NavLogin';
import Logo from './Logo'
import './HeaderLogin.css'
const HeaderLogin = () => {
  return (
    <div className="header-container">
      <Logo/>
      <div className='squirrel-header'>
        <h1>SECRET SQUIRREL</h1>
      </div>
      <NavLogin/>
    </div>
  )
}

export default HeaderLogin