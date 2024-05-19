"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _excluded = ["children", "fullHeightclassName", "className"];

var Modal = function Modal(_ref) {
  var children = _ref.children,
      fullHeightclassName = _ref.fullHeightclassName,
      className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('pos-fix pos-fix--lt width-per-100 height-vh-full', fullHeightclassName)
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('pos-fix pos-fix--center', className)
  }, children));
};

var _default = Modal;
exports["default"] = _default;
//# sourceMappingURL=Modal.js.map