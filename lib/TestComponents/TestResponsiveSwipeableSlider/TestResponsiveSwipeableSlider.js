"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _ResponsiveSwipeableSlider = _interopRequireDefault(require("../../Components/ResponsiveSwipeableSlider"));

var _ResponsiveSwipeableSliderItem = _interopRequireDefault(require("../../Components/ResponsiveSwipeableSlider/subs/ResponsiveSwipeableSliderItem"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var TestLimitedSwipableSlider = function TestLimitedSwipableSlider() {
  var _useState = (0, _react.useState)([0, 1, 2, 3, 4]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      items = _useState2[0],
      setItems = _useState2[1];

  var _useState3 = (0, _react.useState)([0, 1, 2, 3, 4]),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      rightSideActiveIndices = _useState4[0],
      setRightSideActiveIndices = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      moveRight = _useState6[0],
      setMoveRight = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      moveLeft = _useState8[0],
      setMoveLeft = _useState8[1];

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_ResponsiveSwipeableSlider["default"], {
    rightSideActiveIndices: rightSideActiveIndices,
    setRightSideActiveIndices: setRightSideActiveIndices,
    moveLeft: moveLeft,
    setMoveLeft: setMoveLeft,
    moveRight: moveRight,
    setMoveRight: setMoveRight
  }, items === null || items === void 0 ? void 0 : items.map(function (item, idx) {
    return /*#__PURE__*/_react["default"].createElement(_ResponsiveSwipeableSliderItem["default"], {
      key: idx
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "w-px-300 bgBlue height-px-100"
    }, item), /*#__PURE__*/_react["default"].createElement("div", {
      className: "w-px-50 height-px-100"
    })));
  })), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return setMoveRight(true);
    }
  }, "Show Next"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return setMoveLeft(true);
    }
  }, "Show Previous"));
};

var _default = TestLimitedSwipableSlider;
exports["default"] = _default;
//# sourceMappingURL=TestResponsiveSwipeableSlider.js.map