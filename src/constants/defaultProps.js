import PropTypes from "prop-types";
const defaultProps = {
  id: "",
  className: "",
  data: undefined,
  tag: "div",
};

const defaultPropTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  data: PropTypes.object,
  tag: PropTypes.string,
  style: PropTypes.object,
};

const buttonEvents = {
  onClick: PropTypes.func,
};

const inputEvents = {
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  onKeyPress: PropTypes.func,
};

const allowedProps = [
  ...Object.keys(defaultPropTypes),
  ...Object.keys(buttonEvents),
  ...Object.keys(inputEvents),
];

const exports = { defaultProps, defaultPropTypes, allowedProps };
export default exports;
