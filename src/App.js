import React, { Component } from "react";
import Header from './components/header';
import Logo from './components/logo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Logo />
      <main>
          <section>
              {// TO DO: make a main menu component here}
          </section>
      </main>
    </div>
  );
}

export default App;
