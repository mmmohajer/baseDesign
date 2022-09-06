"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _defaultProps = _interopRequireDefault(require("../../constants/defaultProps"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var defaultProps = _defaultProps["default"].defaultProps,
    defaultPropTypes = _defaultProps["default"].defaultPropTypes;

var Scroll = function Scroll(_ref) {
  var scrollableElementId = _ref.scrollableElementId,
      scrollableContentId = _ref.scrollableContentId,
      scrollAxis = _ref.scrollAxis,
      containerClassName = _ref.containerClassName,
      scrollContainerClassName = _ref.scrollContainerClassName,
      scrollClassName = _ref.scrollClassName,
      transition = _ref.transition,
      children = _ref.children;
  var scrollRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      parentRef = _useState2[0],
      setParentRef = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      contentRef = _useState4[0],
      setContentRef = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      scrollPercentage = _useState6[0],
      setScrollPercentage = _useState6[1];

  var _useState7 = (0, _react.useState)({}),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      scrollStyle = _useState8[0],
      setScrollStyle = _useState8[1];

  (0, _react.useEffect)(function () {
    var localParentDom = document.getElementById(scrollableElementId);
    var localContentDom = document.getElementById(scrollableContentId);

    if (localParentDom) {
      setParentRef(localParentDom);
    }

    if (localContentDom) {
      setContentRef(localContentDom);
    }
  }, []);
  (0, _react.useEffect)(function () {
    if (parentRef && scrollPercentage) {
      parentRef === null || parentRef === void 0 ? void 0 : parentRef.addEventListener('scroll', function (e) {
        if (scrollAxis === 'x') {
          var curScrollLeft = parentRef === null || parentRef === void 0 ? void 0 : parentRef.scrollLeft;
          var calculatedTranslateX = scrollPercentage * curScrollLeft / 100;
          scrollRef.current.style.transform = "translateX(".concat(calculatedTranslateX, "px)");
        }

        if (scrollAxis === 'y') {
          var curScrollTop = parentRef === null || parentRef === void 0 ? void 0 : parentRef.scrollTop;
          var calculatedTranslateY = scrollPercentage * curScrollTop / 100;
          scrollRef.current.style.transform = "translateY(".concat(calculatedTranslateY, "px)");
        }
      });
    }
  }, [parentRef, scrollPercentage]);
  (0, _react.useEffect)(function () {
    if (parentRef && contentRef) {
      if (scrollAxis === 'x') {
        setScrollPercentage(parentRef.clientWidth / contentRef.clientWidth * 100);
      }

      if (scrollAxis === 'y') {
        setScrollPercentage(parentRef.clientHeight / contentRef.clientHeight * 100);
      }
    }
  }, [parentRef, contentRef]);
  (0, _react.useEffect)(function () {
    if (scrollPercentage) {
      if (scrollAxis === 'x') {
        setScrollStyle({
          width: "".concat(scrollPercentage, "%")
        });
      }

      if (scrollAxis === 'y') {
        setScrollStyle({
          height: "".concat(scrollPercentage, "%")
        });
      }
    }
  }, [scrollPercentage]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])(containerClassName)
  }, children, scrollPercentage < 100 && /*#__PURE__*/_react["default"].createElement("div", {
    className: scrollContainerClassName
  }, /*#__PURE__*/_react["default"].createElement("div", {
    ref: function ref(el) {
      return scrollRef.current = el;
    },
    style: _objectSpread({
      transition: transition
    }, scrollStyle),
    className: (0, _classnames["default"])(scrollClassName)
  }))));
};

Scroll.propTypes = _objectSpread(_objectSpread({}, defaultPropTypes), {}, {
  scrollableElementId: _propTypes["default"].string,
  scrollableContentId: _propTypes["default"].string,
  scrollAxis: _propTypes["default"].oneOf(['x', 'y']),
  containerClassName: _propTypes["default"].string,
  scrollContainerClassName: _propTypes["default"].string,
  scrollClassName: _propTypes["default"].string,
  transition: _propTypes["default"].string
});
Scroll.defaultProps = _objectSpread(_objectSpread({}, defaultProps), {}, {
  transition: 'all linear .1s',
  scrollAxis: 'x'
});
var _default = Scroll;
exports["default"] = _default;
//# sourceMappingURL=Scroll.js.map