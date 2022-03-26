"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Image = _interopRequireDefault(require("../../Components/Image"));

var TestImage = function TestImage() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Image["default"], {
    src: "https://picsum.photos/200",
    alt: "Random Image",
    width: 350,
    height: 350
  }));
};

var _default = TestImage;
exports["default"] = _default;
//# sourceMappingURL=TestImage.js.map