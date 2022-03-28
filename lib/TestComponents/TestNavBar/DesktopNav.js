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

var _TestNavBarModule = _interopRequireDefault(require("./TestNavBar.module.scss"));

var _Icon = _interopRequireDefault(require("../../Components/Icon"));

var _NavBar = _interopRequireDefault(require("../../Components/NavBar"));

var _NavItem = _interopRequireDefault(require("../../Components/NavBar/subs/NavItem"));

var _SubNavContainer = _interopRequireDefault(require("../../Components/NavBar/subs/SubNavContainer"));

var _SubNavItem = _interopRequireDefault(require("../../Components/NavBar/subs/SubNavItem"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DesktopNav = function DesktopNav(_ref) {
  var activeMenu = _ref.activeMenu,
      setActiveMenu = _ref.setActiveMenu,
      activeSubMenues = _ref.activeSubMenues,
      menuClickHandler = _ref.menuClickHandler,
      MENUES = _ref.MENUES,
      SUB_MENUES = _ref.SUB_MENUES;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      activeSearch = _useState2[0],
      setActiveSearch = _useState2[1];

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_NavBar["default"], {
    className: (0, _classnames["default"])("w-per-100 flex flex--jc--between flex--ai--center pl2 pr2 pt1 pb1 br-bottom-solid-1 br-color-inverse bgInverse")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex--jc--start flex--ai--center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-px-200 height-px-50 bgSilver flex flex--jc--center flex--ai--center"
  }, "Logo 200x50"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex"
  }, MENUES.map(function (menu, idx1) {
    return /*#__PURE__*/_react["default"].createElement(_NavItem["default"], {
      className: (0, _classnames["default"])("mx1 px1 flex flex--ai--center textWhite br-rad-px-10 height-px-40 br-color-primary"),
      onClick: function onClick() {
        return menuClickHandler(menu);
      },
      isActive: activeMenu === menu,
      key: idx1
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "mouse-hand"
    }, menu), menu in SUB_MENUES && /*#__PURE__*/_react["default"].createElement(_SubNavContainer["default"], {
      className: (0, _classnames["default"])("bgInverse w-px-200 flex flex--jc--center flex--dir--col flex--ai--center br-rad-px-10"),
      onClick: function onClick() {
        return setActiveMenu(menu);
      },
      isActive: activeSubMenues.includes(menu)
    }, SUB_MENUES[menu].map(function (subMenu, idx2) {
      return /*#__PURE__*/_react["default"].createElement(_SubNavItem["default"], {
        className: (0, _classnames["default"])("br-rad-px-10 textWhite p1 w-per-100 flex flex--jc--center flex--ai--center mouse-hand"),
        key: idx2
      }, subMenu);
    })));
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex--jc--center flex--ai--center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])("mr2 min-height-px-30 min-w-px-30 br-rad-px-50 bgWhite flex flex--jc--center flex--ai--center", _TestNavBarModule["default"].search)
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    onClick: function onClick() {
      return setActiveSearch(!activeSearch);
    },
    type: "search",
    scale: 0.8,
    fill: "gray",
    stroke: "gray",
    className: "mouse-hand"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "search",
    className: (0, _classnames["default"])("br-rad-px-10 fs-px-18", _TestNavBarModule["default"].searchInput, activeSearch && "pl1 pr1", activeSearch && _TestNavBarModule["default"].searchInput_active)
  })), /*#__PURE__*/_react["default"].createElement("button", {
    className: (0, _classnames["default"])("show-flex-in-md-lg bgPrimary fs-px-16 br-hidden-1 br-color-primary btn-small mouse-hand br-rad-px-10 height-px-40 flex flex--ai--center flex--jc--center px2", _TestNavBarModule["default"].logRegBtn)
  }, "Login/Register"))));
};

var _default = DesktopNav;
exports["default"] = _default;
//# sourceMappingURL=DesktopNav.js.map