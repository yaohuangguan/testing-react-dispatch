import React, { useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getSeconds } from "./degree";
import Component from "./Component";
import BrotherComponent from "./BrotherComponent";

function App() {
  const logoRef = useRef(null);

  const onSpeedChange = (count) => {
    console.log('count', count)
    logoRef.current.style.animation = `App-logo-spin infinite ${getSeconds(
      count
    )}s linear`;
  };
  return (
    <div className="App">
      <header className="App-header">
        <img ref={logoRef} src={logo} className="App-logo" alt="logo" />
        <BrotherComponent onSpeedChange={onSpeedChange} />
        <Component />
      </header>
    </div>
  );
}

export default App;
