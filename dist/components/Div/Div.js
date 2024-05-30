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

var _excluded = ["children", "type", "direction", "hAlign", "vAlign", "textAlign", "distributedBetween", "distributedAround", "showIn", "className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var defaultProps = _defaultProps["default"].defaultProps,
    defaultPropTypes = _defaultProps["default"].defaultPropTypes;

var Div = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var children = _ref.children,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'block' : _ref$type,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'horizontal' : _ref$direction,
      _ref$hAlign = _ref.hAlign,
      hAlign = _ref$hAlign === void 0 ? 'start' : _ref$hAlign,
      _ref$vAlign = _ref.vAlign,
      vAlign = _ref$vAlign === void 0 ? 'start' : _ref$vAlign,
      _ref$textAlign = _ref.textAlign,
      textAlign = _ref$textAlign === void 0 ? 'left' : _ref$textAlign,
      _ref$distributedBetwe = _ref.distributedBetween,
      distributedBetween = _ref$distributedBetwe === void 0 ? false : _ref$distributedBetwe,
      _ref$distributedAroun = _ref.distributedAround,
      distributedAround = _ref$distributedAroun === void 0 ? false : _ref$distributedAroun,
      _ref$showIn = _ref.showIn,
      showIn = _ref$showIn === void 0 ? ['xs', 'sm', 'md', 'lg'] : _ref$showIn,
      className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _classnames["default"])(type === 'flex' && 'flex', direction === 'vertical' && 'flex--dir--col', direction === 'vertical' && hAlign === 'center' && 'flex--ai--center', direction !== 'vertical' && hAlign === 'center' && 'flex--jc--center', direction === 'vertical' && hAlign === 'end' && 'flex--ai--end', direction !== 'vertical' && hAlign === 'end' && 'flex--jc--end', direction === 'vertical' && vAlign === 'center' && 'flex--jc--center', direction !== 'vertical' && vAlign === 'center' && 'flex--ai--center', direction === 'vertical' && vAlign === 'end' && 'flex--jc--end', direction !== 'vertical' && vAlign === 'end' && 'flex--ai--end', distributedBetween && 'flex--jc--between', distributedAround && 'flex--jc--around', textAlign === 'center' && 'text-center', textAlign === 'right' && 'text-rtl', showIn && (0, _utils.showInCssClass)(type, showIn), className)
  }, props, {
    ref: ref
  }), children));
});

Div.propTypes = _objectSpread(_objectSpread({}, defaultPropTypes), {}, {
  type: _propTypes["default"].oneOf(['flex', 'block']),
  direction: _propTypes["default"].oneOf(['horizontal', 'vertical']),
  hAlign: _propTypes["default"].oneOf(['start', 'center', 'end']),
  vAlign: _propTypes["default"].oneOf(['start', 'center', 'end']),
  distributedBetween: _propTypes["default"].bool,
  distributedAround: _propTypes["default"].bool,
  textAlign: _propTypes["default"].oneOf(['left', 'center', 'right']),
  showIn: _propTypes["default"].array
});
var _default = Div;
exports["default"] = _default;
//# sourceMappingURL=Div.js.map