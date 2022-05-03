import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Dropdown } from "react-bootstrap"
function Grouped_Findings() {
  const [dataResponse, setDataResponse ] = useState()
    useEffect(() => {
        axios.get('/grouped_findings').then(response=> {
          console.log("grouped findings response from axios is:", response)

          setDataResponse(response)
        })
        axios.get('/raw_findings').then(response=> {
          console.log("raw findings response from axios is:", response)

        })
        axios.get('/joined_findings').then(response=> {
          console.log("joined findings response from axios is:", response)

        })
    }, []);
    return (
      <div>
        
        <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

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
    