import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { dispatcher } from "react-dispatch";
import Test from './test'
function App() {
  const onClick = () => {
    console.log('dispatcher.events', dispatcher.events)
    dispatcher.dispatch("ONLY_ONCE", 1);
    dispatcher.dispatch("ALL_TIME", 1);
  }
  const unMount = () => {
    dispatcher.off('ALL_TIME')
  }
  return (
    <div className="App">
      <header className="App-header">
      <Test></Test>
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link" rel="noopener noreferrer" onClick={onClick}>
        React-dispatch
        </a> 
        {/* <a className="App-link" rel="noopener noreferrer" onClick={unMount}>
          卸载
        </a> */}
      </header>
    </div>
  );
}

export default App;
