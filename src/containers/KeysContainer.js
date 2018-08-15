import { connect } from "react-redux";
import Keys from "../components/Keys";
import { updateDisplayValue, updateStateValues, togglePower } from "../actions";

/**
 * Transfer a state to component's props
 *
 * @param {Object} state
 * @return {Object}
 */
const mapStateToProps = ({
  hideDisplay,
  displayValue,
  memoryValue,
  currentValue,
  currentOperator
}) => {
  return {
    hideDisplay,
    displayValue,
    memoryValue,
    currentValue,
    currentOperator
  };
};

/**
 * Defines callbacks to change a state of store
 *
 * @property {Function} updateStateValues
 * @property {Function} updateDisplayValue
 * @property {Function} togglePower
 */
const mapDispatchToProps = {
  updateStateValues,
  updateDisplayValue,
  togglePower
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Keys);
