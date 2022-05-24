import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { encryptRSA } from '../encryptionFiles/encryptionFunctions';

import './ComposeModal.css'
const ComposeModal = (props) => {
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const closeModal = props.onClose;
    const globalUserName = props.globalUserName;
    
    useEffect(() => {
        console.log("Global Username in ComposeModal.jsx", globalUserName);
    }, [])

    if(!props.show){
        return null
    }
    function getUserName(event){
        event.preventDefault();
        setUserName(event.target.value);
    }

    function getMessage(event){
        event.preventDefault();
        setMessage(event.target.value);
    }
    function messageSubmitHandler(event){
        event.preventDefault();
        const encrypted = encryptRSA(message);
        if(encrypted.encryptedMessage.join(',').length > 500){
            alert("Message must be 500 characters of less");
        }else{
            alert(`The encrypted message is: ${encrypted.encryptedMessage}. The private key is: ${encrypted.dVal}.`)
            const bodyObj = {
                sender: globalUserName,
                username: userName,
                encryptedMessage: encrypted.encryptedMessage.join(','),
                nVal: encrypted.nVal
            }
            console.log(bodyObj);
            axios.post('http://localhost:5000/send', bodyObj)
            .then((res) => {
                console.log(res.data)
                setMessage('');
            }).catch(err => {
                console.log(err);
            });
        }
    }




  return (

    <div className="modal">
        
        <form className="modal-content" onSubmit={messageSubmitHandler}>
            <div className="modal-header">
                <h4 className="modal-title">Send Message</h4><br/>

            </div>
            <div className="modal-body">
                <label>Recipient</label><br/>
                <input className='recipient-input' onChange={getUserName}/><br/><br/>

                <label>Message</label><br/>
                <textarea className='message-body' rows='4' cols='60' onChange={getMessage}></textarea><br/>
            

                <button type='submit'>Send</button>
            </div>
            
            <div className="modal-footer">
                <button className="button" onClick={closeModal}>Close</button>
            </div>
        </form>
    </div>
  )
}

export default ComposeModal