import React, {useState} from 'react'
import axios from 'axios';
import './LoginRegister.css'

export const Login = (props) => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    let validateUser = props.validateUser;
    function getUserName(event){
        setUserName(event.target.value);
    }
    function getPassWord(event){
        setPassword(event.target.value);
    }
    function formSubmitHandler(event){
        event.preventDefault();
        let bodyObj = {
            username: userName,
            password: password
        }
        axios.post('http://localhost:5000/login', bodyObj)
        .then(res => {
            alert(res.data)
            validateUser();})
        .catch(err => alert(err));
    }
  return (
    <div className='log-reg-form'>
            <h3>Log In</h3> <br/>
            <form className='input-form' onSubmit={formSubmitHandler}>
                <div className='input-element'>
                    <label>Username</label><br/>
                    <input type='text' onChange={getUserName}></input><br/>
                </div>
                <div className='input-element'>
                    <label>Password</label><br/>
                    <input type='text' onChange={getPassWord}></input><br/>
                </div>
                <div className='button-holder'>
                    <button className='submit-button'>Submit</button>
                </div>
            </form>
        </div>
  )
}

export default Login;