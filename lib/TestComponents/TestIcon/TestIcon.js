"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../../Components/Icon"));

var arrayOfIcons = ["search", "up", "down", "left", "right", "dash", "image", "fimage", "mic", "fmic", "notification", "fnotification", "setting", "fsetting", "x", "video", "fvideo", "share", "fshare", "plus"];

var TestIcon = function TestIcon() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, arrayOfIcons.map(function (icon, idx) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "ml2 mr2",
      key: idx
    }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      type: icon,
      scale: 1.2,
      fill: "dodgerblue",
      stroke: "dodgerblue"
    }));
  }));
};

var _default = TestIcon;
exports["default"] = _default;
//# sourceMappingURL=TestIcon.js.map