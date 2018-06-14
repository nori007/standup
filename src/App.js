import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> Stand Up 시작합시다. </h2>
        </header>
        <p className="App-intro">
          프로젝트 시작.
        </p>
      </div>
    );
  }
}

export default App;
