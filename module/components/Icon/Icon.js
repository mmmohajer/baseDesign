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

var _allowedProps = _interopRequireDefault(require("../../utils/allowedProps"));

var _defaultProps = _interopRequireDefault(require("../../constants/defaultProps"));

var _excluded = ["type", "fill", "stroke", "scale"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var defaultProps = _defaultProps["default"].defaultProps,
    defaultPropTypes = _defaultProps["default"].defaultPropTypes;

var Search = function Search(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
  }));
};

Search.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  className: "bi bi-search"
};

var Up = function Up(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
  }));
};

Up.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  className: "bi bi-chevron-up"
};

var Down = function Down(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
  }));
};

Down.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  className: "bi bi-chevron-down"
};

var Left = function Left(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
  }));
};

Left.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  className: "bi bi-chevron-left"
};

var Right = function Right(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
  }));
};

Right.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  className: "bi bi-chevron-right"
};

var Dash = function Dash(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
  }));
};

Dash.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  className: "bi bi-dash-lg"
};

var FImage = function FImage(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"
  }));
};

FImage.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  className: "bi bi-image-fill"
};

var Image = function Image(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"
  }));
};

Image.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  className: "bi bi-image"
};

var FMic = function FMic(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"
  }));
};

FMic.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  className: "bi bi-mic-fill"
};

var Mic = function Mic(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z"
  }));
};

Mic.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  className: "bi bi-mic"
};

var Notification = function Notification(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
  }));
};

Notification.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  className: "bi bi-bell"
};

var FNotification = function FNotification(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"
  }));
};

FNotification.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  className: "bi bi-bell-fill"
};

var Setting = function Setting(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"
  }));
};

Setting.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  className: "bi bi-gear"
};

var FSetting = function FSetting(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"
  }));
};

FSetting.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  className: "bi bi-gear-fill"
};

var X = function X(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
  }));
};

X.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  className: "bi bi-x-lg"
};

var Share = function Share(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
  }));
};

Share.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  className: "bi bi-share"
};

var FShare = function FShare(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"
  }));
};

FShare.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  className: "bi bi-share-fill"
};

var Video = function Video(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6 10.117V5.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"
  }));
};

Video.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  className: "bi bi-file-play"
};

var FVideo = function FVideo(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 5.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43V5.884z"
  }));
};

FVideo.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  className: "bi bi-file-play-fill"
};

var Plus = function Plus(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
  }));
};

Plus.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  className: "bi bi-plus-lg"
};

var DoubleRight = function DoubleRight(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
  }));
};

DoubleRight.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  className: "bi bi-chevron-double-right"
};

var DoubleLeft = function DoubleLeft(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
  }));
};

DoubleLeft.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  className: "bi bi-chevron-double-left"
};

function Icon(_ref) {
  var type = _ref.type,
      fill = _ref.fill,
      stroke = _ref.stroke,
      scale = _ref.scale,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var otherProps = (0, _allowedProps["default"])(props);
  var iconTypes = {
    search: /*#__PURE__*/_react["default"].createElement(Search, (0, _extends2["default"])({
      fill: fill,
      stroke: stroke,
      style: {
        transform: "scale(".concat(scale, ")")
      }
    }, otherProps)),
    up: /*#__PURE__*/_react["default"].createElement(Up, (0, _extends2["default"])({
      fill: fill,
      stroke: stroke,
      style: {
        transform: "scale(".concat(scale, ")")
      }
    }, otherProps)),
    down: /*#__PURE__*/_react["default"].createElement(Down, (0, _extends2["default"])({
      fill: fill,
      stroke: stroke,
      style: {
        transform: "scale(".concat(scale, ")")
      }
    }, otherProps)),
    left: /*#__PURE__*/_react["default"].createElement(Left, (0, _extends2["default"])({
      fill: fill,
      stroke: stroke,
      style: {
        transform: "scale(".concat(scale, ")")
      }
    }, otherProps)),
    right: /*#__PURE__*/_react["default"].createElement(Right, (0, _extends2["default"])({
      fill: fill,
      stroke: stroke,
      style: {
        transform: "scale(".concat(scale, ")")
      }
    }, otherProps)),
    dash: /*#__PURE__*/_react["default"].createElement(Dash, (0, _extends2["default"])({
      fill: fill,
      stroke: stroke,
      style: {
        transform: "scale(".concat(scale, ")")
      }
    }, otherProps)),
    image: /*#__PURE__*/_react["default"].createElement(Image, (0, _extends2["default"])({
      fill: fill,
      stroke: stroke,
      style: {
        transform: "scale(".concat(scale, ")")
      }
    }, otherProps)),
    fimage: /*#__PURE__*/_react["default"].createElement(FImage, (0, _extends2["default"])({
      fill: fill,
      stroke: stroke,
      style: {
        transform: "scale(".concat(scale, ")")
      }
    }, otherProps)),
    mic: /*#__PURE__*/_react["default"].createElement(Mic, (0, _extends2["default"])({
      fill: fill,
      stroke: stroke,
      style: {
        transform: "scale(".concat(scale, ")")
      }
    }, otherProps)),
    fmic: /*#__PURE__*/_react["default"].createElement(FMic, (0, _extends2["default"])({
      fill: fill,
      stroke: stroke,
      style: {
        transform: "scale(".concat(scale, ")")
      }
    }, otherProps)),
    x: /*#__PURE__*/_react["default"].createElement(X, (0, _extends2["default"])({
      fill: fill,
      stroke: stroke,
      style: {
        transform: "scale(".concat(scale, ")")
      }
    }, otherProps)),
    setting: /*#__PURE__*/_react["default"].createElement(Setting, (0, _extends2["default"])({
      fill: fill,
      stroke: stroke,
      style: {
        transform: "scale(".concat(scale, ")")
      }
    }, otherProps)),
    fsetting: /*#__PURE__*/_react["default"].createElement(FSetting, (0, _extends2["default"])({
      fill: fill,
      stroke: stroke,
      style: {
        transform: "scale(".concat(scale, ")")
      }
    }, otherProps)),
    notification: /*#__PURE__*/_react["default"].createElement(Notification, (0, _extends2["default"])({
      fill: fill,
      stroke: stroke,
      style: {
        transform: "scale(".concat(scale, ")")
      }
    }, otherProps)),
    fnotification: /*#__PURE__*/_react["default"].createElement(FNotification, (0, _extends2["default"])({
      fill: fill,
      stroke: stroke,
      style: {
        transform: "scale(".concat(scale, ")")
      }
    }, otherProps)),
    plus: /*#__PURE__*/_react["default"].createElement(Plus, (0, _extends2["default"])({
      fill: fill,
      stroke: stroke,
      style: {
        transform: "scale(".concat(scale, ")")
      }
    }, otherProps)),
    video: /*#__PURE__*/_react["default"].createElement(Video, (0, _extends2["default"])({
      fill: fill,
      stroke: stroke,
      style: {
        transform: "scale(".concat(scale, ")")
      }
    }, otherProps)),
    fvideo: /*#__PURE__*/_react["default"].createElement(FVideo, (0, _extends2["default"])({
      fill: fill,
      stroke: stroke,
      style: {
        transform: "scale(".concat(scale, ")")
      }
    }, otherProps)),
    share: /*#__PURE__*/_react["default"].createElement(Share, (0, _extends2["default"])({
      fill: fill,
      stroke: stroke,
      style: {
        transform: "scale(".concat(scale, ")")
      }
    }, otherProps)),
    fshare: /*#__PURE__*/_react["default"].createElement(FShare, (0, _extends2["default"])({
      fill: fill,
      stroke: stroke,
      style: {
        transform: "scale(".concat(scale, ")")
      }
    }, otherProps)),
    doubleRight: /*#__PURE__*/_react["default"].createElement(DoubleRight, (0, _extends2["default"])({
      fill: fill,
      stroke: stroke,
      style: {
        transform: "scale(".concat(scale, ")")
      }
    }, otherProps)),
    doubleLeft: /*#__PURE__*/_react["default"].createElement(DoubleLeft, (0, _extends2["default"])({
      fill: fill,
      stroke: stroke,
      style: {
        transform: "scale(".concat(scale, ")")
      }
    }, otherProps))
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, iconTypes[type]);
}

Icon.propTypes = _objectSpread(_objectSpread({}, defaultPropTypes), {}, {
  type: _propTypes["default"].oneOf(["search", "up", "down", "left", "right", "dash", "image", "fimage", "mic", "fmic", "notification", "fnotification", "setting", "fsetting", "x", "video", "fvideo", "share", "fshare", "plus", "doubleRight", "doubleLeft"]),
  fill: _propTypes["default"].string,
  stroke: _propTypes["default"].string
});
Icon.defaultProps = _objectSpread(_objectSpread({}, defaultProps), {}, {
  type: "search",
  fill: "black",
  stroke: "black",
  scale: 1
});
var _default = Icon;
exports["default"] = _default;
//# sourceMappingURL=Icon.js.map