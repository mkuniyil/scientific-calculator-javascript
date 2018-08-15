import { actionTypes } from "../../config";
import {
  togglePower,
  updateDisplayValue,
  updateStateValues
} from "../../actions/index";

describe("actions", () => {
  it("should return an object with type 'TOGGLE_POWER' and passed boolean", () => {
    const hide = true;

    expect(togglePower(hide)).toEqual({
      type: actionTypes.togglePower,
      hide
    });
  });

  it("should return an object with type 'UPDATE_DISPLAY_VALUE' and passed string", () => {
    const value = "test string";

    expect(updateDisplayValue(value)).toEqual({
      type: actionTypes.updateDisplayValue,
      value
    });
  });

  it("should return an object with type 'UPDATE_STATE_VALUES' and passed values", () => {
    const values = {
      display: "display",
      memory: "memory"
    };

    expect(updateStateValues(values)).toEqual({
      type: actionTypes.updateStateValues,
      values
    });
  });
});
