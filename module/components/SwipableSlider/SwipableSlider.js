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

var _excluded = ["children", "moveRight", "setMoveRight", "moveLeft", "setMoveLeft", "moveToItemWithNum", "setMoveToItemWithNum", "minXDifferenceToMove", "notScrollableOnSwipableElement", "transitionDuration", "transition_timing_function", "cursorIsHandOnItem", "mainContainerWidthMultiplier", "className", "isDraggable", "isSwipable", "swipeTolerance"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var defaultProps = _defaultProps["default"].defaultProps,
    defaultPropTypes = _defaultProps["default"].defaultPropTypes;

var SwipableSlider = function SwipableSlider(_ref) {
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
      mainContainerWidthMultiplier = _ref.mainContainerWidthMultiplier,
      className = _ref.className,
      isDraggable = _ref.isDraggable,
      isSwipable = _ref.isSwipable,
      swipeTolerance = _ref.swipeTolerance,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var sliderContainer = (0, _react.useRef)();

  var _useState = (0, _react.useState)([children.length - 1, 0, 1]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      activeIndices = _useState2[0],
      setActiveIndices = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      xStart = _useState4[0],
      setXStart = _useState4[1];

  var _useState5 = (0, _react.useState)(-100000),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      xEnd = _useState6[0],
      setXEnd = _useState6[1];

  var lengthOfEachItem = mainContainerWidthMultiplier / 3 * 100;
  var sidesLength = (100 - lengthOfEachItem) / 2;
  var initialTranslateX = -((lengthOfEachItem - sidesLength) / mainContainerWidthMultiplier);
  var moveLeftTranslateX = initialTranslateX + 100 / 3;
  var moveRightTranslateX = initialTranslateX - 100 / 3;

  var handleDragStart = function handleDragStart(e) {
    setXStart(e.clientX);
  };

  var handleDragEnd = function handleDragEnd(e) {
    setXEnd(e.clientX);
  };

  var getNextActiveIdx = function getNextActiveIdx(idx) {
    return idx + 1 < children.length ? idx + 1 : 0;
  };

  var getPrevActiveIdx = function getPrevActiveIdx(idx) {
    return idx - 1 >= 0 ? idx - 1 : children.length - 1;
  };

  var wait = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(delay) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", new Promise(function (resolve, reject) {
                return setTimeout(resolve, delay);
              }));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function wait(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var moveHandler = /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(curActiveIdx) {
      var nextActiveIdx, prevActiveIdx;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return wait(transitionDuration * 1000);

            case 2:
              sliderContainer.current.classList.add('ISWAD-Swipable-notransition');
              sliderContainer.current.classList.remove('ISWAD-Swipable-moveLeft');
              sliderContainer.current.classList.remove('ISWAD-Swipable-moveRight');
              nextActiveIdx = getNextActiveIdx(curActiveIdx);
              prevActiveIdx = getPrevActiveIdx(curActiveIdx);
              setActiveIndices([prevActiveIdx, curActiveIdx, nextActiveIdx]);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function moveHandler(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var multipleMoveHandler = /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(curActiveIdx, dir) {
      var nextActiveIdx, prevActiveIdx;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              sliderContainer.current.classList.remove('ISWAD-Swipable-notransition');
              dir === 'right' ? sliderContainer.current.classList.add('ISWAD-Swipable-moveRight') : sliderContainer.current.classList.add('ISWAD-Swipable-moveLeft');
              _context3.next = 4;
              return wait(transitionDuration * 1000);

            case 4:
              sliderContainer.current.classList.add('ISWAD-Swipable-notransition');
              sliderContainer.current.classList.remove('ISWAD-Swipable-moveLeft');
              sliderContainer.current.classList.remove('ISWAD-Swipable-moveRight');
              nextActiveIdx = getNextActiveIdx(curActiveIdx);
              prevActiveIdx = getPrevActiveIdx(curActiveIdx);
              setActiveIndices([prevActiveIdx, curActiveIdx, nextActiveIdx]);

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function multipleMoveHandler(_x3, _x4) {
      return _ref4.apply(this, arguments);
    };
  }();

  var goRight = (0, _react.useCallback)(function () {
    sliderContainer.current.classList.remove('ISWAD-Swipable-notransition');
    sliderContainer.current.classList.add('ISWAD-Swipable-moveRight');
    moveHandler(getNextActiveIdx(activeIndices[1]));
  }, [activeIndices]);
  var goLeft = (0, _react.useCallback)(function () {
    sliderContainer.current.classList.remove('ISWAD-Swipable-notransition');
    sliderContainer.current.classList.add('ISWAD-Swipable-moveLeft');
    moveHandler(getPrevActiveIdx(activeIndices[1]));
  }, [activeIndices]);

  var goToItemWithNum = /*#__PURE__*/function () {
    var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(num) {
      var curActiveIdx,
          _args4 = arguments;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              curActiveIdx = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : activeIndices[1];

              if (!(curActiveIdx < num - 1)) {
                _context4.next = 9;
                break;
              }

              curActiveIdx += 1;
              multipleMoveHandler(curActiveIdx, 'right');
              _context4.next = 6;
              return wait(transitionDuration * 1000 + 100);

            case 6:
              goToItemWithNum(num, curActiveIdx);
              _context4.next = 15;
              break;

            case 9:
              if (!(curActiveIdx > num - 1)) {
                _context4.next = 15;
                break;
              }

              curActiveIdx -= 1;
              multipleMoveHandler(curActiveIdx, 'left');
              _context4.next = 14;
              return wait(transitionDuration * 1000 + 100);

            case 14:
              goToItemWithNum(num, curActiveIdx);

            case 15:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function goToItemWithNum(_x5) {
      return _ref5.apply(this, arguments);
    };
  }();

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
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _classnames["default"])('w-per-100 of-x-hidden', className)
  }, props), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('flex', 'ISWAD-Swipable-sliderContainer'),
    ref: function ref(el) {
      return sliderContainer.current = el;
    }
  }, activeIndices.map(function (item, idx) {
    if (isSwipable) {
      return /*#__PURE__*/_react["default"].createElement(_reactEasySwipe["default"], {
        key: idx,
        className: (0, _classnames["default"])('flex flex--jc--center flex--ai--center w-per-100', cursorIsHandOnItem && 'mouse-hand'),
        draggable: isDraggable,
        onDragStart: handleDragStart,
        onDragEnd: handleDragEnd,
        onSwipeLeft: goRight,
        onSwipeRight: goLeft,
        tolerance: swipeTolerance
      }, children[item]);
    } else {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: idx,
        className: (0, _classnames["default"])('flex flex--jc--center flex--ai--center w-per-100', cursorIsHandOnItem && 'mouse-hand'),
        draggable: isDraggable,
        onDragStart: handleDragStart,
        onDragEnd: handleDragEnd
      }, children[item]);
    }
  }))), /*#__PURE__*/_react["default"].createElement("style", null, "\n          .".concat('ISWAD-Swipable-sliderContainer', " {\n            width: ", mainContainerWidthMultiplier * 100, "%;\n            -webkit-transition: all ").concat(transition_timing_function, " ").concat(transitionDuration, "s;\n            -moz-transition: all ").concat(transition_timing_function, " ").concat(transitionDuration, "s;\n            -o-transition: all ").concat(transition_timing_function, " ").concat(transitionDuration, "s;\n            transition: all ").concat(transition_timing_function, " ").concat(transitionDuration, "s;\n            transform: translateX(").concat(initialTranslateX, "%);\n          }\n\n          .", 'ISWAD-Swipable-moveLeft', " {\n            transform: translateX(").concat(moveLeftTranslateX, "%);\n          }\n\n          .", 'ISWAD-Swipable-moveRight', " {\n            transform: translateX(").concat(moveRightTranslateX, "%);\n          }\n\n          .", 'ISWAD-Swipable-notransition', " {\n            -webkit-transition: none !important;\n            -moz-transition: none !important;\n            -o-transition: none !important;\n            transition: none !important;\n          }\n        ")));
};

SwipableSlider.propTypes = _objectSpread(_objectSpread({}, defaultPropTypes), {}, {
  moveRight: _propTypes["default"].bool,
  setMoveRight: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].func]),
  moveLeft: _propTypes["default"].bool,
  setMoveLeft: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].func]),
  moveToItemWithNum: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].number]),
  setMoveToItemWithNum: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].func]),
  minXDifferenceToMove: _propTypes["default"].number,
  transitionDuration: _propTypes["default"].number,
  transition_timing_function: _propTypes["default"].oneOf(['ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out', 'inherit']),
  cursorIsHandOnItem: _propTypes["default"].bool,
  notScrollableOnSwipableElement: _propTypes["default"].bool,
  mainContainerWidthMultiplier: _propTypes["default"].number,
  isDraggable: _propTypes["default"].bool,
  isSwipable: _propTypes["default"].bool,
  swipeTolerance: _propTypes["default"].number
});
SwipableSlider.defaultProps = _objectSpread(_objectSpread({}, defaultProps), {}, {
  moveRight: false,
  setMoveRight: false,
  moveLeft: false,
  setMoveLeft: false,
  moveToItemWithNum: false,
  setMoveToItemWithNum: false,
  minXDifferenceToMove: 100,
  transitionDuration: 0.3,
  transition_timing_function: 'linear',
  cursorIsHandOnItem: true,
  notScrollableOnSwipableElement: true,
  mainContainerWidthMultiplier: 3,
  isDraggable: true,
  isSwipable: true,
  swipeTolerance: 1
});
var _default = SwipableSlider;
exports["default"] = _default;
//# sourceMappingURL=SwipableSlider.js.map