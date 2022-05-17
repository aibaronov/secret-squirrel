import React, {useState} from 'react'
import './SideLinks.css'
import ComposeModal from './composeModal/ComposeModal'
const SideLinks = () => {
  const [showModal, setShowModal] = useState(false);

  function modalRenderHandler(event){
    event.preventDefault();
    console.log("Modal Rendered");
    setShowModal(true);
  }

  function closeModalHandler(event){
    event.preventDefault();
    setShowModal(false);
  }
  return (
    <div className='sideLinks'>
      <ul>
        <li><button className='compose-button' href='#' onClick={modalRenderHandler}>Compose</button></li>
        <li><a href="#">Inbox</a></li>
        <li><a href="#">Delete</a></li>
        <ComposeModal show={showModal} onClose={closeModalHandler}/>
      </ul>
      
      
      
    </div>
  )
}

export default SideLinks