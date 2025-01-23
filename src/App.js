import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Personal from "./Pages/Personal";


function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<LandingPage />} />
  
      </Routes>
    </Router>
  );
}

export default App;
