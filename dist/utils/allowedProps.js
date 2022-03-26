"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _allowedKeys = _interopRequireDefault(require("./allowedKeys"));

var _defaultProps = _interopRequireDefault(require("../constants/defaultProps"));

var allowedPropsArray = _defaultProps["default"].allowedProps;

var allowedProps = function allowedProps(props) {
  return (0, _allowedKeys["default"])(props, allowedPropsArray);
};

var _default = allowedProps;
exports["default"] = _default;
//# sourceMappingURL=allowedProps.js.map