import React from 'react'
import './EmailRow.css'
const EmailRow = ({from, subject, message, received}) => {
  return (
    <div className='email-item'>
          <p>{from}</p>
          <div>
              <p>{subject} </p> - <span> {message}</span>
          </div>
          <p>{received}</p>
        </div>
  )
}

export default EmailRow