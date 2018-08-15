import React, { Component } from "react";
import Button from "./Button";
import { translation, calculatorKeys, regexPatterns } from "../config";

class Keys extends Component {
  /**
   * Object which returns respective funtions for performing calculator operations
   */
  calculatorOperations = {
    "/": (prevValue, nextValue) => prevValue / nextValue,
    "*": (prevValue, nextValue) => prevValue * nextValue,
    "+": (prevValue, nextValue) => prevValue + nextValue,
    "-": (prevValue, nextValue) => prevValue - nextValue,
    "%": (prevValue, nextValue) => (prevValue * nextValue) / 100,
    "√": (prevValue, nextValue) => prevValue * Math.sqrt(nextValue),
    "=": (prevValue, nextValue) => nextValue
  };
  /**
   * Handler for all button click
   *
   * @param {string} value
   */
  handleButtonClick = event => {
    let value = event.target.textContent;

    if (
      event.target.tagName.toLowerCase() !== "button" ||
      !value ||
      value.length === 0
    ) {
      return;
    }

    switch (value) {
      case ".":
        this.handleDotClick();
        return;
      case "+/-":
        this.handlePlusMinusClick();
        return;
      case "C":
        this.handleClearClick();
        return;
      case "OFF":
        this.handleToggleClick(true);
        return;
      case "AC":
        this.handleToggleClick(false);
        return;
      default:
    }

    if (regexPatterns["numbers"].test(value)) {
      this.handleNumberClick(value);
      return;
    }

    if (regexPatterns["memoryActions"].test(value)) {
      this.handleMemoryClick(value);
      return;
    }

    if (regexPatterns["operators"].test(value)) {
      this.handleOperatorClick(value);
      return;
    }
  };
  /**
   * Handler for dot button click
   *
   * @param {string} value
   */
  handleDotClick = () => {
    let { displayValue } = this.props;

    if (regexPatterns["dot"].test(displayValue)) {
      return;
    }

    displayValue += ".";
    this.props.updateDisplayValue(displayValue);
  };
  /**
   * Handler for plus/minus button click
   */
  handlePlusMinusClick = () => {
    let { displayValue } = this.props,
      firstChar = displayValue.substr(0, 1);

    if (displayValue === "0") {
      return;
    }

    displayValue = regexPatterns["minus"].test(firstChar)
      ? displayValue.substr(1, displayValue.length)
      : `-${displayValue}`;

    this.props.updateDisplayValue(displayValue);
  };
  /**
   * Handler for clear button click
   */
  handleClearClick = () => {
    let { displayValue } = this.props;

    if (displayValue === "0") {
      return;
    }

    displayValue =
      displayValue.length === 1
        ? "0"
        : displayValue.substr(0, displayValue.length - 1);

    this.props.updateDisplayValue(displayValue);
  };
  /**
   * Handler for OFF/AC(ON) button click
   *
   * @param {string} value
   */
  handleToggleClick = hide => {
    this.props.togglePower(hide);
    this.props.updateDisplayValue("0");
  };
  /**
   * Handler for number button click
   *
   * @param {string} value
   */
  handleNumberClick = value => {
    let { displayValue, memoryValue } = this.props;

    if (displayValue !== "0") {
      displayValue += String(value);
    } else {
      displayValue = String(value);
    }

    this.props.updateStateValues({ displayValue, memoryValue });
  };
  /**
   * Handler for memory button click
   *
   * @param {string} value
   */
  handleMemoryClick = value => {
    let { displayValue, memoryValue } = this.props;

    switch (value) {
      case "MC":
        memoryValue = 0;
        break;
      case "MR":
        this.props.updateDisplayValue(memoryValue);
        break;
      case "M+":
        memoryValue += this.computeMemoryValue(displayValue);
        break;
      case "M-":
        memoryValue -= this.computeMemoryValue(displayValue);
        break;
      default:
    }

    this.props.updateStateValues({ memoryValue: parseFloat(memoryValue) });
  };
  /**
   * Handler for various operator button click
   *
   * @param {string} value
   */
  handleOperatorClick = value => {
    let {
        displayValue,
        currentOperator,
        currentValue,
        memoryValue
      } = this.props,
      length = displayValue.length;

    if (
      regexPatterns["operators"].test(displayValue.substr(length - 1, length))
    ) {
      return;
    }

    if (currentOperator && displayValue !== String(currentValue)) {
      displayValue = this.calculateCurrentValue(displayValue, currentOperator);
    }

    currentValue = parseFloat(displayValue);
    currentOperator = this.getOperatorValue(value);
    if (currentOperator === "=") {
      currentOperator = null;
    }

    if (!regexPatterns["equalTo"].test(value)) {
      displayValue = String(displayValue) + value;
    } else {
      currentValue = null;
    }

    this.props.updateStateValues({
      currentOperator: currentOperator,
      currentValue,
      displayValue,
      memoryValue
    });
  };
  /**
   * Handler for OFF/AC(ON) button click
   *
   * @param {string} value
   * @param {string} operator
   * @returns {number}
   */
  calculateCurrentValue = (value, operator) => {
    value = value.replace("X", "*").replace("÷", "/");

    let firstChar = value.substr(0, 1);
    if (firstChar === "-") {
      value = value.substr(1, value.length);
    }

    let [prev, curr] = value.split(operator);
    if (firstChar === "-") {
      prev = "-" + prev;
    }

    if (!curr) {
      return prev;
    }

    return this.calculatorOperations[this.getOperatorValue(operator)](
      parseFloat(prev),
      parseFloat(curr)
    );
  };
  /**
   * Method for replacing the display operator text to actual operators
   *
   * @param {string} value
   * @returns {string}
   */
  getOperatorValue = value => {
    value = value.replace("X", "*").replace("÷", "/");

    return value;
  };
  /**
   * Method for calculating the memory value to store
   */
  computeMemoryValue = () => {
    let { displayValue, currentOperator, currentValue } = this.props;

    if (currentOperator && displayValue !== String(currentValue)) {
      displayValue = this.calculateCurrentValue(displayValue, currentOperator);
    }

    return parseFloat(displayValue);
  };

  render() {
    return (
      <div className="app__keys" onClick={this.handleButtonClick}>
        <div className="app__model">{translation.brandModel}</div>
        {calculatorKeys.map((entry, index) => {
          return <Button key={index} entry={entry} />;
        })}
      </div>
    );
  }
}

export default Keys;
