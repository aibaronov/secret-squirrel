import React, {useContext} from 'react'
import Nav from './Nav'
import Logo from './Logo'
import './Header.css'
const Header = (props) => {
  const logoutUser = props.logoutUser;




  return (
    <div className="links-container">
      <Logo/>
      <div className='squirrel-header'>
        <h1>SECRET SQUIRREL</h1>
      </div>
      <Nav logoutUser={logoutUser}/>
    </div>
  )
}

export default Header