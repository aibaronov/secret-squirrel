import React from 'react'
import './Logo.css';
import squirrel from './images/squirrel.png';
const Logo = () => {
  console.log(squirrel)
  return (
    <div className='squirrel-container'>
        <img className='main-logo' src={squirrel} alt="secret squirrel" />
    </div>
  )
}

export default Logo