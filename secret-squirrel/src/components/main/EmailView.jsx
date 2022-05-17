import React from 'react'
import EmailRow from './EmailRow'
import './EmailView.css'

const EmailView = (props) => {

let emailData = props.emails.emailData;
console.log(`email data`, emailData);
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
                emailData.map(({from, subject, message, received}) =>{
                    return(
                        <EmailRow
                            from={from}
                            subject={subject}
                            message={message}
                            received={received}
                            />
                            )
                        })
                    }
            </div> )}
        }
  return (
    <div className='emailView-wrapper'>
        {dataLoader()}
        {/* <div>
            {
                emailData.map(({from, subject, message, received}) =>{
                    return(
                        <EmailRow
                            from={from}
                            subject={subject}
                            message={message}
                            received={received}
                            />
                    )
                })
            }
        </div> */}
    </div>
  )
}

export default EmailView