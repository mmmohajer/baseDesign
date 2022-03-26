"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Card = _interopRequireDefault(require("../../Components/Card"));

var _CardHeader = _interopRequireDefault(require("../../Components/Card/subs/CardHeader"));

var _CardBody = _interopRequireDefault(require("../../Components/Card/subs/CardBody"));

var _CardFooter = _interopRequireDefault(require("../../Components/Card/subs/CardFooter"));

var TestCard = function TestCard() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Card["default"], null, /*#__PURE__*/_react["default"].createElement(_CardHeader["default"], null, "Header"), /*#__PURE__*/_react["default"].createElement(_CardBody["default"], null, "Body"), /*#__PURE__*/_react["default"].createElement(_CardFooter["default"], null, "Footer")));
};

var _default = TestCard;
exports["default"] = _default;
//# sourceMappingURL=TestCard.js.map