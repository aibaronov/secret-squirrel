import React from 'react'
import HeaderLogin from '../header/HeaderLogin'
import './About.css'

const About = () => {
  return (
    <div>
      <HeaderLogin/>
      <div className='background-container'>
        <div className='info-container'>
          <h1 className='header'>RSA Encryption</h1> <br/>
          <p>
            RSA Encryption is a form of public key encryption. The encryption algorithm was designed as a joint effort between Ron Rivest, Adi Shamir, and Leonard Adleman. The three researchers were computer scientists at MIT when they published their algorithm in 1977. RSA encryption is still used with other encryption algorithms to create digital signatures.</p><br/>
            <p> Although RSA Encryption is rarely used to encrypt entire messages anymore, this application encrypts Email messages to demonstrate the encryption and decryption process.
          </p><br/>
          <h2 className='header'>Public Key Encryption</h2><br/>
          <p>RSA Encryption makes use of two keys. The first is known as a public key and is used to encrypt the message. Using the same values that were used to generate a public key, a private key is also generated. The private key is used by the receiver to decrypt the message.</p><br/>
          <h2 className='header'>Instructions</h2><br/>
          <p>After registering for an account. You can log in and compose messages to other users on the server.</p>
          <p>After clicking submit in the message modal, you will see a confirmation alert with a private key. You can relay the private key to the recipient through whatever means you see fit... Smoke signals, paper airplanes, carrier pigeons... etc...</p><br/>
          <p>Messages in your Inbox will be encrypted. You can read the original message content after entering the private key.</p><br/>
          <p>The character limit for messages is 500 characters. Also, the encryption and decryption algorithms used are only designed to check for characters in the alphabet. So special characters and numbers won't encrypt properly. </p><br/>
          <h2 className='header'>Further Reading</h2><br/>
          <p>For more information on the mathematics of the RSA algorithm and the pseudocode that was used for the implementation of the algorithm in this application, you can visit this amazing article at Educative:  <a className='rsa-link' href="https://www.educative.io/edpresso/what-is-the-rsa-algorithm">RSA Explained</a></p>
        </div>
      </div>
    </div>
  )
}

export default About