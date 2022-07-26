"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _TestNavBar = _interopRequireDefault(require("./TestComponents/TestNavBar"));

var _TestCaraousel = _interopRequireDefault(require("./TestComponents/TestCaraousel"));

var _TestIcon = _interopRequireDefault(require("./TestComponents/TestIcon"));

var _TestAlert = _interopRequireDefault(require("./TestComponents/TestAlert"));

var _TestModal = _interopRequireDefault(require("./TestComponents/TestModal"));

var _TestAdminNav = _interopRequireDefault(require("./TestComponents/TestAdminNav"));

var _TestDiv = _interopRequireDefault(require("./TestComponents/TestDiv"));

var _TestCard = _interopRequireDefault(require("./TestComponents/TestCard"));

var _TestTable = _interopRequireDefault(require("./TestComponents/TestTable"));

var _TestHeading = _interopRequireDefault(require("./TestComponents/TestHeading"));

var _TestImage = _interopRequireDefault(require("./TestComponents/TestImage"));

var _TestParagraph = _interopRequireDefault(require("./TestComponents/TestParagraph"));

var _TestText = _interopRequireDefault(require("./TestComponents/TestText"));

var _TestButton = _interopRequireDefault(require("./TestComponents/TestButton"));

var _TestForm = _interopRequireDefault(require("./TestComponents/TestForm"));

var _TestRow = _interopRequireDefault(require("./TestComponents/TestRow"));

var _TestSearch = _interopRequireDefault(require("./TestComponents/TestSearch"));

var _TestDraggableSlider = _interopRequireDefault(require("./TestComponents/TestDraggableSlider"));

var _TestSelect = _interopRequireDefault(require("./TestComponents/TestSelect"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import TestPagination from "TestComponents/TestPagination";
var Home = function Home() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement(_TestAdminNav["default"], null), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_TestText["default"], null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex--jc--center p2 flex--ai--center w-per-100 flex--wrap bgYellow"
  }, /*#__PURE__*/_react["default"].createElement(_TestIcon["default"], null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex--jc--center my2"
  }, /*#__PURE__*/_react["default"].createElement(_TestImage["default"], null)), /*#__PURE__*/_react["default"].createElement(_TestParagraph["default"], null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-px-400 ml-auto mr-auto"
  }, /*#__PURE__*/_react["default"].createElement(_TestCaraousel["default"], null)), /*#__PURE__*/_react["default"].createElement(_TestDiv["default"], null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "ml3"
  }, /*#__PURE__*/_react["default"].createElement(_TestHeading["default"], null)), /*#__PURE__*/_react["default"].createElement(_TestCard["default"], null), /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-woman-back-to-school-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-2.png",
    width: 30
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "p1"
  }, /*#__PURE__*/_react["default"].createElement(_TestTable["default"], null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "height-px-200 w-per-100 bgPrimary"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-justify w-px-400 flex flex--jc--center flex--ai--center ml-auto mr-auto"
  }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-per-100 p1 bgRed"
  }, /*#__PURE__*/_react["default"].createElement(_TestButton["default"], null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-per-100 p1 my1"
  }, /*#__PURE__*/_react["default"].createElement(_TestForm["default"], null)), /*#__PURE__*/_react["default"].createElement(_TestRow["default"], null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "m2 bgPurple p2"
  }, /*#__PURE__*/_react["default"].createElement(_TestSearch["default"], null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-px-400 ml-auto mr-auto"
  }, /*#__PURE__*/_react["default"].createElement(_TestDraggableSlider["default"], null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-px-400 ml-auto mr-auto"
  }, /*#__PURE__*/_react["default"].createElement(_TestSelect["default"], null)));
};

var _default = Home;
exports["default"] = _default;
//# sourceMappingURL=App.js.map