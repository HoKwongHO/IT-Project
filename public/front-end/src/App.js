import logo from './logo.svg';
import './App.css';
import Login from './Login/login';
import React from 'react';
import Register from './Register/register';
import Header from './Components/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        <Login></Login>
        <Register></Register>
        
      </header>
    </div>
  );
}


export default App;

