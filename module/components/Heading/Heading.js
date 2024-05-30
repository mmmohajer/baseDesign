"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _defaultProps = _interopRequireDefault(require("../../constants/defaultProps"));

var _excluded = ["children", "type", "className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var defaultProps = _defaultProps["default"].defaultProps,
    defaultPropTypes = _defaultProps["default"].defaultPropTypes;

var Heading = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var children = _ref.children,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 1 : _ref$type,
      className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  switch (type) {
    case 1:
      return /*#__PURE__*/_react["default"].createElement("h1", (0, _extends2["default"])({
        className: className
      }, props, {
        ref: ref
      }), children);

    case 2:
      return /*#__PURE__*/_react["default"].createElement("h2", (0, _extends2["default"])({
        className: className
      }, props, {
        ref: ref
      }), children);

    case 3:
      return /*#__PURE__*/_react["default"].createElement("h3", (0, _extends2["default"])({
        className: className
      }, props, {
        ref: ref
      }), children);

    case 4:
      return /*#__PURE__*/_react["default"].createElement("h4", (0, _extends2["default"])({
        className: className
      }, props, {
        ref: ref
      }), children);

    case 5:
      return /*#__PURE__*/_react["default"].createElement("h5", (0, _extends2["default"])({
        className: className
      }, props, {
        ref: ref
      }), children);

    case 6:
      return /*#__PURE__*/_react["default"].createElement("h6", (0, _extends2["default"])({
        className: className
      }, props, {
        ref: ref
      }), children);

    default:
      return /*#__PURE__*/_react["default"].createElement("h1", (0, _extends2["default"])({
        className: className
      }, props, {
        ref: ref
      }), children);
  }
});

Heading.propTypes = _objectSpread(_objectSpread({}, defaultPropTypes), {}, {
  type: _propTypes["default"].number
});
var _default = Heading;
exports["default"] = _default;
//# sourceMappingURL=Heading.js.map