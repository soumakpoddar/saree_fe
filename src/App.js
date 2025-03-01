// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SareeDetails from './components/SareeDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saree/:id" element={<SareeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
