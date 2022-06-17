"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _defaultProps = _interopRequireDefault(require("../../constants/defaultProps"));

var _SearchModule = _interopRequireDefault(require("./Search.module.scss"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _excluded = ["closable", "iconFillColor", "iconStrokeColor", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var defaultProps = _defaultProps["default"].defaultProps,
    defaultPropTypes = _defaultProps["default"].defaultPropTypes;

var Search = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var closable = _ref.closable,
      iconFillColor = _ref.iconFillColor,
      iconStrokeColor = _ref.iconStrokeColor,
      className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      activeSearch = _useState2[0],
      setActiveSearch = _useState2[1];

  (0, _react.useEffect)(function () {
    if (!closable) {
      setActiveSearch(true);
    }
  }, [closable]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('min-height-px-30 min-w-px-30 br-rad-px-50 bgWhite flex flex--jc--center flex--ai--center iswad_search_container')
  }, closable ? /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    onClick: function onClick() {
      return setActiveSearch(!activeSearch);
    },
    type: "search",
    scale: 0.8,
    fill: iconFillColor,
    stroke: iconStrokeColor,
    className: "mouse-hand"
  }) : /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    type: "search",
    scale: 0.8,
    fill: iconFillColor,
    stroke: iconStrokeColor,
    className: (0, _classnames["default"])(closable && 'mouse-hand')
  }), /*#__PURE__*/_react["default"].createElement("input", (0, _extends2["default"])({
    type: "search",
    className: (0, _classnames["default"])('iswad_search_input', activeSearch && 'iswad_search_input_active', className)
  }, props)))));
});

Search.propTypes = _objectSpread(_objectSpread({}, defaultPropTypes), {}, {
  closable: _propTypes["default"].bool,
  iconFillColor: _propTypes["default"].string,
  iconStrokeColor: _propTypes["default"].string
});
Search.defaultProps = _objectSpread(_objectSpread({}, defaultProps), {}, {
  closable: true,
  iconFillColor: 'grey',
  iconStrokeColor: 'gray'
});
var _default = Search;
exports["default"] = _default;
//# sourceMappingURL=Search.js.map