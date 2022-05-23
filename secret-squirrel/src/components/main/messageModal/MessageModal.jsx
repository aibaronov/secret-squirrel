import React, {useState} from 'react'
import axios from 'axios';
import { decryptRSA } from '../encryptionFiles/encryptionFunctions';
import './MessageModal.css'
const MessageModal = (props) => {

    const [privateKey, setPrivateKey] = useState(0);
    const closeModal = props.hide;
    const usernameData = props.usernameData;
    const messageData = props.messageData;
    const nval = props.nval;

    console.log(usernameData, messageData);

    function getPrivateKey(event){
        setPrivateKey(event.target.value);
    }

    function decryptHandler(event){
        event.preventDefault();
        let message = messageData.split(',');

        console.log("Message Data from Message Modal: ", message);
        console.log("Private Key", privateKey);
        console.log("nVal: ", nval);
        console.log(messageData);
        let result = decryptRSA(message, privateKey, nval);

        alert(result.join(''));
    }

    if(!props.show){
        return null
    }


  return (

    <div className="modal">
        
        <div className="modal-content">
            <div className="modal-header">
                <label>Received From: <span>{usernameData}</span></label><br/><br/><br/>
            </div>
            <div className="modal-body">
                <div className="message-container">
                    <label>Message:</label><br/><br/>
                    <p className='message-body' rows='4' cols='60'>{messageData}</p><br/>
                    <label>Enter Private Key:  </label>
                    <input className='private-key' onChange={getPrivateKey}></input><br/>
                    <button className='button' onClick={decryptHandler} >Decrypt</button>
                </div>
            </div>
            
            <div className="modal-footer">
                <button className="button" onClick={closeModal}>Close</button>
            </div>
        </div>
    </div>
  )
}

export default MessageModal