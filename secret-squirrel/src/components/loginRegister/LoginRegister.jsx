import React, {useState} from 'react'
import Login from './Login';
import Register from './Register';
import './LoginRegister.css'

const LoginRegister = (props) => {
  let validateUser = props.validateUser;
  return (
    <div className='log-reg-container'>
        <Login validateUser={validateUser}/>
        <Register />
    </div>
  )
}

export default LoginRegister