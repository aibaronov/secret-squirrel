import React, {useState} from 'react'
import Login from './Login';
import Register from './Register';
import './LoginRegister.css'

const LoginRegister = (props) => {
const getUserName= props.getUserName;
  return (
    <div className='log-reg-container'>
        <Login getUserName={getUserName}/>
        <Register />
    </div>
  )
}

export default LoginRegister