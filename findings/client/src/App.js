import logo from './logo.svg';
import './App.css';
// import { Grouped_Findings } from "./Grouped_Findings"
import Grouped_Findings  from './Grouped_Findings';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
function App() {


  


  return (
    <div >
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
<Grouped_Findings></Grouped_Findings>
    </div>
  );
}

export default App;
