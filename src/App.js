import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
function sayhi(){
  alert('hi')
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React不过如此</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={()=>{alert('Hi,this is my react test')}} >点我</button>
      </div>//XML,通过JSX转换为js
    );
  }
}

export default App;
//ES6