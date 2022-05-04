import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './index.css';
import styles from './mystyle.module.css'; 
import Chart from 'react-google-charts'
// import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import { Modal, Button } from "react-bootstrap"
function Test_Table_Modal() {
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
    const [ modalInfo, setModalInfo ] = useState([])
    const [ showModal, setShowModal ] = useState(false)
    const [ show, setShow ] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const rowEvents = {
        onClick: (e,severity) => {
            console.log(severity)
            setModalInfo(severity)
            toggleTrueFalse()
        }
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

    const products2 = []
    if (dataResponse) {
    for ( let i = 0 ; i < dataResponse.data.data.length; i ++ ) {
        // console.log("severity is:", dataResponse.data.data[i].severity)
    const newProd =   new  Products2(dataResponse.data.data[i].severity,
            dataResponse.data.data[i].grouped_finding_created,dataResponse.data.data[i].sla,
            dataResponse.data.data[i].description,dataResponse.data.data[i].security_analyst,
            dataResponse.data.data[i].owner,dataResponse.data.data[i].status)
            products2.push(newProd)
        }
    }
        // console.log("products 2 is:", products2[0])
    function Products2(severity, time, sla, description,security_analyst, owner, status ){
        this.severity = severity;
        this.time = time;
        this.sla = sla;
        this.description = description;
        this.security_analyst = security_analyst;
        this.owner = owner; 
        this.status = status
    }

    const products = [
        { id: 1, name: "Ordinarycoders course 1", price: 101 },
        { id: 2, name: "Ordinarycoders course 2", price: 102 },
        { id: 3, name: "Ordinarycoders course 3", price: 103 },
        { id: 4, name: "Ordinarycoders course 4", price: 104 },
        { id: 5, name: "Ordinarycoders course 5", price: 105 }
      ];
      const columns = [
        {
          dataField: "severity",
          text: "Severity",
          sort: true
        },
        {
          dataField: "time",
          text: "Time",
          sort: true
        },
        {
            dataField: "sla",
            text: "SLA",
            sort: true
          },
          {
            dataField: "description",
            text: "Description",
            sort: true
          },
          {
            dataField: "security_analyst",
            text: "Security Analyst",
            sort: true
          },
          {
            dataField: "owner",
            text: "Owner",
            sort: true
          },
          {
            dataField: "status",
            text: "Status",
            sort: true
          }
      ];

      
    //   export default function App() {
        return (
          <div className="App">
            <BootstrapTable bordered
            style="word-wrap: break-word;min-width: 160px;max-width: 160px;"
            // bodyStyle={ {width: 500, maxWidth: 500, wordBreak: 'break-all', color : "green" } }
            //   class = {{ 'whiteSpace' : 'unset'}}
              bootstrap4
              keyField="id"
              data={products2}
              columns={columns}
              rowEvents = {rowEvents}
            />
            {show ? <ModalContent /> : null}
          </div>
        );
      }
// }

export default Test_Table_Modal;