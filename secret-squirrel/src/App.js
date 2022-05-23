import React, {useState, createContext, useEffect, useReducer} from 'react';
import './App.css';
import HeaderLogin from './components/header/HeaderLogin';
import LoginRegister from './components/loginRegister/LoginRegister';
import Header from './components/header/Header';
import Main from './components/main/Main';

export const ValidStateContext = createContext(false);
export const NameStateContext = createContext('');

const initialState = {
  valid: false
}

const nameState = {
  name: ''
}

function App() {

  const [state, dispatch] = useReducer(validStateReducer, initialState);
  const [globalUserName, setGlobalUsername] = useState('');

  useEffect(()=>{
    console.log("State", state.valid);

  }, [])

  useEffect(()=>{
    console.log("State", state.valid);
  }, [state, dispatch])

  useEffect(() => {
    console.log("Global username", globalUserName);
    setGlobalUsername(globalUserName);
  }, [globalUserName, setGlobalUsername])

  function getUserName(event){
    setGlobalUsername(event);
  }
  // useEffect(()=> {
  //   console.log("Name", nameState.name)
  // }, [nameState, dispatchNameState]);
  return (
  
      <ValidStateContext.Provider value={{state,dispatch}}>
        <div className="App">
          {state.valid ? (
            <div>
              <Header/>
              <Main globalUserName={globalUserName}/>
            </div>): 
            (
            <div>
              <HeaderLogin />
              <LoginRegister getUserName={getUserName}/>
            </div>)}
        </div>
      </ValidStateContext.Provider>
  );
}

function validStateReducer(state, action){
  switch(action.type){
    case "false":
      return {valid: false}
    case "true":
      return {valid: true}
    default:
      return initialState
  }
}


export default App;
