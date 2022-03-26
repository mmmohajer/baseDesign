"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Heading = _interopRequireDefault(require("../../Components/Heading"));

var TestHeading = function TestHeading() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Heading["default"], {
    className: "textBlue",
    type: 1,
    onClick: function onClick() {
      return console.log("Hello");
    }
  }, "Heading 1"), /*#__PURE__*/_react["default"].createElement(_Heading["default"], {
    className: "textBlue",
    type: 2
  }, "Heading 2"), /*#__PURE__*/_react["default"].createElement(_Heading["default"], {
    className: "textBlue",
    type: 3
  }, "Heading 3"), /*#__PURE__*/_react["default"].createElement(_Heading["default"], {
    className: "textBlue",
    type: 4
  }, "Heading 4"), /*#__PURE__*/_react["default"].createElement(_Heading["default"], {
    className: "textBlue",
    type: 5
  }, "Heading 5"), /*#__PURE__*/_react["default"].createElement(_Heading["default"], {
    className: "textBlue",
    type: 6
  }, "Heading 6"));
};

var _default = TestHeading;
exports["default"] = _default;
//# sourceMappingURL=TestHeading.js.map