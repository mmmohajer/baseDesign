"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _excluded = ["children", "className", "activeClassName", "isActive"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SubNavContainer = function SubNavContainer(_ref) {
  var children = _ref.children,
      className = _ref.className,
      activeClassName = _ref.activeClassName,
      isActive = _ref.isActive,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var SubNavContainerElement = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    if (isActive) {
      SubNavContainerElement.current.classList.add('iswad_subNavContainer_active');
      SubNavContainerElement.current.classList.add(activeClassName);
    } else {
      SubNavContainerElement.current.classList.remove('iswad_subNavContainer_active');
      SubNavContainerElement.current.classList.remove(activeClassName);
    }
  }, [isActive]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    ref: function ref(el) {
      return SubNavContainerElement.current = el;
    }
  }, props, {
    className: (0, _classnames["default"])('pos-abs pos-abs--lb z-10 iswad_subNavContainer', className)
  }), children));
};

var _default = SubNavContainer;
exports["default"] = _default;
//# sourceMappingURL=SubNavContainer.js.map