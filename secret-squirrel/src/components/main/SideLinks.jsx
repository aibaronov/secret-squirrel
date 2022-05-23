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
        <li><a href="#">Inbox</a></li>
        <li><a href="#">Delete</a></li>
        <ComposeModal show={showModal} onClose={closeModalHandler} globalUserName={globalUserName}/>
      </ul>
      
      
      
    </div>
  )
}

export default SideLinks