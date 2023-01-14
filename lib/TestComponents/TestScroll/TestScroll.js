"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Scroll = _interopRequireDefault(require("../../Components/Scroll"));

var SCROLLABLE_ELEMENT_ID = 'scrollContainerId';
var SCROLLABLE_CONTENT_ID = 'scrollContentId';
var SCROLLABLE_ELEMENT_ID2 = 'scrollContainerId2';
var SCROLLABLE_CONTENT_ID2 = 'scrollContentId2';

function TestScroll() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Scroll["default"], {
    containerClassName: "height-px-40 w-px-200 ml-auto mr-auto pos-rel",
    scrollContainerClassName: "height-px-20 bgRed ml-auto mr-auto of-x-hidden of-y-hidden",
    scrollClassName: "bgBlue height-px-20 bgBlue pos-abs pos-abs--lb",
    scrollableElementId: SCROLLABLE_ELEMENT_ID,
    scrollableContentId: SCROLLABLE_CONTENT_ID,
    scrollAxis: "x"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "bgSilver of-x-auto of-y-auto",
    id: SCROLLABLE_ELEMENT_ID
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-px-400 height-px-40 bgGreen textWhite",
    id: SCROLLABLE_CONTENT_ID
  }, "Hello"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-per-100 flex flex--jc--center flex--ai--center bgBlack height-px-20 my3 textWhite"
  }, "Separator"), /*#__PURE__*/_react["default"].createElement(_Scroll["default"], {
    containerClassName: "flex height-px-200 w-px-400 ml-auto mr-auto pos-rel",
    scrollContainerClassName: "height-px-200 w-px-20 bgRed ml-auto mr-auto of-x-hidden of-y-hidden",
    scrollClassName: "bgBlue w-px-20 bgBlue pos-abs pos-abs--rt",
    scrollableElementId: SCROLLABLE_ELEMENT_ID2,
    scrollableContentId: SCROLLABLE_CONTENT_ID2,
    scrollAxis: "y"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "bgSilver height-px-200 of-x-auto of-y-auto",
    id: SCROLLABLE_ELEMENT_ID2
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-px-400 height-px-400 bgGreen textWhite",
    id: SCROLLABLE_CONTENT_ID2
  }, "Hello"))));
}

var _default = TestScroll;
exports["default"] = _default;
//# sourceMappingURL=TestScroll.js.map