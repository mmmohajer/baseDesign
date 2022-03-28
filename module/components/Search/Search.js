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

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _defaultProps = _interopRequireDefault(require("../../constants/defaultProps"));

var _SearchModule = _interopRequireDefault(require("./Search.module.scss"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _excluded = ["iconFillColor", "iconStrokeColor", "className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var defaultProps = _defaultProps["default"].defaultProps,
    defaultPropTypes = _defaultProps["default"].defaultPropTypes;

var Search = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var iconFillColor = _ref.iconFillColor,
      iconStrokeColor = _ref.iconStrokeColor,
      className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "pos-rel"
  }, /*#__PURE__*/_react["default"].createElement("input", (0, _extends2["default"])({
    className: (0, _classnames["default"])("iswad_search_field", className),
    type: "search"
  }, props, {
    ref: ref
  })), /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    className: (0, _classnames["default"])("pos-abs pos-abs--lt", "iswad_search_icon"),
    type: "search",
    fill: iconFillColor,
    stroke: iconStrokeColor,
    scale: 0.75
  })));
});

Search.propTypes = _objectSpread(_objectSpread({}, defaultPropTypes), {}, {
  iconFillColor: _propTypes["default"].string,
  iconStrokeColor: _propTypes["default"].string
});
Search.defaultProps = _objectSpread(_objectSpread({}, defaultProps), {}, {
  iconFillColor: "black",
  iconStrokeColor: "black"
});
var _default = Search;
exports["default"] = _default;
//# sourceMappingURL=Search.js.map