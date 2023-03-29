"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.headLines = exports.data = void 0;

var _react = _interopRequireDefault(require("react"));

var _MOCK_DATA = _interopRequireDefault(require("./MOCK_DATA.json"));

var headLines = [{
  value: 'first_name',
  display: 'First Name',
  width: 300,
  hasSearch: true,
  isSortable: true
}, {
  value: 'last_name',
  display: 'Last Name',
  width: 300,
  hasSearch: true,
  isSortable: true
}, {
  value: 'email',
  display: 'Email',
  width: 300,
  hasSearch: true,
  isSortable: true
}, {
  value: 'gender',
  display: 'Gender',
  width: 300,
  hasSearch: true,
  isSortable: true
}, {
  value: 'ip_address',
  display: 'IP Address',
  width: 400,
  hasSearch: true
}];
exports.headLines = headLines;
var data = _MOCK_DATA["default"];
exports.data = data;
//# sourceMappingURL=utils.js.map