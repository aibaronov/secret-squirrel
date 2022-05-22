import React, {useState, useEffect} from 'react'
import axios from 'axios';
import EmailRow from './EmailRow'
import MessageModal from './messageModal/MessageModal';
import './EmailView.css'


const EmailView = (props) => {
const [messages, setMessages] = useState([]);
const [messageView, setMessageView] = useState(false);
const [userNameData, setUserNameData] = useState('');
const [messageData, setMessageData] = useState('');


let emailData = props.emails.emailData;
const globalUserName = props.globalUserName;
console.log(`email data`, emailData);



function hideModal(event){
    event.preventDefault();
    setMessageView(false);
}

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
                messages.map(({message, username}) =>{
                    function showModal(event){
                        event.preventDefault();
                        setMessageView(true);
                        setUserNameData(username);
                        setMessageData(message);
                    }
                    return(
                        <EmailRow
                            from={username}
                            message={message}
                            show={showModal}/>
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
        <MessageModal show={messageView} hide={hideModal} usernameData={userNameData} messageData={messageData}/>

    </div>
  )
}

export default EmailView