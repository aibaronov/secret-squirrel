import React, {useState} from 'react'
import axios from 'axios';
import './MessageModal.css'
const ComposeModal = (props) => {

    const closeModal = props.hide;
    const usernameData = props.usernameData;
    const messageData = props.messageData;

    console.log(usernameData, messageData);

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
                    <input className='private-key'></input>

                    <p className='message-body'></p>
                </div>
            </div>
            
            <div className="modal-footer">
                <button className="button" onClick={closeModal}>Close</button>
            </div>
        </div>
    </div>
  )
}

export default ComposeModal