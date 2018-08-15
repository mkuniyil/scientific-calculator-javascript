import React, { Component } from "react";
import "./App.less";

import Title from "./components/Title";
import CalculatorDisplayContainer from "./containers/DisplayContainer";
import CalculatorKeysContainer from "./containers/KeysContainer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__hiddenArrow left" />
        <div className="app__hiddenArrow right" />
        <div className="app__container">
          <Title />
          <CalculatorDisplayContainer />
          <CalculatorKeysContainer />
        </div>
      </div>
    );
  }
}

export default App;
