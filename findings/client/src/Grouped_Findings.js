import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Grouped_Findings() {
    useEffect(() => {
        axios.get('/grouped_findings').then(response=> {
          console.log("response from axios is:", response)
        })
    }, []);
    return (
        <div className="App">
         At Grouped Findings
        </div>
      );
    }
    
    export default Grouped_Findings;
    