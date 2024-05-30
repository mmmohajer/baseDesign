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

var _excluded = ["xs", "sm", "md", "lg", "showIn", "className", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var defaultProps = _defaultProps["default"].defaultProps,
    defaultPropTypes = _defaultProps["default"].defaultPropTypes;
var arrayOfColSize = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var Column = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var _ref$xs = _ref.xs,
      xs = _ref$xs === void 0 ? 12 : _ref$xs,
      _ref$sm = _ref.sm,
      sm = _ref$sm === void 0 ? 12 : _ref$sm,
      _ref$md = _ref.md,
      md = _ref$md === void 0 ? 12 : _ref$md,
      _ref$lg = _ref.lg,
      lg = _ref$lg === void 0 ? 12 : _ref$lg,
      _ref$showIn = _ref.showIn,
      showIn = _ref$showIn === void 0 ? ['xs', 'sm', 'md', 'lg'] : _ref$showIn,
      className = _ref.className,
      children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var getCssClass = function getCssClass(num, size) {
    if (size === 'xs') {
      return "row--".concat(num);
    } else if (size === 'sm') {
      return "row--sm--".concat(num);
    } else if (size === 'md') {
      return "row--md--".concat(num);
    } else if (size === 'lg') {
      return "row--lg--".concat(num);
    }
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _classnames["default"])('row', getCssClass(xs, 'xs'), getCssClass(sm, 'sm'), getCssClass(md, 'md'), getCssClass(lg, 'lg'), showIn && (0, _utils.showInCssClass)('flex', showIn), className)
  }, props, {
    ref: ref
  }), children));
});

Column.propTypes = _objectSpread(_objectSpread({}, defaultPropTypes), {}, {
  xs: _propTypes["default"].oneOf(arrayOfColSize),
  sm: _propTypes["default"].oneOf(arrayOfColSize),
  md: _propTypes["default"].oneOf(arrayOfColSize),
  lg: _propTypes["default"].oneOf(arrayOfColSize),
  showIn: _propTypes["default"].array
});
Column.defaultProps = _objectSpread(_objectSpread({}, defaultProps), {}, {
  xs: 12,
  sm: 12,
  md: 12,
  lg: 12,
  showIn: ['xs', 'sm', 'md', 'lg']
});
var _default = Column;
exports["default"] = _default;
//# sourceMappingURL=Column.js.map