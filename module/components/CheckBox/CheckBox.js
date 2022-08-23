"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var CheckBox = function CheckBox(_ref) {
  var _ref$checked = _ref.checked,
      checked = _ref$checked === void 0 ? false : _ref$checked,
      onBoxClick = _ref.onBoxClick;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('w-px-20 height-px-20 bgRed', checked && 'bgBlue'),
    onClick: onBoxClick
  }, checked && /*#__PURE__*/_react["default"].createElement("div", null, "He")));
};

var _default = CheckBox;
exports["default"] = _default;
//# sourceMappingURL=CheckBox.js.map