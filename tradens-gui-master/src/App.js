import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/nav-bar/Navbar';
import Home from './components/pages/Home';
import './App.css';
import Logs from './components/pages/Logs';
import Documents from './components/pages/Documents';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/logs" element={<Logs />} />
          <Route exact path="/documents" element={<Documents />} />
          <Route exact path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
