import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Grouped_Findings() {
  const [dataResponse, setDataResponse ] = useState()
    useEffect(() => {
        axios.get('/grouped_findings').then(response=> {
          console.log("response from axios is:", response)
          // var dataResponse  = response
          setDataResponse(response)
        })
    }, []);
    return (
      <div>
        
        <div className="App">
         At Grouped Findings
         {dataResponse? 
          <div>{dataResponse.data.data[0].severity}</div>
        : <div></div>}
         
        </div>
      </div>
      );
    }
    
    export default Grouped_Findings;
    