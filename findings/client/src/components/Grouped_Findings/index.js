import React, { useEffect, useState } from 'react'
import axios from 'axios'
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
    