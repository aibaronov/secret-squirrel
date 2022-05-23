import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { decryptRSA } from '../encryptionFiles/encryptionFunctions';
import './MessageModal.css'
const MessageModal = (props) => {

    const [privateKey, setPrivateKey] = useState(0);
    const [decryptedMessage, setDecryptedMessage] = useState('');
    const closeModal = props.hide;
    const usernameData = props.usernameData;
    const messageData = props.messageData;
    const sender = props.sender;
    const nval = props.nval;


    function getPrivateKey(event){
        setPrivateKey(event.target.value);
    }

    function decryptHandler(event){
        event.preventDefault();
        let message = messageData.split(',');
        let result = decryptRSA(message, privateKey, nval);
        setDecryptedMessage(result);
    }
    function clearMessage(event){
        setDecryptedMessage('');
    }

    function onClick(event){
        closeModal();
        clearMessage();
    }
    useEffect(() => {
        setDecryptedMessage(decryptedMessage);
    }, [decryptedMessage, setDecryptedMessage]);

    if(!props.show){
        return null
    }


  return (

    <div className="modal">
        
        <div className="modal-content">
            <div className="modal-header">
                <label>Received From: <span>{sender}</span></label><br/><br/><br/>
            </div>
            <div className="modal-body">
                <div className="message-container">
                    <label>Message:</label><br/><br/>
                    <p className='message-body' rows='4' cols='60'>{messageData}</p><br/>
                    <div className="private-key-container">
                        <label>Enter Private Key:  </label>
                        <input className='private-key' onChange={getPrivateKey}></input><br/>
                        <button className='decrypt-button' onClick={decryptHandler} >Decrypt</button>
                    </div><br/>
                    <div className='decrypted-message'>
                        
                        {(decryptedMessage === '') ? '' : <div><h2>Message:</h2><p>{decryptedMessage}</p></div>}
                        </div>
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