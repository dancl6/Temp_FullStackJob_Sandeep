import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import { Modal, Button } from "react-bootstrap"
import "bootstrap/js/src/collapse.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Fade from 'react-bootstrap/Fade'

function Grouped_Findings() {

const [open, setOpen] = useState(false);
const [ tableId, setTableId ] = useState()



   const getRawFindings = (tableId) =>{

        var test = []
        if(joinedDataResponse) {
            for ( let i = 0 ; i < joinedDataResponse.data.data.length; i ++ ) {
                if (joinedDataResponse.data.data[i].grouped_finding_id === tableId){
                    test.push(joinedDataResponse.data.data[i])
                }
            }

        }
        setJoinedArray(test)

    }



      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

  const [dataResponse, setDataResponse ] = useState()
  const [joinedDataResponse, setJoinedDataResponse ] = useState()
  const [joinedArray, setJoinedArray ] = useState()
  
if (dataResponse && joinedDataResponse) {
    var numberOfJoined = [] 
    for(let i = 0 ; i < dataResponse.data.data.length; i ++ ) {
        var count = 0
        for ( let j = 0 ; j < joinedDataResponse.data.data.length; j ++ ) {
            if (dataResponse.data.data[i].id === joinedDataResponse.data.data[j].grouped_finding_id){
                count = count + 1
            }
        }
        numberOfJoined.push(count)

    }


}

    useEffect(() => {
        axios.get('/grouped_findings').then(response=> {
          setDataResponse(response)
        })
        axios.get('/raw_findings').then(response=> {
        })
        axios.get('/joined_findings').then(response=> {
          setJoinedDataResponse(response)
        })
    }, []);

    return (


<div style={{ display: 'block', width: 700, padding: 30 }}>



  <Modal key= "parent Modal"  dialogClassName="my-modal modal-xl"  show={show} onHide={handleClose} >
  <div >
        <Modal.Header key = "modal header"  closeButton>
          <Modal.Title key = "modal title">Raw Findings</Modal.Title>
        </Modal.Header>

        <Modal.Body key = "modal body"  dialogClassName= "my-modal " >

        <Table key = "parent table" id = "grouped_findings_table" 
          >
    <thead>
    <tr>
       <th>Severity</th>
      <th>Time</th>
      <th>Source</th>
      <th>Description</th>
      <th>Asset</th>
      <th>Status</th>

    </tr>
  </thead>
  <tbody>
 
  { joinedArray?.map(item =>
            item  ? (
 
    <tr>
      <td>{item.severity}</td>
      <td>{item.finding_created}</td>
      <td>{item.source_security_tool_name}</td>
      <td>{item.description}</td>
      <td>{item.asset}</td>
      <td>{item.status}</td>
    </tr>
             ): null)}
 
  </tbody>

    </Table>
        </Modal.Body>

        <Modal.Footer key = "modal footer">
          <Button key = "close modal" variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
        </div>
      </Modal><h4>Grouped Findings</h4>
<div style={{ width: 660, height: 'auto' }}>
    <Button
    variant="link"
    onClick={() => setOpen(!open)}
    aria-expanded={open}
    aria-controls="fadeID"
    key = "fade button"
    >
    Collapse Table
    </Button>
    <Fade key = "fade" in={open}>
    <div id="fadeID" key = "fade div"
    style={{
    width: 300,
    textAlign: 'justify'
    }}
    >
   <Table key = "grouped_findings_table" 

          data={[]} columns={[]} 
          ><thead>
         <tr>
            <th>Severity</th>
            <th>Time</th>
            <th>SLA</th>
            <th>Description</th>
            <th>Security Analyst</th>
            <th>Owner</th>
            <th>Workflow</th>
            <th>Status</th>
            <th># Findings</th>
        </tr>
    </thead>
  <tbody>
 
   { dataResponse?.data.data.map((item,index) => (
            numberOfJoined ?(
       
    <tr   data-toggle="collapse"
    data-target=".multi-collapse1"
    aria-controls="multiCollapseExample1"  >
      <td>{item.severity}
      <Button data-toggle="modal" key = "modal button toggle" data-target=".bd-example-modal-lg"  onClick={() => {
        setTableId(item.id)
        handleShow()
        getRawFindings(item.id)    
      }
      
      } type="button" id={item.id} >V</Button>
      <p id="msg"></p>
      </td>
      <td>{item.grouped_finding_created}</td>
      <td>{item.sla}</td>
      <td>{item.description}</td>
      <td>{item.security_analyst}</td>
      <td>{item.owner}</td>
      <td>{item.workflow}</td>
      <td>{item.status}</td>
      <td>{numberOfJoined[index]}</td>

    </tr>
   ): null))}
  </tbody>

          </Table>
    </div>
  </Fade>
 </div>
</div>
    )
    }
    
    export default Grouped_Findings;
    