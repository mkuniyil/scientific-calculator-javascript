import reducer from "../../reducers/appReducers";
import { actionTypes } from "../../config";

describe("reducers", () => {
  const INITIAL_STATE = {
    hideDisplay: false,
    displayValue: "12",
    memoryValue: 0,
    currentValue: null,
    currentOperator: null
  };

  test("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  test("should handle 'togglePower' request", () => {
    let action = {
      hide: "testVal",
      type: actionTypes.togglePower
    };

    expect(reducer(INITIAL_STATE, action)).toEqual({
      ...INITIAL_STATE,
      hideDisplay: action.hide,
      displayValue: "0",
      currentValue: null,
      currentOperator: null
    });
  });

  test("should handle 'updateDisplayValue' request", () => {
    let action = {
      value: "testValue",
      type: actionTypes.updateDisplayValue
    };

    expect(reducer(INITIAL_STATE, action)).toEqual({
      ...INITIAL_STATE,
      displayValue: String(action.value)
    });
  });

  test("should handle 'updateStateValues' request", () => {
    let action = {
      values: {
        displayValue: "display",
        currentValue: "current",
        currentOperator: "operator",
        memoryValue: "memeory"
      },
      type: actionTypes.updateStateValues
    };

    expect(reducer(INITIAL_STATE, action)).toEqual({
      ...INITIAL_STATE,
      displayValue: "display",
      currentValue: "current",
      currentOperator: "operator",
      memoryValue: "memeory"
    });
  });
});
