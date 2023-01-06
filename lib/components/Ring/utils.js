"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cssDefaultConfig = exports.cssConfigShape = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var cssConfigShape = {
  seg_0_90_bgColor: _propTypes["default"].string,
  seg_90_180_bgColor: _propTypes["default"].string,
  seg_180_270_bgColor: _propTypes["default"].string,
  seg_270_360_bgColor: _propTypes["default"].string,
  outer_circle_size: _propTypes["default"].number,
  outer_circle_background_color: _propTypes["default"].string,
  inner_circle_size: _propTypes["default"].number,
  inner_circle_background_color: _propTypes["default"].string
};
exports.cssConfigShape = cssConfigShape;
var cssDefaultConfig = {
  seg_0_90_bgColor: 'blue',
  seg_90_180_bgColor: 'blue',
  seg_180_270_bgColor: 'blue',
  seg_270_360_bgColor: 'blue',
  outer_circle_size: 200,
  outer_circle_background_color: 'red',
  inner_circle_size: 180,
  inner_circle_background_color: 'white'
};
exports.cssDefaultConfig = cssDefaultConfig;
//# sourceMappingURL=utils.js.map