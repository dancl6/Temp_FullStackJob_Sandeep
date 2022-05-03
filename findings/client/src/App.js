import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import Nav from "./components/Nav";
import Grouped_Findings from "./components/Grouped_Findings";
import Pie_Chart from "./components/Pie_Chart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import pie_chart from './pie_chart';

function App() {

  return (

    <Router>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          {/* <Route index element={<Home />} /> */}
          <Route path="pie_chart" element={<Pie_Chart />} />

        {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
