"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Div = _interopRequireDefault(require("../../Components/Div"));

var _Triangle = _interopRequireDefault(require("../../Components/Triangle"));

var cssConfig = {
  direction: 'right',
  size: 20,
  color: 'green'
};

var TestTriangle = function TestTriangle() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Triangle["default"], {
    containerUID: "TestTriangle",
    cssConfig: cssConfig
  }));
};

var _default = TestTriangle;
exports["default"] = _default;
//# sourceMappingURL=TestTriangle.js.map