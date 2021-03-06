import React, {useEffect, useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { ValidStateContext } from '../../App'
import './Nav.css'
const Nav = (props) => {
  const {state, dispatch} = useContext(ValidStateContext);
  // const logoutUser = props.logoutUser;
  // const validUser = props.validUser;
  // console.log("validUser in Nav", validUser);

  function logoutUser(event){
    console.log("Logout user called in Nav.jsx");
    dispatch({type: "false"});
  }

  useEffect(()=> {
    console.log("Valid state from nav.jsx", state.valid)
  }, [state, dispatch])
  return (
    <div className="container">
        <ul >
            <li className='nav-links'>
              {state.valid ? (
              <div>
                <NavLink to='/' onClick={logoutUser}>Log Out</NavLink>
              </div>
              ) : <NavLink to='/' onclick={logoutUser} >Register / Log In</NavLink>}
            </li>
        </ul>
    </div>
  )
}

export default Nav