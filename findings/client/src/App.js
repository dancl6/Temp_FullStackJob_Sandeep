import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'

function App() {

  const fetchMessage = async () => {
    // Use Fetch API to fetch '/api' endpoint
    const message = await fetch('/')
      .then(res =>{
        console.log("data from message is:", message)
        res.send()
      } ) // process incoming data

    // Update welcomeMessage state
    // setWelcomeMessage(message)
  }

  useEffect(() => {
    fetchMessage()
  }, [])

  return (
    <div className="App">
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
      </header>
    </div>
  );
}

export default App;
