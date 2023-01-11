"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactEasySwipe = _interopRequireDefault(require("react-easy-swipe"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _defaultProps = _interopRequireDefault(require("../../constants/defaultProps"));

var _utils = require("./utils");

var _excluded = ["containerUID", "transitionDuration", "transition_timing_function", "isSwipable", "isVerticallyCenterAligned", "isDraggable", "cursorIsHandOnItem", "minXDifferenceToMove", "swipeTolerance", "rightSideActiveIndices", "setRightSideActiveIndices", "occupiedEachSidInPx", "occupiedEachSidInPercentage", "moveRight", "setMoveRight", "moveLeft", "setMoveLeft", "className", "children"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var defaultProps = _defaultProps["default"].defaultProps,
    defaultPropTypes = _defaultProps["default"].defaultPropTypes;

var ResponsiveSwipeableSlider = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var _containerRef$current2, _containerRef$current3, _Object$keys;

  var containerUID = _ref.containerUID,
      transitionDuration = _ref.transitionDuration,
      transition_timing_function = _ref.transition_timing_function,
      isSwipable = _ref.isSwipable,
      isVerticallyCenterAligned = _ref.isVerticallyCenterAligned,
      isDraggable = _ref.isDraggable,
      cursorIsHandOnItem = _ref.cursorIsHandOnItem,
      minXDifferenceToMove = _ref.minXDifferenceToMove,
      swipeTolerance = _ref.swipeTolerance,
      rightSideActiveIndices = _ref.rightSideActiveIndices,
      setRightSideActiveIndices = _ref.setRightSideActiveIndices,
      occupiedEachSidInPx = _ref.occupiedEachSidInPx,
      occupiedEachSidInPercentage = _ref.occupiedEachSidInPercentage,
      moveRight = _ref.moveRight,
      setMoveRight = _ref.setMoveRight,
      moveLeft = _ref.moveLeft,
      setMoveLeft = _ref.setMoveLeft,
      className = _ref.className,
      children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var containerRef = (0, _react.useRef)();
  var arrayOfChildrenRefs = (0, _react.useRef)(new Array());

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      totalWidth = _useState2[0],
      setTotalWidth = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      arrayOfChildren = _useState4[0],
      setArrayOfChildren = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      arrayOfWidths = _useState6[0],
      setArrayOfWidths = _useState6[1];

  var _useState7 = (0, _react.useState)(0),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      containerTranslateX = _useState8[0],
      setContainerTranslateX = _useState8[1];

  var _useState9 = (0, _react.useState)(0),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      xStart = _useState10[0],
      setXStart = _useState10[1];

  var _useState11 = (0, _react.useState)(-100000),
      _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
      xEnd = _useState12[0],
      setXEnd = _useState12[1];

  var _useState13 = (0, _react.useState)(false),
      _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
      showRight = _useState14[0],
      setShowRight = _useState14[1];

  var _useState15 = (0, _react.useState)(false),
      _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
      showLeft = _useState16[0],
      setShowLeft = _useState16[1];

  var _useState17 = (0, _react.useState)(false),
      _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
      hasNoTransition = _useState18[0],
      setHasNoTransition = _useState18[1];

  var _useState19 = (0, _react.useState)([]),
      _useState20 = (0, _slicedToArray2["default"])(_useState19, 2),
      activeIndices = _useState20[0],
      setActiveIndices = _useState20[1];

  var _useState21 = (0, _react.useState)([]),
      _useState22 = (0, _slicedToArray2["default"])(_useState21, 2),
      leftSideActiveIndices = _useState22[0],
      setLeftSideActiveIndices = _useState22[1];

  var _useState23 = (0, _react.useState)([]),
      _useState24 = (0, _slicedToArray2["default"])(_useState23, 2),
      occupiedEachSidInPxState = _useState24[0],
      setOccupiedEachSidInPxState = _useState24[1]; // Handle the drag


  (0, _react.useEffect)(function () {
    (0, _utils.handleDrag)(xStart, xEnd, minXDifferenceToMove, setShowLeft, setShowRight);
  }, [xEnd]); // Handle the transition effect

  (0, _react.useEffect)(function () {
    if (hasNoTransition) {
      setTimeout(function () {
        setHasNoTransition(false);
      }, [10]);
    }
  }, [hasNoTransition]);
  (0, _react.useEffect)(function () {
    var _containerRef$current;

    if (occupiedEachSidInPx && occupiedEachSidInPx > 0) {
      setOccupiedEachSidInPxState(occupiedEachSidInPx);
    } else if (occupiedEachSidInPercentage && containerRef !== null && containerRef !== void 0 && (_containerRef$current = containerRef.current) !== null && _containerRef$current !== void 0 && _containerRef$current.clientWidth) {
      setOccupiedEachSidInPxState(containerRef.current.clientWidth * occupiedEachSidInPercentage / 100);
    } else {
      setOccupiedEachSidInPxState(0);
    }
  }, [occupiedEachSidInPx, occupiedEachSidInPercentage, containerRef === null || containerRef === void 0 ? void 0 : containerRef.current]); // Get array of children

  (0, _react.useEffect)(function () {
    (0, _utils.getArrayOfChildern)(arrayOfChildrenRefs, setArrayOfChildren);
  }, [arrayOfChildrenRefs === null || arrayOfChildrenRefs === void 0 ? void 0 : arrayOfChildrenRefs.current, activeIndices]); // Determine left part from the right side

  (0, _react.useEffect)(function () {
    setLeftSideActiveIndices((0, _utils.leftSideSubstituteElementsInList)(rightSideActiveIndices));
  }, [rightSideActiveIndices]);
  (0, _react.useEffect)(function () {
    (0, _utils.calculateArrayOfWidths)(arrayOfChildren, setTotalWidth, setArrayOfWidths);
  }, [arrayOfChildren, activeIndices]);
  (0, _react.useEffect)(function () {
    if (showRight && containerRef !== null && containerRef !== void 0 && containerRef.current) {
      (0, _utils.showRightHandler)(rightSideActiveIndices, setRightSideActiveIndices, setShowRight, arrayOfWidths, containerRef, setContainerTranslateX, transitionDuration, containerTranslateX, occupiedEachSidInPxState);
    }
  }, [showRight, containerRef === null || containerRef === void 0 ? void 0 : (_containerRef$current2 = containerRef.current) === null || _containerRef$current2 === void 0 ? void 0 : _containerRef$current2.clientWidth, arrayOfWidths]);
  (0, _react.useEffect)(function () {
    if (showLeft && containerRef !== null && containerRef !== void 0 && containerRef.current) {
      (0, _utils.showLeftHandler)(leftSideActiveIndices, setRightSideActiveIndices, setShowLeft, arrayOfWidths, containerRef, setContainerTranslateX, transitionDuration, containerTranslateX, occupiedEachSidInPxState);
    }
  }, [showLeft, containerRef === null || containerRef === void 0 ? void 0 : (_containerRef$current3 = containerRef.current) === null || _containerRef$current3 === void 0 ? void 0 : _containerRef$current3.clientWidth, arrayOfWidths]);
  (0, _react.useEffect)(function () {
    var localActiveIndices = (0, _utils.buildActiveIndices)(leftSideActiveIndices, rightSideActiveIndices);
    setActiveIndices(_objectSpread({}, localActiveIndices));
  }, [leftSideActiveIndices, rightSideActiveIndices]);
  (0, _react.useEffect)(function () {
    (0, _utils.handleSubstitution)(activeIndices, setHasNoTransition, setContainerTranslateX, totalWidth, arrayOfWidths, occupiedEachSidInPxState);
  }, [activeIndices, totalWidth, arrayOfWidths]);
  (0, _react.useEffect)(function () {
    if (moveRight) {
      setShowRight(true);
      setTimeout(function () {
        setMoveRight(false);
      }, 10);
    }
  }, [moveRight]);
  (0, _react.useEffect)(function () {
    if (moveLeft) {
      setShowLeft(true);
      setTimeout(function () {
        setMoveLeft(false);
      }, 10);
    }
  }, [moveLeft]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _classnames["default"])('w-per-100', className)
  }, props, {
    ref: ref
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-per-100 of-x-hidden flex",
    ref: function ref(el) {
      return containerRef.current = el;
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('flex', "".concat(containerUID), hasNoTransition && 'noTransition')
  }, (_Object$keys = Object.keys(activeIndices)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.map(function (item, idx) {
    if (isSwipable) {
      return /*#__PURE__*/_react["default"].createElement(_reactEasySwipe["default"], {
        key: idx,
        className: (0, _classnames["default"])('w-per-100', cursorIsHandOnItem && 'mouse-hand', isVerticallyCenterAligned && 'flex--ai--center'),
        draggable: isDraggable,
        onDragStart: function onDragStart(e) {
          return (0, _utils.handleDragStart)(e, setXStart);
        },
        onDragEnd: function onDragEnd(e) {
          return (0, _utils.handleDragEnd)(e, setXEnd);
        },
        onSwipeRight: function onSwipeRight() {
          return setShowLeft(true);
        },
        onSwipeLeft: function onSwipeLeft() {
          return setShowRight(true);
        },
        tolerance: swipeTolerance
      }, /*#__PURE__*/_react["default"].createElement("div", {
        ref: function ref(el) {
          return arrayOfChildrenRefs.current[item] = el;
        }
      }, children[[activeIndices[item]]]));
    } else {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: idx,
        className: (0, _classnames["default"])('flex flex--jc--center flex--ai--center w-per-100', cursorIsHandOnItem && 'mouse-hand'),
        draggable: isDraggable,
        onDragStart: _utils.handleDragStart,
        onDragEnd: _utils.handleDragEnd
      }, item);
    }
  })))), /*#__PURE__*/_react["default"].createElement("style", null, "\n          .".concat(containerUID, " {\n            -webkit-transition: all ").concat(transition_timing_function, " ").concat(transitionDuration, "s;\n            -moz-transition: all ").concat(transition_timing_function, " ").concat(transitionDuration, "s;\n            -o-transition: all ").concat(transition_timing_function, " ").concat(transitionDuration, "s;\n            transition: all ").concat(transitionDuration, "s linear;\n            transform: translateX(").concat(containerTranslateX, "px);\n          }\n        ")));
});

ResponsiveSwipeableSlider.propTypes = _objectSpread(_objectSpread({}, defaultPropTypes), {}, {
  transitionDuration: _propTypes["default"].number,
  transition_timing_function: _propTypes["default"].oneOf(['ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out', 'inherit']),
  containerUID: _propTypes["default"].string,
  isSwipable: _propTypes["default"].bool,
  isVerticallyCenterAligned: _propTypes["default"].bool,
  isDraggable: _propTypes["default"].bool,
  cursorIsHandOnItem: _propTypes["default"].bool,
  minXDifferenceToMove: _propTypes["default"].number,
  swipeTolerance: _propTypes["default"].number,
  rightSideActiveIndices: _propTypes["default"].array,
  setRightSideActiveIndices: _propTypes["default"].func,
  occupiedEachSidInPx: _propTypes["default"].number,
  occupiedEachSidInPercentage: _propTypes["default"].number,
  moveLeft: _propTypes["default"].bool,
  moveRight: _propTypes["default"].bool,
  setMoveLeft: _propTypes["default"].func,
  setMoveRight: _propTypes["default"].func
});
ResponsiveSwipeableSlider.defaultProps = _objectSpread(_objectSpread({}, defaultProps), {}, {
  transitionDuration: 0.3,
  transition_timing_function: 'linear',
  containerUID: 'test',
  isSwipable: true,
  isVerticallyCenterAligned: false,
  isDraggable: true,
  cursorIsHandOnItem: false,
  minXDifferenceToMove: 5,
  swipeTolerance: 1,
  occupiedEachSidInPx: 0,
  occupiedEachSidInPercentage: 0,
  moveRight: false,
  moveLeft: false
});
var _default = ResponsiveSwipeableSlider;
exports["default"] = _default;
//# sourceMappingURL=ResponsiveSwipeableSlider.js.map