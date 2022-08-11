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

var _utils = require("../../utils/utils");

var _excluded = ["type", "className", "containerClassName", "errorContainerClassName", "activeErrorContainerClassName", "errorTextClassName", "fullWidth", "errorMessage", "errorIsActive", "children", "id"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var defaultProps = _defaultProps["default"].defaultProps,
    defaultPropTypes = _defaultProps["default"].defaultPropTypes;

var Input = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var type = _ref.type,
      className = _ref.className,
      containerClassName = _ref.containerClassName,
      errorContainerClassName = _ref.errorContainerClassName,
      activeErrorContainerClassName = _ref.activeErrorContainerClassName,
      errorTextClassName = _ref.errorTextClassName,
      fullWidth = _ref.fullWidth,
      errorMessage = _ref.errorMessage,
      errorIsActive = _ref.errorIsActive,
      children = _ref.children,
      id = _ref.id,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('flex flex--dir--col iswad_input_container', containerClassName)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "iswad_input_field_container"
  }, /*#__PURE__*/_react["default"].createElement("input", (0, _extends2["default"])({
    className: (0, _classnames["default"])('iswad_input', className, fullWidth && 'w-per-100')
  }, props, {
    ref: ref,
    type: type,
    id: id
  }))), errorMessage !== null && errorMessage !== void 0 && errorMessage.length ? /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('iswad_input_errorMessage', errorContainerClassName, errorIsActive && 'iswad_input_errorMessage_active', errorIsActive && activeErrorContainerClassName)
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: errorTextClassName
  }, errorMessage)) : ''));
});

Input.propTypes = _objectSpread(_objectSpread({}, defaultPropTypes), {}, {
  type: _propTypes["default"].oneOf(['button', 'checkbox', 'color', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week']),
  fullWidth: _propTypes["default"].bool,
  errorMessage: _propTypes["default"].string,
  errorIsActive: _propTypes["default"].bool
});
Input.defaultProps = _objectSpread(_objectSpread({}, defaultProps), {}, {
  fullWidth: false,
  errorIsActive: true
});
var _default = Input;
exports["default"] = _default;
//# sourceMappingURL=Input.js.map