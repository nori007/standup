import React, { Component } from 'react';
import logo from './img/standup.logo.png';
import './App.css';
import Editor from './component/Editor';

// import myConfig from './config/firebaseConfig';
// console.log(myConfig.apiKey);

class App extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    console.log(this.e);  
  }

  isAnonymous() {
    return true;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Editor {...this}/>
        </div>
      </div>
    );
  }
}

export default App;
