import React, {useEffect, useState} from 'react'
import axios from 'axios'
import SideLinks from './SideLinks'
import EmailView from './EmailView'
import './Main.css'

const Main = (props) => {
const [emailData, setEmailData] = useState([]);
const globalUserName = props.globalUserName;


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
            <SideLinks globalUserName={globalUserName}/>
        </div>
        <div className='emailRows-container'>
            <EmailView emails={emailData} globalUserName={globalUserName} />
        </div>
    </div>
  )
}

export default Main