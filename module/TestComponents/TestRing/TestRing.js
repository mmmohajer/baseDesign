"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Ring = _interopRequireDefault(require("../../Components/Ring"));

var cssConfig = {
  seg_0_90_bgColor: 'blue',
  seg_90_180_bgColor: 'blue',
  seg_180_270_bgColor: 'blue',
  seg_270_360_bgColor: 'blue',
  outer_circle_size: 200,
  outer_circle_background_color: 'red',
  inner_circle_size: 160,
  inner_circle_background_color: 'white'
};

var TestRing = function TestRing() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Ring["default"], {
    cssConfig: cssConfig
  }));
};

var _default = TestRing;
exports["default"] = _default;
//# sourceMappingURL=TestRing.js.map