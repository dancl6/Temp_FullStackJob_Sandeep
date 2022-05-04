import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import Nav from "./components/Nav";
import Grouped_Findings from "./components/Grouped_Findings";
import Pie_Chart from "./components/Pie_Chart";
import Test_Table_Modal from "./Test_Table_Modal";
// import Test from "./components/Test";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {

  return (

    <Router>
      <Nav key = "nav" />

      <Routes>

          <Route path="test_modal" element={<Test_Table_Modal />} />
          <Route path="pie_chart" element={<Pie_Chart />} />
          <Route path="grouped_findings" element={<Grouped_Findings />} />
          {/* <Route path="test" element={<Test />} /> */}

      </Routes>
    </Router>
  );
}

export default App;
