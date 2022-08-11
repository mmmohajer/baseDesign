"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Div = _interopRequireDefault(require("../../Components/Div"));

var _Text = _interopRequireDefault(require("../../Components/Text"));

var TestText = function TestText() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Div["default"], null, "This is a", /*#__PURE__*/_react["default"].createElement(_Text["default"], {
    className: "bgBlue"
  }, " Text component"), " inside a Div."));
};

var _default = TestText;
exports["default"] = _default;
//# sourceMappingURL=TestText.js.map