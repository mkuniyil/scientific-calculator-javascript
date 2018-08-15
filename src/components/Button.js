import React, { Component } from "react";

class Button extends Component {
  /**
   * Method for returning the classname for button
   *
   * @param {string} value
   * @returns {string}
   */
  getClassName = (isRed, isSmall) => {
    let className = isRed ? "red" : "grey";

    if (isSmall) {
      className += " small";
    }

    return className;
  };

  render() {
    const { displayText, redKey, smallKey } = this.props.entry;

    return (
      <button className={this.getClassName(redKey, smallKey)}>
        {displayText}
      </button>
    );
  }
}

export default Button;
