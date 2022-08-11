"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _TestRowModule = _interopRequireDefault(require("./TestRow.module.scss"));

var _Row = _interopRequireDefault(require("../../Components/Row"));

var _Column = _interopRequireDefault(require("../../Components/Column"));

var TestRow = function TestRow() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Row["default"], null, /*#__PURE__*/_react["default"].createElement(_Column["default"], {
    xs: 12,
    sm: 8,
    md: 6,
    lg: 4,
    className: "bgRed"
  }, "Hello"), /*#__PURE__*/_react["default"].createElement(_Column["default"], {
    xs: 12,
    sm: 4,
    md: 6,
    lg: 8,
    className: "bgBlue"
  }, "Bye")));
};

var _default = TestRow;
exports["default"] = _default;
//# sourceMappingURL=TestRow.js.map