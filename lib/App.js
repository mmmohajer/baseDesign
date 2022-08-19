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

var _TestSwipableSlider = _interopRequireDefault(require("./TestComponents/TestSwipableSlider"));

var _TestSelect = _interopRequireDefault(require("./TestComponents/TestSelect"));

var _TestActivableElement = _interopRequireDefault(require("./TestComponents/TestActivableElement"));

var _TestPagination = _interopRequireDefault(require("./TestComponents/TestPagination"));

var _TestLimitedSwipableSlider = _interopRequireDefault(require("./TestComponents/TestLimitedSwipableSlider"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Home = function Home() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement(_TestNavBar["default"], null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-px-400 ml-auto mr-auto"
  }, /*#__PURE__*/_react["default"].createElement(_TestLimitedSwipableSlider["default"], null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-px-400 ml-auto mr-auto"
  }, /*#__PURE__*/_react["default"].createElement(_TestSwipableSlider["default"], null)));
};

var _default = Home;
exports["default"] = _default;
//# sourceMappingURL=App.js.map