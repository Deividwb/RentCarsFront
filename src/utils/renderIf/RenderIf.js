import PropTypes from "prop-types";

const RenderIf = ({ condition, children }) => {
  return condition ? children : null;
};

export default RenderIf;

RenderIf.prototype = {
  condition: PropTypes.bool,
  children: PropTypes.node,
};
