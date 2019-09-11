import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title hoge="Hello World 3.0" titleStyle={{color: 'orange'}}/>
        <h1 className="App-title">HogeHogeTAMAGO</h1>
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
