"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _Select = _interopRequireDefault(require("../../Components/Select"));

var _constants = require("./constants");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function TestSelect() {
  var _useState = (0, _react.useState)('AB'),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      val = _useState2[0],
      setVal = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      isOptions1Active = _useState4[0],
      setIsOptions1Active = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      isOptions2Active = _useState6[0],
      setIsOptions2Active = _useState6[1];

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "bgBlue height-px-250"
  }, /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    selectValue: val,
    setSelectValue: setVal,
    options: _constants.PROVINCE_CHOICES,
    isOptionsActive: isOptions1Active,
    setIsOptionsActive: setIsOptions1Active,
    selectIntialShownText: "Alberta"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "bgRed"
  }, /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    selectValue: val,
    setSelectValue: setVal,
    options: _constants.PROVINCE_CHOICES,
    isOptionsActive: isOptions2Active,
    setIsOptionsActive: setIsOptions2Active,
    selectIntialShownText: "Alberta"
  })));
}

var _default = TestSelect;
exports["default"] = _default;
//# sourceMappingURL=TestSelect.js.map