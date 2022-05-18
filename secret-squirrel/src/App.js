import React, {useState} from 'react';
import './App.css';
import HeaderLogin from './components/header/HeaderLogin';
import LoginRegister from './components/loginRegister/LoginRegister';
import Header from './components/header/Header';
import Main from './components/main/Main';

function App() {
  const [validUser, setValidUser] = useState(false);
  function validateUser(event){
    console.log("Validate User Called");
    setValidUser(true);
  }
  return (

    <div className="App">
      {validUser ? (<div><Header/><Main/></div>): (<div><HeaderLogin/><LoginRegister validateUser={validateUser}/></div>)}
    </div>
  );
}

export default App;
