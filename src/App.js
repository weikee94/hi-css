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

        <p>text on image</p>
        <div className="imageWrapper">
          <p id="hello">hello world</p>
          <img src="/logo512.png" alt="logo512" />
          <p id="copyright">copyright</p>
        </div>

        <p>two image different position</p>
        <div className="lrWrapper">
          <p id="left">left</p>
          <p id="right">right</p>
        </div>
        <p>Travis CI Init And Update</p>
      </header>
    </div>
  );
}

export default App;
