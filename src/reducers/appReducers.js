import { actionTypes } from "../config";

const INITIAL_STATE = {
  hideDisplay: false,
  displayValue: "0",
  memoryValue: 0,
  currentValue: null,
  currentOperator: null
};
/**
 * Reducer method for whole app
 *
 * @param {Object} state
 * @param {Object} action
 * @return {Object}
 */
const reducer = (state = { ...INITIAL_STATE }, action) => {
  switch (action.type) {
    case actionTypes.togglePower:
      return {
        ...state,
        hideDisplay: action.hide,
        displayValue: "0",
        currentValue: null,
        currentOperator: null
      };
    case actionTypes.updateDisplayValue:
      return {
        ...state,
        displayValue: String(action.value)
      };
    case actionTypes.updateStateValues:
      const {
        displayValue,
        currentValue,
        currentOperator,
        memoryValue
      } = action.values;
      let newState = { ...state, memoryValue };

      if (displayValue) {
        newState = { ...newState, displayValue: String(displayValue) };
      }

      if (currentValue) {
        newState = { ...newState, currentValue };
      }

      if (currentOperator) {
        newState = { ...newState, currentOperator };
      }

      return {
        ...newState
      };
    default:
      return state;
  }
};

export default reducer;
