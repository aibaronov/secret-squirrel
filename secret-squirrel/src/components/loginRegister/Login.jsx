import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios';
import { ValidStateContext } from '../../App';
// import { NameStateContext } from '../../App';
import './LoginRegister.css'

export const Login = (props) => {

    const {state, dispatch} = useContext(ValidStateContext);
    // const {nameState, dispatchNameState} = useContext(NameStateContext);
    const getGlobalUserName = props.getUserName;
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function getUserName(event){
        setUserName(event.target.value);

        // dispatchNameState({type: "update", payload: event.target.value})
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
        getGlobalUserName(userName);
        
        axios.post('http://localhost:5000/login', bodyObj)
        .then(res => {
            console.log(res.data)
            dispatch({type: "true"});
            console.log("valid state", state);
        })
        .catch(err => alert(err));
    }
    useEffect(()=>{
        console.log("State from Login.jsx", state)
    }, [state, dispatch])

    useEffect(()=> {
        console.log('Global Username in Login.jsx set')
    }, [getGlobalUserName])
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