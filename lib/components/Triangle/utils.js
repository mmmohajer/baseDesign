"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cssDefaultConfig = exports.cssConfigShape = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var cssConfigShape = {
  size: _propTypes["default"].number,
  borderType: _propTypes["default"].string,
  color: _propTypes["default"].string
};
exports.cssConfigShape = cssConfigShape;
var cssDefaultConfig = {
  size: 50,
  borderType: 'solid',
  color: 'black',
  direction: 'down'
};
exports.cssDefaultConfig = cssDefaultConfig;
//# sourceMappingURL=utils.js.map