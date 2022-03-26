"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cssDefaultConfig = exports.cssConfigShape = exports.cssClassMaps = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../../utils/utils");

var _vars = require("../../constants/vars");

var cssClassMaps = {
  hamburgerMenuContainer: "hamburgerMenuContainer-".concat((0, _utils.randomStr)(_vars.CSS_CLASS_RANDOM_LENGTH)),
  hamburgerMenuIcon: "hamburgerMenuIcon-".concat((0, _utils.randomStr)(_vars.CSS_CLASS_RANDOM_LENGTH)),
  hamburgerMenuClosedIcon: "hamburgerMenuClosedIcon-".concat((0, _utils.randomStr)(_vars.CSS_CLASS_RANDOM_LENGTH))
};
exports.cssClassMaps = cssClassMaps;
var cssConfigShape = {
  hamburgerMenuContainerWidth: _propTypes["default"].number,
  hamburgerMenuContainerHeight: _propTypes["default"].number,
  hamburgerMenuContainerBgColor: _propTypes["default"].string,
  hamburgerMenuContainerBorder: _propTypes["default"].string,
  hamburgerMenuContainerBorderRadius: _propTypes["default"].number,
  hamburgerMenuContainerPadding: _propTypes["default"].number,
  hamburgerMenuTopWidth: _propTypes["default"].number,
  hamburgerMenuMiddleWidth: _propTypes["default"].number,
  hamburgerMenuBottomWidth: _propTypes["default"].number,
  hamburgerMenuHeight: _propTypes["default"].number,
  hamburgerMenuBgColor: _propTypes["default"].string,
  hamburgerMenuSpace: _propTypes["default"].number,
  hamburgerMenuBorderRadius: _propTypes["default"].number,
  hamburgerMenuClosedIconWidth: _propTypes["default"].number,
  hamburgerMenuTransitionDuration: _propTypes["default"].number,
  hamburgerMenuContainerXPadding: _propTypes["default"].number,
  hamburgerMenuTransform: _propTypes["default"].oneOf(["scale(-1, 1)", "scale(1, 1)", "scale(1, -1)", "scale(-1, -1)"])
};
exports.cssConfigShape = cssConfigShape;
var cssDefaultConfig = {
  hamburgerMenuContainerBgColor: "transparent",
  hamburgerMenuContainerBorder: "none",
  hamburgerMenuContainerBorderRadius: 10,
  hamburgerMenuTopWidth: 15,
  hamburgerMenuMiddleWidth: 25,
  hamburgerMenuBottomWidth: 35,
  hamburgerMenuHeight: 4,
  hamburgerMenuBgColor: "black",
  hamburgerMenuSpace: 10,
  hamburgerMenuBorderRadius: 5,
  hamburgerMenuClosedIconWidth: 25,
  hamburgerMenuTransitionDuration: 0.3,
  hamburgerMenuContainerXPadding: 10,
  hamburgerMenuTransform: "scale(-1, 1)"
};
exports.cssDefaultConfig = cssDefaultConfig;
//# sourceMappingURL=utils.js.map