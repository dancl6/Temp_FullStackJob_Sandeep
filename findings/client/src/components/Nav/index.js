import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap"



function Nav() {




          return (
            <Container>

            <ul className="flex-row">
            <Row>
              <Col>
              <li className="mx-1">
                <Link to="/pie_chart">
                  Pie Chart
                </Link>
              </li>
                <li className="mx-1">
                    <Link to="/grouped_findings">
                    Grouped Findings
                    </Link>
                </li>
                
              </Col>
           

              </Row>
            </ul>

            </Container>

          );
        }

    
    
    export default Nav;
    