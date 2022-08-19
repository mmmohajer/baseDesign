"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _defaultProps = _interopRequireDefault(require("../../constants/defaultProps"));

var _utils = require("../../utils/utils");

var _utils2 = require("./utils");

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var defaultProps = _defaultProps["default"].defaultProps,
    defaultPropTypes = _defaultProps["default"].defaultPropTypes;

function HamburgerIcon(_ref) {
  var containerUID = _ref.containerUID,
      onClick = _ref.onClick,
      onOpenedIconClick = _ref.onOpenedIconClick,
      onClosedIconClick = _ref.onClosedIconClick,
      cssConfig = _ref.cssConfig,
      iconToggler = _ref.iconToggler;

  var appliedCssConfig = _objectSpread(_objectSpread({}, _utils2.cssDefaultConfig), cssConfig);

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isIconOpened = _useState2[0],
      setIsIconOpened = _useState2[1];

  (0, _react.useEffect)(function () {
    if (iconToggler) {
      var menuIcon = document.querySelector(".".concat(containerUID, "-hamburgerMenuIcon")) || document.querySelector(".".concat(containerUID, "-hamburgerMenuClosedIcon"));
      menuIcon.classList.toggle("".concat(containerUID, "-hamburgerMenuIcon"));
      menuIcon.classList.toggle("".concat(containerUID, "-hamburgerMenuClosedIcon"));
    }
  }, [iconToggler]);

  var menuIconToggleHandler = function menuIconToggleHandler() {
    var menuIcon = document.querySelector(".".concat(containerUID, "-hamburgerMenuIcon")) || document.querySelector(".".concat(containerUID, "-hamburgerMenuClosedIcon"));
    menuIcon.classList.toggle("".concat(containerUID, "-hamburgerMenuIcon"));
    menuIcon.classList.toggle("".concat(containerUID, "-hamburgerMenuClosedIcon"));

    if (isIconOpened && onOpenedIconClick) {
      onOpenedIconClick();
    }

    if (!isIconOpened && onClosedIconClick) {
      onClosedIconClick();
    }

    if (!onOpenedIconClick && !onClosedIconClick && onClick) {
      onClick();
    }

    setIsIconOpened(!isIconOpened);
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])("".concat(containerUID, "-hamburgerMenuContainer")),
    onClick: menuIconToggleHandler
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])("".concat(containerUID, "-hamburgerMenuIcon"))
  })), /*#__PURE__*/_react["default"].createElement("style", null, (0, _styles.css)(appliedCssConfig, containerUID)));
}

HamburgerIcon.propTypes = _objectSpread(_objectSpread({}, defaultPropTypes), {}, {
  onClick: _propTypes["default"].func,
  onOpenedIconClick: _propTypes["default"].func,
  onClosedIconClick: _propTypes["default"].func,
  cssConfig: _propTypes["default"].shape(_utils2.cssConfigShape),
  iconToggler: _propTypes["default"].bool,
  setIconToggler: _propTypes["default"].func,
  containerUID: _propTypes["default"].string
});
HamburgerIcon.defaultProps = _objectSpread(_objectSpread({}, defaultProps), {}, {
  cssConfig: _utils2.cssDefaultConfig,
  containerUID: (0, _utils.randomStr)()
});
var _default = HamburgerIcon;
exports["default"] = _default;
//# sourceMappingURL=HamburgerIcon.js.map