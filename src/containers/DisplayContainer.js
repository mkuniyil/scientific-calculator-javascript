import { connect } from "react-redux";
import Display from "../components/Display";

/**
 * Transfer a state to component's props
 *
 * @param {Object} state
 * @return {Object}
 */
const mapStateToProps = ({ displayValue, hideDisplay }) => {
  return { displayValue, hideDisplay };
};

export default connect(mapStateToProps)(Display);
