"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showRightHandler = exports.showLeftHandler = exports.rightSideSubstituteElementsInList = exports.leftSideSubstituteElementsInList = exports.handleSubstitution = exports.handleDragStart = exports.handleDragEnd = exports.handleDrag = exports.getArrayOfChildern = exports.calculateArrayOfWidths = exports.buildActiveIndices = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var handleDragStart = function handleDragStart(e, setXStart) {
  setXStart(e.clientX);
};

exports.handleDragStart = handleDragStart;

var handleDragEnd = function handleDragEnd(e, setXEnd) {
  setXEnd(e.clientX);
};

exports.handleDragEnd = handleDragEnd;

var handleDrag = function handleDrag(xStart, xEnd, minXDifferenceToMove, setShowLeft, setShowRight) {
  if (xEnd > -100000) {
    if (xEnd - xStart >= minXDifferenceToMove) {
      setShowLeft(true);
    }

    if (xEnd - xStart <= -minXDifferenceToMove) {
      setShowRight(true);
    }
  }
};

exports.handleDrag = handleDrag;

var rightSideSubstituteElementsInList = function rightSideSubstituteElementsInList(lst) {
  var idx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return [lst[idx]].concat((0, _toConsumableArray2["default"])(lst.slice(idx + 1)), (0, _toConsumableArray2["default"])(lst.slice(0, idx)));
};

exports.rightSideSubstituteElementsInList = rightSideSubstituteElementsInList;

var leftSideSubstituteElementsInList = function leftSideSubstituteElementsInList(lst) {
  var idx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return [].concat((0, _toConsumableArray2["default"])(lst.slice(idx + 1)), (0, _toConsumableArray2["default"])(lst.slice(0, idx)), [lst[idx]]);
};

exports.leftSideSubstituteElementsInList = leftSideSubstituteElementsInList;

var getArrayOfChildern = function getArrayOfChildern(arrayOfChildrenRefs, setArrayOfChildren) {
  var _arrayOfChildrenRefs$;

  if (arrayOfChildrenRefs !== null && arrayOfChildrenRefs !== void 0 && (_arrayOfChildrenRefs$ = arrayOfChildrenRefs.current) !== null && _arrayOfChildrenRefs$ !== void 0 && _arrayOfChildrenRefs$.length) {
    var localArrayOfElements = [];
    arrayOfChildrenRefs.current.forEach(function (item) {
      localArrayOfElements.push(item);
    });
    setArrayOfChildren(localArrayOfElements);
  }
};

exports.getArrayOfChildern = getArrayOfChildern;

var calculateArrayOfWidths = function calculateArrayOfWidths(arrayOfChildren, setTotalWidth, setArrayOfWidths) {
  if (arrayOfChildren !== null && arrayOfChildren !== void 0 && arrayOfChildren.length) {
    var curTotalWidth = 0;
    var localArrayOfWidths = [];
    arrayOfChildren.forEach(function (item) {
      curTotalWidth += item === null || item === void 0 ? void 0 : item.clientWidth;
      localArrayOfWidths.push(item === null || item === void 0 ? void 0 : item.clientWidth);
    });
    setTotalWidth(curTotalWidth);
    setArrayOfWidths(localArrayOfWidths);
  }
};

exports.calculateArrayOfWidths = calculateArrayOfWidths;

var showRightHandler = function showRightHandler(rightSideActiveIndices, setRightSideActiveIndices, setShowRight, arrayOfWidths, containerRef, setContainerTranslateX, transitionDuration, containerTranslateX, occupiedEachSidInPx) {
  var toalWidthsDisplayingElements = occupiedEachSidInPx;
  var count = 0;
  var midIndex = (rightSideActiveIndices === null || rightSideActiveIndices === void 0 ? void 0 : rightSideActiveIndices.length) - 1;

  while (count < (rightSideActiveIndices === null || rightSideActiveIndices === void 0 ? void 0 : rightSideActiveIndices.length) && toalWidthsDisplayingElements <= containerRef.current.clientWidth) {
    toalWidthsDisplayingElements += arrayOfWidths[midIndex + count];
    count += 1;
  }

  if (toalWidthsDisplayingElements > containerRef.current.clientWidth) {
    var newTranslateX = toalWidthsDisplayingElements - arrayOfWidths[midIndex + count - 1] - occupiedEachSidInPx;
    var newRightSide = rightSideSubstituteElementsInList((0, _toConsumableArray2["default"])(rightSideActiveIndices), count - 1);
    var newLeftSide = leftSideSubstituteElementsInList((0, _toConsumableArray2["default"])(newRightSide));
    var newActiveIndices = buildActiveIndices((0, _toConsumableArray2["default"])(newLeftSide), (0, _toConsumableArray2["default"])(newRightSide));
    var rightSideKeys = Object.keys(newActiveIndices).filter(function (key) {
      return key >= midIndex;
    });
    var rightSideArr = [];
    rightSideKeys.forEach(function (key) {
      rightSideArr.push(newActiveIndices[key]);
    });
    setContainerTranslateX(containerTranslateX - newTranslateX);
    setTimeout(function () {
      setRightSideActiveIndices([].concat(rightSideArr));
    }, [transitionDuration * 1000]);
  }

  setShowRight(false);
};

exports.showRightHandler = showRightHandler;

var showLeftHandler = function showLeftHandler(leftSideActiveIndices, setRightSideActiveIndices, setShowLeft, arrayOfWidths, containerRef, setContainerTranslateX, transitionDuration, containerTranslateX, occupiedEachSidInPx) {
  var toalWidthsDisplayingElements = occupiedEachSidInPx;
  var midIndex = (leftSideActiveIndices === null || leftSideActiveIndices === void 0 ? void 0 : leftSideActiveIndices.length) - 1;
  var count = midIndex;

  while (count >= 0 && toalWidthsDisplayingElements <= containerRef.current.clientWidth) {
    toalWidthsDisplayingElements += arrayOfWidths[count];
    count -= 1;
  }

  if (toalWidthsDisplayingElements > containerRef.current.clientWidth) {
    var newTranslateX = toalWidthsDisplayingElements - arrayOfWidths[count + 2] - occupiedEachSidInPx;
    var newLeftSide = leftSideSubstituteElementsInList((0, _toConsumableArray2["default"])(leftSideActiveIndices), count + 1);
    var newRightSide = rightSideSubstituteElementsInList((0, _toConsumableArray2["default"])(newLeftSide), midIndex);
    var newActiveIndices = buildActiveIndices((0, _toConsumableArray2["default"])(newLeftSide), (0, _toConsumableArray2["default"])(newRightSide));
    var rightSideKeys = Object.keys(newActiveIndices).filter(function (key) {
      return key >= midIndex;
    });
    var rightSideArr = [];
    rightSideKeys.forEach(function (key) {
      rightSideArr.push(newActiveIndices[key]);
    });
    setContainerTranslateX(containerTranslateX + newTranslateX);
    setTimeout(function () {
      setRightSideActiveIndices([].concat(rightSideArr));
    }, [transitionDuration * 1000]);
  }

  setShowLeft(false);
};

exports.showLeftHandler = showLeftHandler;

var buildActiveIndices = function buildActiveIndices(leftSideArr, rightSideArr) {
  if (leftSideArr !== null && leftSideArr !== void 0 && leftSideArr.length && rightSideArr !== null && rightSideArr !== void 0 && rightSideArr.length) {
    var _rightSideArr$slice;

    var localActiveIndices = {};
    var key = 0;
    leftSideArr === null || leftSideArr === void 0 ? void 0 : leftSideArr.forEach(function (item) {
      localActiveIndices[key] = item;
      key += 1;
    });
    (_rightSideArr$slice = rightSideArr.slice(1)) === null || _rightSideArr$slice === void 0 ? void 0 : _rightSideArr$slice.forEach(function (item) {
      localActiveIndices[key] = item;
      key += 1;
    });
    return localActiveIndices;
  }
};

exports.buildActiveIndices = buildActiveIndices;

var handleSubstitution = function handleSubstitution(activeIndices, setHasNoTransition, setContainerTranslateX, totalWidth, arrayOfWidths, occupiedEachSidInPx) {
  var _Object$keys;

  var midIndex = (((_Object$keys = Object.keys(activeIndices)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.length) + 1) / 2 - 1;
  setHasNoTransition(true);
  setContainerTranslateX(-totalWidth / 2 + arrayOfWidths[midIndex] / 2 + occupiedEachSidInPx);
};

exports.handleSubstitution = handleSubstitution;
//# sourceMappingURL=utils.js.map