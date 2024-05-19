"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _DesktopNav = _interopRequireDefault(require("./DesktopNav"));

var _MobileNav = _interopRequireDefault(require("./MobileNav"));

var _HamburgerIcon = _interopRequireDefault(require("../../Components/HamburgerIcon"));

require("./TestNavBar.scss");

var _TestNavBarModule = _interopRequireDefault(require("./TestNavBar.module.scss"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var MENUES = ['Home', 'About Us', 'Services', 'Contact Us'];
var SUB_MENUES = {
  'About Us': ['Team', 'Support', 'Careers'],
  Services: ['Software Development', 'App Development', 'MVP Development', 'Web Design']
};
var HamIconCssConfig = {
  hamburgerMenuContainerBgColor: 'transparent',
  hamburgerMenuContainerBorder: 'none',
  hamburgerMenuContainerBorderRadius: 10,
  hamburgerMenuTopWidth: 15,
  hamburgerMenuMiddleWidth: 25,
  hamburgerMenuBottomWidth: 35,
  hamburgerMenuHeight: 4,
  hamburgerMenuBgColor: 'white',
  hamburgerMenuSpace: 10,
  hamburgerMenuBorderRadius: 5,
  hamburgerMenuClosedIconWidth: 25,
  hamburgerMenuTransitionDuration: 0.3,
  hamburgerMenuContainerXPadding: 0,
  hamburgerMenuTransform: 'scale(-1, 1)'
};

var TestNavBar = function TestNavBar() {
  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      activeSubMenues = _useState2[0],
      setActiveSubMenues = _useState2[1];

  var _useState3 = (0, _react.useState)('Home'),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      activeMenu = _useState4[0],
      setActiveMenu = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      mobMenuIsActive = _useState6[0],
      setMobMenuIsActive = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      iconToggler = _useState8[0],
      setIconToggler = _useState8[1];

  var addActiveSubMenu = function addActiveSubMenu(menu) {
    setActiveSubMenues([menu]);
  };

  var removeActiveSubMenu = function removeActiveSubMenu(menu) {
    var localActiveSubMenues = (0, _toConsumableArray2["default"])(activeSubMenues);
    localActiveSubMenues = localActiveSubMenues.filter(function (m) {
      return m !== menu;
    });
    setActiveSubMenues(localActiveSubMenues);
  };

  var menuClickHandler = function menuClickHandler(menu) {
    setActiveSubMenues([]);

    if (Object.keys(SUB_MENUES).includes(menu)) {
      if (activeSubMenues.includes(menu)) {
        removeActiveSubMenu(menu);
      } else {
        addActiveSubMenu(menu);
      }
    } else {
      setActiveMenu(menu);
      setActiveSubMenues([]);
    }
  };

  var mobMenuClickHandler = function mobMenuClickHandler(menu) {
    menuClickHandler(menu);

    if (!Object.keys(SUB_MENUES).includes(menu)) {
      setIconToggler(true);
      setMobMenuIsActive(false);
    }
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "show-flex-in-lg"
  }, /*#__PURE__*/_react["default"].createElement(_DesktopNav["default"], {
    activeMenu: activeMenu,
    setActiveMenu: setActiveMenu,
    activeSubMenues: activeSubMenues,
    menuClickHandler: menuClickHandler,
    MENUES: MENUES,
    SUB_MENUES: SUB_MENUES
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('show-flex-in-md-sm-xsm', 'width-per-100 flex flex--jc--between flex--ai--center pl2 pr2 height-px-60 br-bottom-solid-1 br-color-inverse bgInverse pos-rel')
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-px-200 height-px-50 bgSilver flex flex--jc--center flex--ai--center"
  }, "Logo 200x50"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "z-100000"
  }, /*#__PURE__*/_react["default"].createElement(_HamburgerIcon["default"], {
    cssConfig: HamIconCssConfig,
    onClick: function onClick() {
      return setMobMenuIsActive(!mobMenuIsActive);
    },
    iconToggler: iconToggler,
    setIconToggler: setIconToggler,
    containerUID: "testHamburger"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('height-vh-full w-per-80 pos-fix pos-fix--rt flex flex--dir--col z-10000 iswad_mobNav', mobMenuIsActive && 'iswad_mobNav_active')
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "height-px-60"
  }), /*#__PURE__*/_react["default"].createElement(_MobileNav["default"], {
    activeMenu: activeMenu,
    setActiveMenu: setActiveMenu,
    activeSubMenues: activeSubMenues,
    mobMenuClickHandler: mobMenuClickHandler,
    MENUES: MENUES,
    SUB_MENUES: SUB_MENUES,
    mobMenuIsActive: mobMenuIsActive,
    setMobMenuIsActive: setMobMenuIsActive,
    iconToggler: iconToggler,
    setIconToggler: setIconToggler
  }))));
};

var _default = TestNavBar;
exports["default"] = _default;
//# sourceMappingURL=TestNavBar.js.map