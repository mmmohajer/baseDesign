"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _excluded = ["children", "isActive", "activeClassName", "className"];

var MobSubNavItem = function MobSubNavItem(_ref) {
  var children = _ref.children,
      isActive = _ref.isActive,
      activeClassName = _ref.activeClassName,
      className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, props, {
    className: (0, _classnames["default"])('iswad_mobSubNavItem', className, isActive && activeClassName)
  }), children));
};

var _default = MobSubNavItem;
exports["default"] = _default;
//# sourceMappingURL=MobSubNavItem.js.map