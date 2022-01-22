import React, { Component } from "react";
import Header from './components/header';
import Menu from './components/mainMenu';
import About from './components/about';
import Weasel from './components/weasel';
import Quick from './components/quickSearch';
import './App.css';
import './components/menu.css';
import './components/about.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <div className="App">
          <Header />
          <Routes>
              <Route path="/" element={<Menu />}/>
              <Route path="/quick" element={<Quick />}/>
              <Route path="/weasel" element={<Weasel />}/>
          </Routes>
          <About />
        </div>
      </Router>
  );
}

export default App;
