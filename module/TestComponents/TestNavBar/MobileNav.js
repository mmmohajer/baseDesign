"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _MobNav = _interopRequireDefault(require("../../Components/MobNav"));

var _MobNavItem = _interopRequireDefault(require("../../Components/MobNav/subs/MobNavItem"));

var _MobSubNavContainer = _interopRequireDefault(require("../../Components/MobNav/subs/MobSubNavContainer"));

var _MobSubNavItem = _interopRequireDefault(require("../../Components/MobNav/subs/MobSubNavItem"));

var _Icon = _interopRequireDefault(require("../../Components/Icon"));

var _TestNavBarModule = _interopRequireDefault(require("./TestNavBar.module.scss"));

var MobileNav = function MobileNav(_ref) {
  var activeMenu = _ref.activeMenu,
      setActiveMenu = _ref.setActiveMenu,
      activeSubMenues = _ref.activeSubMenues,
      mobMenuClickHandler = _ref.mobMenuClickHandler,
      MENUES = _ref.MENUES,
      SUB_MENUES = _ref.SUB_MENUES,
      mobMenuIsActive = _ref.mobMenuIsActive,
      setMobMenuIsActive = _ref.setMobMenuIsActive,
      setIconToggler = _ref.setIconToggler;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_MobNav["default"], {
    isActive: mobMenuIsActive,
    className: (0, _classnames["default"])('flex--gr--1 width-per-100 bgInverse pl2 pr2 pt1 pb1 br-bottom-solid-1 br-color-inverse of-y-auto')
  }, MENUES.map(function (menu, idx1) {
    return /*#__PURE__*/_react["default"].createElement(_MobNavItem["default"], {
      className: (0, _classnames["default"])('my1 py1 textWhite br-rad-px-10 br-color-primary width-per-100'),
      onClick: function onClick() {
        return mobMenuClickHandler(menu);
      },
      isActive: activeMenu === menu,
      key: idx1
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "mouse-hand"
    }, menu), menu in SUB_MENUES && /*#__PURE__*/_react["default"].createElement(_MobSubNavContainer["default"], {
      className: (0, _classnames["default"])('bgInverse p1 br-rad-px-10 w-per-80'),
      onClick: function onClick() {
        return setActiveMenu(menu);
      },
      isActive: activeSubMenues.includes(menu)
    }, SUB_MENUES[menu].map(function (subMenu, idx2) {
      return /*#__PURE__*/_react["default"].createElement(_MobSubNavItem["default"], {
        className: (0, _classnames["default"])('br-rad-px-10 textWhite p1 width-per-100 flex flex--jc--center flex--ai--center mouse-hand'),
        key: idx2,
        onClick: function onClick() {
          setMobMenuIsActive(false);
          setIconToggler(true);
        }
      }, subMenu);
    })));
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('w-per-70 ml-auto mr-auto my2 height-px-10 br-rad-px-10', _TestNavBarModule["default"].separator)
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex--jc--center flex--ai--center pos-rel"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    className: (0, _classnames["default"])('br-rad-px-10 fs-px-18 pl3 pr1')
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('pos-abs pos-abs--lt', _TestNavBarModule["default"].mob_search)
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    type: "search",
    scale: 0.8,
    fill: "gray",
    stroke: "gray",
    className: "mouse-hand"
  }))), /*#__PURE__*/_react["default"].createElement("button", {
    className: (0, _classnames["default"])('bgPrimary my2 fs-px-16 br-hidden-1 br-color-primary mouse-hand br-rad-px-10 height-px-40 flex flex--ai--center flex--jc--center px2', _TestNavBarModule["default"].logRegBtn)
  }, "Login/Register")));
};

var _default = MobileNav;
exports["default"] = _default;
//# sourceMappingURL=MobileNav.js.map