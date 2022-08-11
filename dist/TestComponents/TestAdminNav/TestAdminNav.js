"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _AdminNav = _interopRequireDefault(require("../../Components/AdminNav"));

var _AdminNavItem = _interopRequireDefault(require("../../Components/AdminNav/subs/AdminNavItem"));

require("./TestAdminnav.scss");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var navItems = ['Item1', 'Item2', 'Item3', 'Item4'];

var icons = function icons(item) {
  if (item === 'Item1') {
    return /*#__PURE__*/_react["default"].createElement("div", null, "Icon1");
  } else if (item === 'Item2') {
    return /*#__PURE__*/_react["default"].createElement("div", null, "Icon2");
  } else if (item === 'Item3') {
    return /*#__PURE__*/_react["default"].createElement("div", null, "Icon3");
  } else if (item === 'Item4') {
    return /*#__PURE__*/_react["default"].createElement("div", null, "Icon4");
  }
};

var TestAdminNav = function TestAdminNav() {
  var _useState = (0, _react.useState)('Item1'),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      activeMenu = _useState2[0],
      setActiveMenu = _useState2[1];

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_AdminNav["default"], {
    isActive: true
  }, navItems.map(function (item, idx) {
    return /*#__PURE__*/_react["default"].createElement(_AdminNavItem["default"], {
      key: idx,
      isActive: activeMenu === item,
      onClick: function onClick() {
        return setActiveMenu(item);
      },
      className: "mouse-hand"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex flex--ai--center"
    }, /*#__PURE__*/_react["default"].createElement("div", null, icons(item)), /*#__PURE__*/_react["default"].createElement("div", null, item)));
  })));
};

var _default = TestAdminNav;
exports["default"] = _default;
//# sourceMappingURL=TestAdminNav.js.map