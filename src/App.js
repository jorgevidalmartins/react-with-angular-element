import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  handleClick(event) {
    event.preventDefault();
    var element = document.querySelector('neo-header');
    element.setAttribute('in', 'React');
  }
  render() {
    return (
      <div className="App">
        <neo-header in="Angular"></neo-header>
        <main className="App-main">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload or click the button below.
          </p>
          <button className="App-button" onClick={this.handleClick.bind(this)}>click me</button>
        </main>
      </div>
    );
  }
}

export default App;
