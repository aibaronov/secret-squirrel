import React from 'react'
import './EmailRow.css'
const EmailRow = ({from, id, message, nval, show, handleOnChange}) => {
// const timeStamp = new Date();
const preview = message.substr(0, 6);
let display = preview +'...'

  return (
    <div className='email-item' >
          <p onClick={show}>{from}</p>
          <div>
              {/* <p>{subject} </p> - <span> {message}</span> */}
              <p onClick={show}>{display} <span>{nval}</span></p>
              {/* <p>{timeStamp}</p> */}

          </div>
          {/* <p onClick={show}>{received}</p> */}
          <button className='delete-button' onClick={handleOnChange} id={id}>Delete</button>
        </div>
  )
}

export default EmailRow