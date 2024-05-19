"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Alert = _interopRequireDefault(require("../../Components/Alert"));

var _AlertItem = _interopRequireDefault(require("../../Components/Alert/subs/AlertItem"));

require("./TestAlert.scss");

var arrayOfNotifications = [{
  key: 'key1',
  message: 'Notif1',
  type: 'success',
  isActive: true
}, {
  key: 'key2',
  message: 'Notif2',
  type: 'error',
  isActive: false
}];

var TestAlert = function TestAlert() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Alert["default"], {
    className: "flex flex--ai--end flex--jc--center flex--dir--col w-per-50 ml-auto"
  }, arrayOfNotifications.map(function (notif) {
    return /*#__PURE__*/_react["default"].createElement(_AlertItem["default"], {
      key: notif.key,
      className: "bgBlue my1 width-per-100 flex flex--jc--end p1 textWhite",
      isActive: notif.isActive
    }, /*#__PURE__*/_react["default"].createElement("p", null, notif.message));
  })));
};

var _default = TestAlert;
exports["default"] = _default;
//# sourceMappingURL=TestAlert.js.map