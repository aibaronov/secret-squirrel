import React from 'react'
import './EmailRow.css'
const EmailRow = ({from, subject, message, received, show}) => {
// const timeStamp = new Date();
const preview = message.substr(0, 6);
let display = preview +'...'

  return (
    <div className='email-item' >
          <p onClick={show}>{from}</p>
          <div>
              {/* <p>{subject} </p> - <span> {message}</span> */}
              <p onClick={show}>{display}</p>
              {/* <p>{timeStamp}</p> */}

          </div>
          {/* <p onClick={show}>{received}</p> */}
          <input type='checkbox' id='message'/>
        </div>
  )
}

export default EmailRow