import React, {useState, useEffect} from 'react'
import axios from 'axios';
import EmailRow from './EmailRow'
import './EmailView.css'


const EmailView = (props) => {
const [messages, setMessages] = useState([]);
let emailData = props.emails.emailData;

const globalUserName = props.globalUserName;
console.log(`email data`, emailData);



function dataLoader(){
    if(!emailData){
        return(
            <div></div>
        )
    }
    else{
        return(
            <div>
            {
                // emailData.map(({from, subject, message, received}) =>{
                //     return(
                //         <EmailRow
                //             from={from}
                //             subject={subject}
                //             message={message}
                //             received={received}
                //             />
                //             )
                //         })
                messages.map(({message, username}) =>{
                    return(
                        <EmailRow
                            from={username}
                            message={message}
                            />
                            )
                        })
                    }
            </div> )}
        }
    useEffect(() => {
        let bodyObj = {username: globalUserName}
        console.log('Body Object', bodyObj)
        axios.post('http://localhost:5000/getMessages', bodyObj)
        .then(res => {
            console.log(res.data)
            setMessages(res.data);    
        })
        .catch(err => {console.log(err)});

    }, [])
    useEffect(() => {
        setMessages(messages);
        console.log("Messages: ", messages);
    }, [messages, setMessages]);
  return (
    <div className='emailView-wrapper'>
        {dataLoader()}

    </div>
  )
}

export default EmailView