import { actionTypes } from "../config";

const togglePower = hide => {
  return {
    type: actionTypes.togglePower,
    hide
  };
};

const updateDisplayValue = value => {
  return {
    type: actionTypes.updateDisplayValue,
    value
  };
};

const updateStateValues = values => {
  return {
    type: actionTypes.updateStateValues,
    values
  };
};

export { togglePower, updateDisplayValue, updateStateValues };
