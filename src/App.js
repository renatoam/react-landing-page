import React from 'react';
import logo from './logo.svg';
import './App.css';
import './scss/main.css';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
