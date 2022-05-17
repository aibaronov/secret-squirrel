import React from 'react';
import './App.css';
import HeaderLogin from './components/header/HeaderLogin';

function App() {

  return (
    <div className="App">
      <HeaderLogin/>
      {/* <main>
        <Route exact path="/home">
          <Main/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/">
          <Login/>
        </Route>
      </main> */}
    </div>
  );
}

export default App;
