import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import { Modal, Button } from "react-bootstrap"
import ReactDOM from 'react-dom';
import Wrapper from 'react'

// import styled, { css } from 'styled-components'
function Grouped_Findings() {
    // const rowEvents = {
    //     onClick: (e,id) => {
    //         console.log(id)
    //     }
    // }

const [ tableId, setTableId ] = useState()

    const onRowClick = (state, rowInfo, column, instance) => {
        return {
            onClick: e => {
                console.log('A Td Element was clicked!')
                console.log('it produced this event:', e)
                console.log('It was in this column:', column)
                console.log('It was in this row:', rowInfo)
                console.log('It was in this table instance:', instance)
            }
        }
    }

    function displayMessage(e){
        // e.preventDefault();
        document.getElementById(tableId).innerHTML = "The button has been clicked.";
    }   
    // get reference to button
    var btn = document.getElementById(tableId);
    // add event listener for the button, for action "click"

    const actions = [
        { label: "Add", value: 1 },
        { label: "Edit", value: 2 },
        { label: "Delete", value: 3 }
      ];

      const [ modalInfo, setModalInfo ] = useState([])
      const [ showModal, setShowModal ] = useState(false)
      const [ show, setShow ] = useState(false)
      const handleClose = () => setShow(false)
      const handleShow = () => setShow(true)
      const rowevents = {
          onClick: (e) => {
              console.log("i am here",e)
              setModalInfo("hello")
              toggleTrueFalse()
          }
      }

      const Function = (Event)=>{
          console.log("event is:", Event)
      }
  
      const toggleTrueFalse = () => {
          setShowModal(handleShow)
      }
  
      const ModalContent = () => {
          return (
              <Modal show={show} onHide = {handleClose}>
                  <Modal.Header closeButton>
                      <Modal.Title>{modalInfo.severity}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body></Modal.Body>
                  <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                          Close
                      </Button>
                  </Modal.Footer>
              </Modal>
          )
      }

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


    if (dataResponse){
        // btn.addEventListener("click", displayMessage);
        }
    return (
<div className="App">

          <Table id = "grouped_findings_table" 
        bootstrap4="true"
          rowevents = {rowevents}
          data={[]} columns={[]} getTrProps={onRowClick}
          >
          <thead>
    <tr>
 
      <th>Severity


      </th>
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
 
    <tr
    // rowevents = {rowevents}
    
    >
      <td>{item.severity}
      <Button onClick={() => {
 
      
      setTableId(item.id)
      displayMessage()
    
    }
      
      } type="button" id={item.id} ></Button>
      <p id="msg"></p>
      </td>
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

          </Table>
          {show ? <ModalContent /> : null}    

          </div>



    )
    }
    
    export default Grouped_Findings;
    