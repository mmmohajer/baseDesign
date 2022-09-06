"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _Scroll = _interopRequireDefault(require("../../Components/Scroll"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SCROLLABLE_ELEMENT_ID = 'scrollContainerId';
var SCROLLABLE_CONTENT_ID = 'scrollContentId';

function TestScroll() {
  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      scrollPercentage = _useState2[0],
      setScrollPercentage = _useState2[1];

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Scroll["default"], {
    containerClassName: "w-px-200 height-px-200 ml-auto mr-auto pos-rel",
    scrollContainerClassName: "height-px-20 bgRed ml-auto mr-auto of-x-hidden of-y-hidden",
    scrollClassName: "bgBlue w-px-100 height-px-20 bgBlue pos-abs pos-abs--lb",
    scrollableElementId: SCROLLABLE_ELEMENT_ID,
    scrollableContentId: SCROLLABLE_CONTENT_ID,
    scrollAxis: "x"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-px-200 height-px-200 ml-auto mr-auto test of-x-hidden of-y-hidden",
    id: SCROLLABLE_ELEMENT_ID
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-px-500 p1 height-px-200 bgGreen",
    id: SCROLLABLE_CONTENT_ID
  }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."))));
}

var _default = TestScroll;
exports["default"] = _default;
//# sourceMappingURL=TestDraggableScroll.js.map