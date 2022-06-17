"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Div = _interopRequireDefault(require("../../Components/Div"));

var TestDiv = function TestDiv() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Div["default"], {
    type: "flex",
    direction: "horizontal",
    hAlign: "center",
    vAlign: "center",
    distributedAround: true,
    className: "bgRed height-px-400"
  }, /*#__PURE__*/_react["default"].createElement(_Div["default"], {
    textAlign: "right",
    className: "blue height-px-100 bgBlue w-per-20",
    showIn: ['md', 'lg']
  }, "Hello"), /*#__PURE__*/_react["default"].createElement(_Div["default"], {
    className: "blue height-px-100 bgPurple w-per-20",
    onClick: function onClick() {
      return console.log('Hello');
    }
  })));
};

var _default = TestDiv;
exports["default"] = _default;
//# sourceMappingURL=TestDiv.js.map