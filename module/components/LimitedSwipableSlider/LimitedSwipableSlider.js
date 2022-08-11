"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _reactEasySwipe = _interopRequireDefault(require("react-easy-swipe"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _defaultProps = _interopRequireDefault(require("../../constants/defaultProps"));

var _excluded = ["children", "moveRight", "setMoveRight", "moveLeft", "setMoveLeft", "moveToItemWithNum", "setMoveToItemWithNum", "minXDifferenceToMove", "notScrollableOnSwipableElement", "transitionDuration", "transition_timing_function", "cursorIsHandOnItem", "className", "sliderContainerWidthMultiplier", "isDraggable", "isSwipable", "showRightOfLastItem"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var defaultProps = _defaultProps["default"].defaultProps,
    defaultPropTypes = _defaultProps["default"].defaultPropTypes;

var LimitedSwipableSlider = function LimitedSwipableSlider(_ref) {
  var children = _ref.children,
      moveRight = _ref.moveRight,
      setMoveRight = _ref.setMoveRight,
      moveLeft = _ref.moveLeft,
      setMoveLeft = _ref.setMoveLeft,
      moveToItemWithNum = _ref.moveToItemWithNum,
      setMoveToItemWithNum = _ref.setMoveToItemWithNum,
      minXDifferenceToMove = _ref.minXDifferenceToMove,
      notScrollableOnSwipableElement = _ref.notScrollableOnSwipableElement,
      transitionDuration = _ref.transitionDuration,
      transition_timing_function = _ref.transition_timing_function,
      cursorIsHandOnItem = _ref.cursorIsHandOnItem,
      className = _ref.className,
      sliderContainerWidthMultiplier = _ref.sliderContainerWidthMultiplier,
      isDraggable = _ref.isDraggable,
      isSwipable = _ref.isSwipable,
      showRightOfLastItem = _ref.showRightOfLastItem,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var sliderContainer = (0, _react.useRef)();

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      activeIdx = _useState2[0],
      setActiveIdx = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      xStart = _useState4[0],
      setXStart = _useState4[1];

  var _useState5 = (0, _react.useState)(-100000),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      xEnd = _useState6[0],
      setXEnd = _useState6[1];

  var _useState7 = (0, _react.useState)(1),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      mainWidthMultiplier = _useState8[0],
      setMainWidthMultiplier = _useState8[1];

  var _useState9 = (0, _react.useState)(0),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      translateXVal = _useState10[0],
      setTranslateXVal = _useState10[1];

  var lengthOfEachItem = sliderContainerWidthMultiplier / children.length * 100;
  var sidesLength = (100 - lengthOfEachItem) / 2;
  var initialTranslateX = -((lengthOfEachItem - sidesLength) / sliderContainerWidthMultiplier);

  var getActiveIdx = function getActiveIdx(dir, idx) {
    if (dir === 'right') {
      if (idx + 1 <= children.length - 1) {
        return idx + 1;
      } else {
        return children.length - 1;
      }
    }

    if (dir === 'left') {
      if (idx - 1 >= 0) {
        return idx - 1;
      } else {
        return 0;
      }
    }
  };

  var handleDragStart = function handleDragStart(e) {
    setXStart(e.clientX);
  };

  var handleDragEnd = function handleDragEnd(e) {
    setXEnd(e.clientX);
  };

  var handleSwipeMove = function handleSwipeMove(position, e) {
    if (position.x >= minXDifferenceToMove) {
      goLeft();
    }

    if (position.x <= -minXDifferenceToMove) {
      goRight();
    }

    return notScrollableOnSwipableElement;
  };

  var goRight = (0, _react.useCallback)(function () {
    setActiveIdx(getActiveIdx('right', activeIdx));
  }, [activeIdx]);
  var goLeft = (0, _react.useCallback)(function () {
    setActiveIdx(getActiveIdx('left', activeIdx));
  }, [activeIdx]);

  var goToItemWithNum = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(num) {
      var cur_num;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cur_num = num - 1;

              if (cur_num > children.length - 1) {
                cur_num = children.length - 1;
              }

              if (cur_num < 0) {
                cur_num = 0;
              }

              setActiveIdx(cur_num);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function goToItemWithNum(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (activeIdx === 0) {
      setTranslateXVal(0);
    } else if (activeIdx === 1) {
      setTranslateXVal(initialTranslateX);
    } else if (activeIdx > 1 && activeIdx < children.length - 1) {
      setTranslateXVal(initialTranslateX - lengthOfEachItem / sliderContainerWidthMultiplier * (activeIdx - 1));
    } else {
      if (showRightOfLastItem) {
        setTranslateXVal(-(activeIdx / children.length) * 100);
      } else {
        setTranslateXVal(-100 + 100 / mainWidthMultiplier);
      }
    }
  }, [activeIdx]);
  (0, _react.useEffect)(function () {
    if (moveRight) {
      goRight();
      setMoveRight(false);
    }
  }, [moveRight]);
  (0, _react.useEffect)(function () {
    if (moveLeft) {
      goLeft();
      setMoveLeft(false);
    }
  }, [moveLeft]);
  (0, _react.useEffect)(function () {
    if (moveToItemWithNum) {
      goToItemWithNum(moveToItemWithNum);
    }

    setMoveToItemWithNum(false);
  }, [moveToItemWithNum]);
  (0, _react.useEffect)(function () {
    if (xEnd > -100000) {
      if (xEnd - xStart >= minXDifferenceToMove) {
        goLeft();
      }

      if (xEnd - xStart <= -minXDifferenceToMove) {
        goRight();
      }
    }
  }, [xEnd]);
  (0, _react.useEffect)(function () {
    if (children && !sliderContainerWidthMultiplier) {
      setMainWidthMultiplier("".concat(children.length));
    }

    if (children && sliderContainerWidthMultiplier) {
      setMainWidthMultiplier("".concat(sliderContainerWidthMultiplier));
    }
  }, [children, sliderContainerWidthMultiplier]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _classnames["default"])('w-per-100 of-x-hidden', className)
  }, props), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('flex', 'ISWAD-Limited-Swipable-sliderContainer ISWAD-Limited-Swipable-move'),
    ref: function ref(el) {
      return sliderContainer.current = el;
    }
  }, children === null || children === void 0 ? void 0 : children.map(function (item, idx) {
    if (isSwipable) {
      return /*#__PURE__*/_react["default"].createElement(_reactEasySwipe["default"], {
        key: idx,
        className: (0, _classnames["default"])('flex flex--jc--center flex--ai--center w-per-100', cursorIsHandOnItem && 'mouse-hand'),
        draggable: isDraggable,
        onDragStart: handleDragStart,
        onDragEnd: handleDragEnd,
        onSwipeMove: handleSwipeMove
      }, item);
    } else {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: idx,
        className: (0, _classnames["default"])('flex flex--jc--center flex--ai--center w-per-100', cursorIsHandOnItem && 'mouse-hand'),
        draggable: isDraggable,
        onDragStart: handleDragStart,
        onDragEnd: handleDragEnd
      }, item);
    }
  }))), /*#__PURE__*/_react["default"].createElement("style", null, "\n          .".concat('ISWAD-Limited-Swipable-sliderContainer', " {\n            width: ", mainWidthMultiplier * 100, "%;\n            -webkit-transition: all ").concat(transition_timing_function, " ").concat(transitionDuration, "s;\n            -moz-transition: all ").concat(transition_timing_function, " ").concat(transitionDuration, "s;\n            -o-transition: all ").concat(transition_timing_function, " ").concat(transitionDuration, "s;\n            transition: all ").concat(transition_timing_function, " ").concat(transitionDuration, "s;\n            transform: translateX(", 0, ");\n          }\n\n          .", 'ISWAD-Limited-Swipable-move', " {\n            transform: translateX(").concat(translateXVal, "%);\n          }\n        ")));
};

LimitedSwipableSlider.propTypes = _objectSpread(_objectSpread({}, defaultPropTypes), {}, {
  moveRight: _propTypes["default"].bool,
  setMoveRight: _propTypes["default"].func,
  moveLeft: _propTypes["default"].bool,
  setMoveLeft: _propTypes["default"].func,
  moveToItemWithNum: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].number]),
  setMoveToItemWithNum: _propTypes["default"].func,
  minXDifferenceToMove: _propTypes["default"].number,
  //   initialTranslateX: PropTypes.string,
  //   currentPositioning: PropTypes.string,
  //   moveRightTranslateX: PropTypes.string,
  transitionDuration: _propTypes["default"].number,
  transition_timing_function: _propTypes["default"].oneOf(['ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out', 'inherit']),
  cursorIsHandOnItem: _propTypes["default"].bool,
  notScrollableOnSwipableElement: _propTypes["default"].bool,
  isDraggable: _propTypes["default"].bool,
  isSwipable: _propTypes["default"].bool,
  showRightOfLastItem: _propTypes["default"].bool
});
LimitedSwipableSlider.defaultProps = _objectSpread(_objectSpread({}, defaultProps), {}, {
  moveRight: false,
  moveLeft: false,
  moveToItemWithNum: 1,
  minXDifferenceToMove: 20,
  transitionDuration: 0.3,
  transition_timing_function: 'linear',
  cursorIsHandOnItem: true,
  notScrollableOnSwipableElement: true,
  isDraggable: true,
  isSwipable: true,
  showRightOfLastItem: false
});
var _default = LimitedSwipableSlider;
exports["default"] = _default;
//# sourceMappingURL=LimitedSwipableSlider.js.map