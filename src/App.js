import React, { Component } from 'react';
import { YMInitializer } from 'react-yandex-metrika';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <YMInitializer accounts={[12773485]} version="2"/>
      </div>
    );
  }
}

export default App;
