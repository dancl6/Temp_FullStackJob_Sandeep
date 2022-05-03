import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'

// import styled, { css } from 'styled-components'
function Grouped_Findings() {

    const actions = [
        { label: "Add", value: 1 },
        { label: "Edit", value: 2 },
        { label: "Delete", value: 3 }
      ];

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


<Table striped bordered hover>
  <thead>
    <tr>

      <th>Severity</th>
      <th>Time</th>
      <th>SLA</th>
      <th>Description</th>
      <th>Security Analyst</th>
      <th>Owner</th>
      <th>Status</th>
      <th># Findings</th>
      <th>Communications</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>

  { 
            dataResponse?.data.data.map(item =>
            item  ?
            (

    <tr>
      <td>{item.severity}</td>
      <td>{item.grouped_finding_created}</td>
      <td>{item.sla}</td>
      <td>{item.description}</td>
      <td>{item.security_analyst}</td>
      <td>{item.owner}</td>
      <td>{item.workflow}</td>
      <td>{item.status}</td>
      <td>test</td>
      <td>test</td>

    </tr>
  

            ): null)}
  </tbody>

{/* </table> */}
</Table>
    )


    }
    
    export default Grouped_Findings;
    