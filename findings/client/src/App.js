//Import necessary files and components
import './App.css';
import React from 'react'
import Nav from "./components/Nav";
import Grouped_Findings from "./components/Grouped_Findings";
import Pie_Chart from "./components/Pie_Chart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Define App component using React router for paths 
function App() {
  return (
    <Router>
      {/* Import nav bar component */}
      <Nav key = "nav" />
      <Routes>
          <Route path="pie_chart" element={<Pie_Chart />} />
          <Route path="grouped_findings" element={<Grouped_Findings />} />
      </Routes>
    </Router>
  );
}

export default App;
