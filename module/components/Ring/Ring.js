"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../../utils/utils");

var _defaultProps = _interopRequireDefault(require("../../constants/defaultProps"));

var _utils2 = require("./utils");

var _styles = require("./styles");

var _excluded = ["percentage", "cssConfig", "containerUID", "showDefaultPercentageText", "innerSectionComp", "className", "outerCircleClassName", "innerCircleClassName", "defaultPercentageTextClassName"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var defaultProps = _defaultProps["default"].defaultProps,
    defaultPropTypes = _defaultProps["default"].defaultPropTypes;

var Ring = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var _ref$percentage = _ref.percentage,
      percentage = _ref$percentage === void 0 ? 100 : _ref$percentage,
      _ref$cssConfig = _ref.cssConfig,
      cssConfig = _ref$cssConfig === void 0 ? _utils2.cssDefaultConfig : _ref$cssConfig,
      _ref$containerUID = _ref.containerUID,
      containerUID = _ref$containerUID === void 0 ? (0, _utils.randomStr)() : _ref$containerUID,
      _ref$showDefaultPerce = _ref.showDefaultPercentageText,
      showDefaultPercentageText = _ref$showDefaultPerce === void 0 ? true : _ref$showDefaultPerce,
      _ref$innerSectionComp = _ref.innerSectionComp,
      innerSectionComp = _ref$innerSectionComp === void 0 ? null : _ref$innerSectionComp,
      className = _ref.className,
      outerCircleClassName = _ref.outerCircleClassName,
      innerCircleClassName = _ref.innerCircleClassName,
      defaultPercentageTextClassName = _ref.defaultPercentageTextClassName,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var appliedCssConfig = _objectSpread(_objectSpread({}, _utils2.cssDefaultConfig), cssConfig);

  (0, _react.useEffect)(function () {//
  }, [percentage]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _classnames["default"])(className)
  }, props, {
    ref: ref
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "pos-rel inline-block"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])("pos-rel br-rad-per-50 of-hidden ".concat(containerUID, "-outer-circle"), outerCircleClassName)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])("iswad_ring_segment ".concat(containerUID, "-seg-0-90"))
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])("iswad_ring_segment ".concat(containerUID, "-seg-90-180"))
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])("iswad_ring_segment ".concat(containerUID, "-seg-180-270"))
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])("iswad_ring_segment ".concat(containerUID, "-seg-270-360"))
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])("pos-abs pos-abs--center br-rad-per-50 ".concat(containerUID, "-inner-circle"), innerCircleClassName)
  }), showDefaultPercentageText && /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('pos-abs pos-abs--center', defaultPercentageTextClassName)
  }, percentage, "%"), !showDefaultPercentageText && innerSectionComp ? /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('pos-abs pos-abs--center')
  }, innerSectionComp()) : '')), /*#__PURE__*/_react["default"].createElement("style", null, (0, _styles.css)(appliedCssConfig, containerUID, percentage)));
});

Ring.propTypes = _objectSpread(_objectSpread({}, defaultPropTypes), {}, {
  cssConfig: _propTypes["default"].shape(_utils2.cssConfigShape),
  containerUID: _propTypes["default"].string,
  showDefaultPercentageText: _propTypes["default"].bool,
  innerSectionComp: _propTypes["default"].func
});
var _default = Ring;
exports["default"] = _default;
//# sourceMappingURL=Ring.js.map