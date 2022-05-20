import React from 'react'
import './EmailRow.css'
const EmailRow = ({from, subject, message, received}) => {
// const timeStamp = new Date();
const preview = message.substr(0, 6);
let display = preview +'...'

  return (
    <div className='email-item'>
          <p>{from}</p>
          <div>
              {/* <p>{subject} </p> - <span> {message}</span> */}
              <p>{display}</p>
              {/* <p>{timeStamp}</p> */}

          </div>
          <p>{received}</p>
        </div>
  )
}

export default EmailRow