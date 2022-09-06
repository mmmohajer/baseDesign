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

function TestScroll() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Scroll["default"], {
    containerClassName: "w-px-200 height-px-200 ml-auto mr-auto pos-rel",
    scrollContainerClassName: "height-px-20 bgRed ml-auto mr-auto of-x-hidden of-y-hidden",
    scrollClassName: "bgBlue w-px-100 height-px-20 bgBlue pos-abs pos-abs--lb",
    scrollableElementId: SCROLLABLE_ELEMENT_ID,
    scrollableContentId: SCROLLABLE_CONTENT_ID,
    scrollAxis: "x"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-px-200 bgSilver height-px-200 example of-x-auto of-y-auto",
    id: SCROLLABLE_ELEMENT_ID
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-px-400 height-px-400 bgGreen textWhite",
    id: SCROLLABLE_CONTENT_ID
  }, "Hello"))));
}

var _default = TestScroll;
exports["default"] = _default;
//# sourceMappingURL=TestScroll.js.map