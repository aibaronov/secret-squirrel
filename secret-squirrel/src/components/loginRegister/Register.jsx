import React, {useState, useEffect} from 'react';
import './LoginRegister.css';
import axios from 'axios';

const Register = () => {
    const [userName, setUserName] = useState('');
    const [userNameValid, setUserNameValid] = useState(false);
    const [email, setEmail] = useState('');
    const [emailValid, setEmailValid] = useState(false);
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [passwordValid, setPasswordValid] = useState(false)

    function getUsername(event){
        setUserName(event.target.value);
        if(userName.length > 6){
            setUserNameValid(true);
        }
    }

    function getEmail(event){
        setEmail(event.target.value);
        if(email.includes('@')){
            setEmailValid(true);
        }
    }

    function getPassword(event){
        setPassword(event.target.value);
    }

    function getRepeatPassword(event){
        setRepeatPassword(event.target.value);

    }
    useEffect(()=>{
        setUserNameValid(userNameValid);
        setEmailValid(emailValid);
        if(password === repeatPassword){
            setPasswordValid(true);
        } else{
            setPasswordValid(false);
        }
    }, [userName, email, password, repeatPassword])

    function formSubmitHandler(event){
        event.preventDefault();
        const bodyObj = {
            username: userName,
            email: email,
            password: password
        }
        if(userNameValid && emailValid && passwordValid){
            // alert(`Username: ${userName}, email: ${email}, password: ${password}, repeatPassword: ${repeatPassword}`);
            axios.post('http://localhost:5000/register', bodyObj)
            .then(res=> {
                console.log(res.data)
                 alert(`Username: ${userName}, email: ${email}, Successfully registered.`);
                // alert(res.data);
                }).catch(err=>{
                    // alert(err)
                    let response = err.response.data;
                    if(response === 'SequelizeUniqueConstraintError'){
                        alert("Username already exists");
                    }
                    console.log(response);
                }
                );

        } else{
            alert("Invalid entries");
        }
    }

  return (
    <div className='log-reg-form'>
            <h3>Register</h3><br/>
            <form className='input-form' onSubmit={formSubmitHandler}>
                <div className='input-element'>
                    <label>Username</label><br/>
                    <input type='text' onChange={getUsername}></input><br/>
                </div>
                <div className='input-element'>
                    <label>Email</label><br/>
                    <input type='text' onChange={getEmail}></input><br/>
                </div>
                <div className='input-element'>
                    <label>Password</label><br/>
                    <input type='text' onChange={getPassword}></input><br/>
                </div>
                <div className='input-element'>
                    <label>Repeat Password</label><br/>
                    <input type='text' onChange={getRepeatPassword}></input><br/>
                </div>
                <div className='button-holder'>
                    <button type='submit' className='submit-button'>Submit</button>
                </div>
            </form>
        </div>
  )
}

export default Register;