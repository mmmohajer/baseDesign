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

var _Icon = _interopRequireDefault(require("../Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var defaultProps = _defaultProps["default"].defaultProps,
    defaultPropTypes = _defaultProps["default"].defaultPropTypes;

var Pagination = function Pagination(_ref) {
  var numberOfShownPages = _ref.numberOfShownPages,
      numberOfTotalPages = _ref.numberOfTotalPages,
      _ref$currentPage = _ref.currentPage,
      currentPage = _ref$currentPage === void 0 ? 1 : _ref$currentPage,
      setCurrentPage = _ref.setCurrentPage,
      _ref$showFirstLastIco = _ref.showFirstLastIcon,
      showFirstLastIcon = _ref$showFirstLastIco === void 0 ? true : _ref$showFirstLastIco,
      _ref$showPrevNextIcon = _ref.showPrevNextIcon,
      showPrevNextIcon = _ref$showPrevNextIcon === void 0 ? true : _ref$showPrevNextIcon,
      containerClassName = _ref.containerClassName,
      itemClassName = _ref.itemClassName,
      activeItemClassName = _ref.activeItemClassName,
      _ref$showDefaultPrevN = _ref.showDefaultPrevNextIcon,
      showDefaultPrevNextIcon = _ref$showDefaultPrevN === void 0 ? true : _ref$showDefaultPrevN,
      _ref$showDefaultFirst = _ref.showDefaultFirstLastIcon,
      showDefaultFirstLastIcon = _ref$showDefaultFirst === void 0 ? true : _ref$showDefaultFirst,
      prevComp = _ref.prevComp,
      nextComp = _ref.nextComp,
      firstPageComp = _ref.firstPageComp,
      lastPageCome = _ref.lastPageCome;

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      shownPages = _useState2[0],
      setShownPages = _useState2[1];

  var calcShownPage = function calcShownPage(curPage) {
    var localArray = [];

    if (numberOfShownPages < numberOfTotalPages) {
      var count = 1;
      localArray.push(curPage);
      var prevPage = curPage;
      var nextPage = curPage;

      while (count < numberOfShownPages) {
        prevPage -= 1;
        nextPage += 1;

        if (prevPage >= 1) {
          localArray.push(prevPage);
          count += 1;
        }

        if (nextPage <= numberOfTotalPages) {
          count += 1;
          localArray.push(nextPage);
        }
      }

      localArray.sort(function (a, b) {
        return a - b;
      });
    } else {
      for (var i = 1; i <= numberOfTotalPages; i++) {
        localArray.push(i);
      }
    }

    setShownPages(localArray);
  };

  (0, _react.useEffect)(function () {
    calcShownPage(currentPage);
  }, [currentPage, numberOfTotalPages]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('flex width-per-100 flex--jc--center flex--ai--center iswad_pagination', containerClassName)
  }, showFirstLastIcon ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex--jc--center flex--ai--center mouse-hand",
    onClick: function onClick() {
      return setCurrentPage(1);
    }
  }, showDefaultFirstLastIcon && /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    type: "doubleLeft",
    scale: 0.8
  }), !showDefaultFirstLastIcon && firstPageComp ? firstPageComp() : '') : '', showPrevNextIcon ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex--jc--center flex--ai--center mouse-hand",
    onClick: function onClick() {
      return currentPage !== 1 ? setCurrentPage(currentPage - 1) : setCurrentPage(numberOfTotalPages);
    }
  }, showDefaultPrevNextIcon && /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    type: "left",
    scale: 0.8
  }), !showDefaultPrevNextIcon && prevComp ? prevComp() : '') : '', shownPages.map(function (p, idx) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _classnames["default"])('mouse-hand iswad_pagination_item', itemClassName, p === currentPage && 'iswad_pagination_item_active', p === currentPage && activeItemClassName),
      key: idx,
      onClick: function onClick() {
        setCurrentPage(p);
      }
    }, p);
  }), showPrevNextIcon ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex--jc--center flex--ai--center mouse-hand",
    onClick: function onClick() {
      return currentPage !== numberOfTotalPages ? setCurrentPage(currentPage + 1) : setCurrentPage(1);
    }
  }, showDefaultPrevNextIcon && /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    type: "right",
    scale: 0.8
  }), !showDefaultPrevNextIcon && nextComp ? nextComp() : '') : '', showFirstLastIcon ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex--jc--center flex--ai--center mouse-hand",
    onClick: function onClick() {
      return setCurrentPage(numberOfTotalPages);
    }
  }, showDefaultFirstLastIcon && /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    type: "doubleRight",
    scale: 0.8
  }), !showDefaultFirstLastIcon && lastPageCome ? lastPageCome() : '') : ''));
};

Pagination.propTypes = _objectSpread(_objectSpread({}, defaultPropTypes), {}, {
  numberOfShownPages: _propTypes["default"].number,
  numberOfTotalPages: _propTypes["default"].number,
  currentPage: _propTypes["default"].number,
  setCurrentPage: _propTypes["default"].func,
  showFirstLastIcon: _propTypes["default"].bool,
  showPrevNextIcon: _propTypes["default"].bool,
  showDefaultFirstLastIcon: _propTypes["default"].bool,
  showDefaultPrevNextIcon: _propTypes["default"].bool,
  firstPageComp: _propTypes["default"].func,
  lastPageCome: _propTypes["default"].func,
  prevComp: _propTypes["default"].func,
  nextComp: _propTypes["default"].func
});
var _default = Pagination;
exports["default"] = _default;
//# sourceMappingURL=Pagination.js.map