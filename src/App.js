import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>two item in a row</p>
        <div className="two-item">
          <p>item one</p>
          <p>item two</p>
        </div>
        <p>three item in a row</p>
        <div className="three-item">
          <p>item one</p>
          <p>item two</p>
          <p>item three</p>
        </div>

        <p>vertical line</p>
        <div className="line"></div>

        <p>grid box</p>
        <div className="three-item-grid">
          <div>
            <p>box one</p>
            <p>box two</p>
          </div>
          <div>
            <p>box three</p>
            <p>box four</p>
          </div>
          <div>
            <p>box five</p>
            <p>box six</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
