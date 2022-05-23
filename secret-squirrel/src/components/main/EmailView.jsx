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
const [nVal, setnVal] = useState(0);


let emailData = props.emails.emailData;
const globalUserName = props.globalUserName;
console.log(`email data`, emailData);

function messageRefresh(event){
    console.log("Message Request Called");
    axios.get("http://localhost:5000/getMessages", {crossdomain: true})
    .then(res => {
        setMessages(res.data);
        console.log(res.data);
    })
    .catch(err => {console.log(err)})
}


function handleOnChange(event){
    const messageID = event.target.id;
    if(window.confirm("Are you sure you want to delete this message?")){
        axios.delete(`http://localhost:5000/${messageID}`)
        .then(res => {
            console.log(res)
            messageRefresh();
        })
            .catch(err=> {console.log(err)})
    }else{
        console.log('Message will not be deleted');
    }
}

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
                messages.map(({id, message, username, nval}) =>{
                    function showModal(event){
                        event.preventDefault();
                        setMessageView(true);
                        setUserNameData(username);
                        setMessageData(message);
                        setnVal(nval);
                    }
                    return(
                        <EmailRow
                            id={id}
                            from={username}
                            message={message}
                            nval={nval}
                            show={showModal}
                            handleOnChange={handleOnChange}/>
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
        messageRefresh();
    }, [messages, setMessages])

    useEffect(() => {
        setMessages(messages);
        console.log("Messages: ", messages);
    }, [messages, messageRefresh]);

    useEffect(()=>{
        setnVal(nVal);
        console.log("nVal from EmailView.jsx: ", nVal);
    }, [nVal, setnVal])

  return (
    <div className='emailView-wrapper'>
        {dataLoader()}
        <MessageModal 
            show={messageView} 
            hide={hideModal} 
            usernameData={userNameData} 
            messageData={messageData}
            nval={nVal}/>
    </div>
  )
}

export default EmailView