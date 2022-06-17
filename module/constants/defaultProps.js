"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var defaultProps = {
  id: '',
  className: '',
  data: undefined,
  tag: 'div'
};
var defaultPropTypes = {
  id: _propTypes["default"].string,
  className: _propTypes["default"].string,
  data: _propTypes["default"].object,
  tag: _propTypes["default"].string,
  style: _propTypes["default"].object
};
var buttonEvents = {
  onClick: _propTypes["default"].func
};
var inputEvents = {
  onChange: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  onKeyUp: _propTypes["default"].func,
  onKeyPress: _propTypes["default"].func
};
var allowedProps = [].concat((0, _toConsumableArray2["default"])(Object.keys(defaultPropTypes)), (0, _toConsumableArray2["default"])(Object.keys(buttonEvents)), (0, _toConsumableArray2["default"])(Object.keys(inputEvents)));
var _exports = {
  defaultProps: defaultProps,
  defaultPropTypes: defaultPropTypes,
  allowedProps: allowedProps
};
var _default = _exports;
exports["default"] = _default;
//# sourceMappingURL=defaultProps.js.map