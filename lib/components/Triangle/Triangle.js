"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../../utils/utils");

var _defaultProps = _interopRequireDefault(require("../../constants/defaultProps"));

var _utils2 = require("./utils");

var _styles = require("./styles");

var _excluded = ["containerUID", "cssConfig", "className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var defaultProps = _defaultProps["default"].defaultProps,
    defaultPropTypes = _defaultProps["default"].defaultPropTypes;

var Triangle = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var containerUID = _ref.containerUID,
      cssConfig = _ref.cssConfig,
      className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var appliedCssConfig = _objectSpread(_objectSpread({}, _utils2.cssDefaultConfig), cssConfig);

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])("".concat(containerUID, "-triangleContainer"), className)
  }), /*#__PURE__*/_react["default"].createElement("style", null, (0, _styles.css)(appliedCssConfig, containerUID)));
});

Triangle.propTypes = _objectSpread(_objectSpread({}, defaultPropTypes), {}, {
  cssConfig: _propTypes["default"].shape(_utils2.cssConfigShape),
  containerUID: _propTypes["default"].string
});
Triangle.defaultProps = _objectSpread(_objectSpread({}, defaultProps), {}, {
  cssConfig: _utils2.cssDefaultConfig,
  containerUID: (0, _utils.randomStr)()
});
var _default = Triangle;
exports["default"] = _default;
//# sourceMappingURL=Triangle.js.map