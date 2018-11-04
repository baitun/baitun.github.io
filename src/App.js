import React, { Component } from "react";
import { YMInitializer } from "react-yandex-metrika";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Are you looking for something?</p>
        </header>
        <YMInitializer
          accounts={[12773485]}
          options={{
            webvisor: true,
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true
          }}
          version="2"
        />
      </div>
    );
  }
}

export default App;
