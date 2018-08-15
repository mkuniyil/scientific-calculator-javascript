import React, { Component } from "react";

class Display extends Component {
  /**
   * Method for getting the display element
   *
   * @param {string} value
   * @returns {string}
   */
  getDisplayElem = ({ hideDisplay, displayValue }) => {
    if (hideDisplay) {
      return;
    }

    return <span>{displayValue}</span>;
  };

  render() {
    return (
      <div className="app__display">{this.getDisplayElem(this.props)}</div>
    );
  }
}

export default Display;
