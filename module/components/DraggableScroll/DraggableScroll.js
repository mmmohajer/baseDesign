"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _reactDraggable = _interopRequireDefault(require("react-draggable"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _defaultProps = _interopRequireDefault(require("../../constants/defaultProps"));

var _excluded = ["containerClassName", "scrollContainerClassName", "scrollClassName", "scrollableElementId", "scrollableContentId", "scrollAxis", "children", "disabled"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var defaultProps = _defaultProps["default"].defaultProps,
    defaultPropTypes = _defaultProps["default"].defaultPropTypes;

var Scroll = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var containerClassName = _ref.containerClassName,
      scrollContainerClassName = _ref.scrollContainerClassName,
      scrollClassName = _ref.scrollClassName,
      scrollableElementId = _ref.scrollableElementId,
      scrollableContentId = _ref.scrollableContentId,
      scrollAxis = _ref.scrollAxis,
      children = _ref.children,
      disabled = _ref.disabled,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

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
      leftOnDragStart = _useState6[0],
      setLeftOnDragStart = _useState6[1];

  var _useState7 = (0, _react.useState)(0),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      topOnDragStart = _useState8[0],
      setTopOnDragStart = _useState8[1];

  var _useState9 = (0, _react.useState)(0),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      scrollPercentage = _useState10[0],
      setScrollPercentage = _useState10[1];

  var _useState11 = (0, _react.useState)({}),
      _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
      scrollStyle = _useState12[0],
      setScrollStyle = _useState12[1];

  var _useState13 = (0, _react.useState)({
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  }),
      _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
      bounds = _useState14[0],
      setBounds = _useState14[1];

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
  (0, _react.useEffect)(function () {
    if (parentRef && scrollStyle) {
      var remainingToTheEnd = (parentRef === null || parentRef === void 0 ? void 0 : parentRef.clientWidth) - (parentRef === null || parentRef === void 0 ? void 0 : parentRef.clientWidth) * scrollPercentage / 100;

      if (scrollAxis === 'x') {
        setBounds({
          left: 0,
          top: 0,
          right: remainingToTheEnd,
          bottom: 0
        });
      }

      if (scrollAxis === 'y') {
        setBounds({
          left: 0,
          top: 0,
          right: 0,
          bottom: remainingToTheEnd
        });
      }
    }
  }, [parentRef, scrollStyle]);

  var handleDragging = function handleDragging(e) {
    if (scrollAxis === 'x') {
      var curScrollLeft = parentRef === null || parentRef === void 0 ? void 0 : parentRef.scrollLeft;
      parentRef.scroll(curScrollLeft + (e === null || e === void 0 ? void 0 : e.clientX) - leftOnDragStart, 0);
    }

    if (scrollAxis === 'y') {
      var curScrollTop = parentRef === null || parentRef === void 0 ? void 0 : parentRef.scrollTop;
      parentRef.scroll(0, curScrollTop + (e === null || e === void 0 ? void 0 : e.clientY) - topOnDragStart);
    }
  };

  var handleDragStart = function handleDragStart(e) {
    setLeftOnDragStart(e === null || e === void 0 ? void 0 : e.clientX);
    setTopOnDragStart(e === null || e === void 0 ? void 0 : e.clientY);
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])(containerClassName)
  }, children, /*#__PURE__*/_react["default"].createElement("div", {
    className: scrollContainerClassName
  }, /*#__PURE__*/_react["default"].createElement(_reactDraggable["default"], {
    axis: scrollAxis,
    disabled: disabled,
    bounds: bounds,
    defaultPosition: {
      x: 0,
      y: 0
    },
    position: null,
    grid: [1, 1],
    scale: 1,
    onDrag: handleDragging,
    onStart: handleDragStart
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: scrollStyle,
    className: (0, _classnames["default"])(scrollClassName)
  })))));
}); // Row.propTypes = {
//   ...defaultPropTypes,
//   showIn: PropTypes.array
// };
// Row.defaultProps = {
//   ...defaultProps,
//   showIn: ['xs', 'sm', 'md', 'lg']
// };


var _default = Scroll;
exports["default"] = _default;
//# sourceMappingURL=DraggableScroll.js.map