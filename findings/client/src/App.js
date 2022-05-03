import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import Nav from "./components/Nav";
import Grouped_Findings from "./components/Grouped_Findings";
import Pie_Chart from "./components/Pie_Chart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {

  return (

    <Router>
      <Nav key = "nav" />
      <Routes>


          <Route path="pie_chart" element={<Pie_Chart />} />
          <Route path="grouped_findings" element={<Grouped_Findings />} />

      </Routes>
    </Router>
  );
}

export default App;
