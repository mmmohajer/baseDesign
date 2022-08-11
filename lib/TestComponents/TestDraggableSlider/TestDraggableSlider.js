"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _SwipableSlider = _interopRequireDefault(require("../../Components/SwipableSlider"));

var _SwipableSliderItem = _interopRequireDefault(require("../../Components/SwipableSlider/subs/SwipableSliderItem"));

var _TestDraggableSliderModule = _interopRequireDefault(require("./TestDraggableSlider.module.scss"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var TestDraggableSlider = function TestDraggableSlider() {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      moveRight = _useState2[0],
      setMoveRight = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      moveLeft = _useState4[0],
      setMoveLeft = _useState4[1];

  var _useState5 = (0, _react.useState)(1),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      moveToItemWithNum = _useState6[0],
      setMoveToItemWithNum = _useState6[1];

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_SwipableSlider["default"], {
    moveRight: moveRight,
    setMoveRight: setMoveRight,
    moveLeft: moveLeft,
    setMoveLeft: setMoveLeft,
    moveToItemWithNum: moveToItemWithNum,
    setMoveToItemWithNum: setMoveToItemWithNum,
    transitionDuration: 0.25,
    transition_timing_function: "ease-in",
    className: (0, _classnames["default"])(_TestDraggableSliderModule["default"].container)
  }, /*#__PURE__*/_react["default"].createElement(_SwipableSliderItem["default"], {
    className: "w-per-100 flex flex--jc--between flex--ai--center"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "bgSilver textRed w-per-50 flex flex--jc--center flex--ai--center height-px-100"
  }, "Item 1"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "bgPrimary textRed w-per-50 flex flex--jc--center flex--ai--center height-px-100"
  }, "Item 2")), /*#__PURE__*/_react["default"].createElement(_SwipableSliderItem["default"], {
    className: "w-per-100 flex flex--jc--between flex--ai--center"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "bgSilver textRed w-per-50 flex flex--jc--center flex--ai--center height-px-100"
  }, "Item 3"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "bgPrimary textRed w-per-50 flex flex--jc--center flex--ai--center height-px-100"
  }, "Item 4")), /*#__PURE__*/_react["default"].createElement(_SwipableSliderItem["default"], {
    className: "w-per-100 flex flex--jc--between flex--ai--center"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "bgSilver textRed w-per-50 flex flex--jc--center flex--ai--center height-px-100"
  }, "Item 5"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "bgPrimary textRed w-per-50 flex flex--jc--center flex--ai--center height-px-100"
  }, "Item 6")), /*#__PURE__*/_react["default"].createElement(_SwipableSliderItem["default"], {
    className: "w-per-100 flex flex--jc--between flex--ai--center"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "bgSilver textRed w-per-50 flex flex--jc--center flex--ai--center height-px-100"
  }, "Item 7"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "bgPrimary textRed w-per-50 flex flex--jc--center flex--ai--center height-px-100"
  }, "Item 8")), /*#__PURE__*/_react["default"].createElement(_SwipableSliderItem["default"], {
    className: "w-per-100 flex flex--jc--between flex--ai--center"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "bgSilver textRed w-per-50 flex flex--jc--center flex--ai--center height-px-100"
  }, "Item 9"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "bgPrimary textRed w-per-50 flex flex--jc--center flex--ai--center height-px-100"
  }, "Item 10")), /*#__PURE__*/_react["default"].createElement(_SwipableSliderItem["default"], {
    className: "w-per-100 flex flex--jc--between flex--ai--center"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "bgSilver textRed w-per-50 flex flex--jc--center flex--ai--center height-px-100"
  }, "Item 11"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "bgPrimary textRed w-per-50 flex flex--jc--center flex--ai--center height-px-100"
  }, "Item 12"))), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return setMoveRight(true);
    }
  }, "Right"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return setMoveLeft(true);
    }
  }, "Left"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return setMoveToItemWithNum(4);
    }
  }, "Jump To number 4"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return setMoveToItemWithNum(1);
    }
  }, "Jump To Number 1"));
};

var _default = TestDraggableSlider;
exports["default"] = _default;
//# sourceMappingURL=TestDraggableSlider.js.map