"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Paragraph = _interopRequireDefault(require("../../Components/Paragraph"));

var TestParagraph = function TestParagraph() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Paragraph["default"], {
    className: "textGreen"
  }, " This is a Test for Paragragh Component. This text must be green."));
};

var _default = TestParagraph;
exports["default"] = _default;
//# sourceMappingURL=TestParagraph.js.map