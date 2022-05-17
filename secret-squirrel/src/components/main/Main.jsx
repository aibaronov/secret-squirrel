import React, {useEffect, useState} from 'react'
import axios from 'axios'
import SideLinks from './SideLinks'
import EmailView from './EmailView'
import './Main.css'

const Main = () => {
const [emailData, setEmailData] = useState([]);

useEffect(() => {
    axios.get("http://localhost:5000/", {crossdomain: true})
    .then(res => {
        setEmailData(res.data);
        console.log(res.data);
    })
}, [])
console.log(`email data : ${emailData}`)

  return (
    <div className='main-container'>
        <div className='sideLinks-container'>
            <SideLinks/>
        </div>
        <div className='emailRows-container'>
            <EmailView emails={emailData}/>
        </div>
    </div>
  )
}

export default Main