import React, {useEffect, useState} from 'react'
import './SideLinks.css'
import ComposeModal from './composeModal/ComposeModal'
const SideLinks = (props) => {
  const [showModal, setShowModal] = useState(false);
  const globalUserName = props.globalUserName;

  function modalRenderHandler(event){
    event.preventDefault();
    console.log("Modal Rendered");
    setShowModal(true);
  }

  function closeModalHandler(event){
    event.preventDefault();
    setShowModal(false);
  }

  useEffect(() => {
    console.log("Global username in SideLinks.jsx", globalUserName);
  }, [])
  return (
    <div className='sideLinks'>
      <ul>
        <li><button className='compose-button' href='#' onClick={modalRenderHandler}>Compose</button></li>
        <ComposeModal show={showModal} onClose={closeModalHandler} globalUserName={globalUserName}/>
      </ul>
      <div className='username-container'>
        <h1>WELCOME</h1><br/>
        <h1 className='global-username'>{globalUserName}</h1></div>
      
      
      
    </div>
  )
}

export default SideLinks