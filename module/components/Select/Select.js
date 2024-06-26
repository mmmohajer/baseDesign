"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _defaultProps = _interopRequireDefault(require("../../constants/defaultProps"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _excluded = ["options", "fullWidth", "children", "selectValue", "setSelectValue", "arrowIconFillColor", "arrowIconStrokeColor", "arrowIconScale", "searchIconFillColor", "searchIconStrokeColor", "searchIconScale", "showDefaultArrowDownIcon", "showDefaultSearchIcon", "openOptionsDownWard", "selectIntialShownText", "placeholder", "isOptionsActive", "setIsOptionsActive", "className", "defaultViewClassName", "optionClassName", "optinsContainerClassName", "searchContainerClassName", "inputSearchClassName", "placeHolderClassName", "SelectClickableClassName", "iconSearchContainerClassName", "optinsContainerToDownClassName", "optinsContainerToUpClassName", "optinsContainerIsActiveClassName", "arrowContainerClassName"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var defaultProps = _defaultProps["default"].defaultProps,
    defaultPropTypes = _defaultProps["default"].defaultPropTypes;

var Select = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var options = _ref.options,
      _ref$fullWidth = _ref.fullWidth,
      fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
      children = _ref.children,
      selectValue = _ref.selectValue,
      setSelectValue = _ref.setSelectValue,
      _ref$arrowIconFillCol = _ref.arrowIconFillColor,
      arrowIconFillColor = _ref$arrowIconFillCol === void 0 ? 'gray' : _ref$arrowIconFillCol,
      _ref$arrowIconStrokeC = _ref.arrowIconStrokeColor,
      arrowIconStrokeColor = _ref$arrowIconStrokeC === void 0 ? 'gray' : _ref$arrowIconStrokeC,
      _ref$arrowIconScale = _ref.arrowIconScale,
      arrowIconScale = _ref$arrowIconScale === void 0 ? 0.8 : _ref$arrowIconScale,
      _ref$searchIconFillCo = _ref.searchIconFillColor,
      searchIconFillColor = _ref$searchIconFillCo === void 0 ? 'gray' : _ref$searchIconFillCo,
      _ref$searchIconStroke = _ref.searchIconStrokeColor,
      searchIconStrokeColor = _ref$searchIconStroke === void 0 ? 'gray' : _ref$searchIconStroke,
      _ref$searchIconScale = _ref.searchIconScale,
      searchIconScale = _ref$searchIconScale === void 0 ? 0.8 : _ref$searchIconScale,
      _ref$showDefaultArrow = _ref.showDefaultArrowDownIcon,
      showDefaultArrowDownIcon = _ref$showDefaultArrow === void 0 ? true : _ref$showDefaultArrow,
      _ref$showDefaultSearc = _ref.showDefaultSearchIcon,
      showDefaultSearchIcon = _ref$showDefaultSearc === void 0 ? true : _ref$showDefaultSearc,
      _ref$openOptionsDownW = _ref.openOptionsDownWard,
      openOptionsDownWard = _ref$openOptionsDownW === void 0 ? true : _ref$openOptionsDownW,
      _ref$selectIntialShow = _ref.selectIntialShownText,
      selectIntialShownText = _ref$selectIntialShow === void 0 ? '' : _ref$selectIntialShow,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? '' : _ref$placeholder,
      _ref$isOptionsActive = _ref.isOptionsActive,
      isOptionsActive = _ref$isOptionsActive === void 0 ? false : _ref$isOptionsActive,
      setIsOptionsActive = _ref.setIsOptionsActive,
      className = _ref.className,
      defaultViewClassName = _ref.defaultViewClassName,
      optionClassName = _ref.optionClassName,
      optinsContainerClassName = _ref.optinsContainerClassName,
      searchContainerClassName = _ref.searchContainerClassName,
      inputSearchClassName = _ref.inputSearchClassName,
      placeHolderClassName = _ref.placeHolderClassName,
      _ref$SelectClickableC = _ref.SelectClickableClassName,
      SelectClickableClassName = _ref$SelectClickableC === void 0 ? 'width-per-100 height-vh-full bgWhite pos-fix pos-fix--lt op-10 z-10' : _ref$SelectClickableC,
      _ref$iconSearchContai = _ref.iconSearchContainerClassName,
      iconSearchContainerClassName = _ref$iconSearchContai === void 0 ? '' : _ref$iconSearchContai,
      _ref$optinsContainerT = _ref.optinsContainerToDownClassName,
      optinsContainerToDownClassName = _ref$optinsContainerT === void 0 ? '' : _ref$optinsContainerT,
      _ref$optinsContainerT2 = _ref.optinsContainerToUpClassName,
      optinsContainerToUpClassName = _ref$optinsContainerT2 === void 0 ? '' : _ref$optinsContainerT2,
      _ref$optinsContainerI = _ref.optinsContainerIsActiveClassName,
      optinsContainerIsActiveClassName = _ref$optinsContainerI === void 0 ? '' : _ref$optinsContainerI,
      _ref$arrowContainerCl = _ref.arrowContainerClassName,
      arrowContainerClassName = _ref$arrowContainerCl === void 0 ? '' : _ref$arrowContainerCl,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      filteredOptions = _useState2[0],
      setFilteredOptions = _useState2[1];

  var _useState3 = (0, _react.useState)(selectIntialShownText),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      curVal = _useState4[0],
      setCurVal = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      showPlaceHolder = _useState6[0],
      setShowPlaceHolder = _useState6[1];

  (0, _react.useEffect)(function () {
    if (placeholder.length && !selectValue) {
      setCurVal(placeholder);
      setShowPlaceHolder(true);
    } else {
      setShowPlaceHolder(false);
    }
  }, [curVal]);
  (0, _react.useEffect)(function () {
    var curOption;
    options === null || options === void 0 ? void 0 : options.forEach(function (item) {
      if (item !== null && item !== void 0 && item.value && item.value === selectValue) {
        curOption = item.shownText;
      }
    });
    setCurVal(curOption);
  }, [selectValue, options]);
  (0, _react.useEffect)(function () {
    setFilteredOptions(options);
  }, [options]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, isOptionsActive && /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('SelectMainClickableZIndex', SelectClickableClassName),
    onClick: function onClick() {
      setIsOptionsActive(false);
      setFilteredOptions(options);
    }
  }), /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _classnames["default"])('pos-rel SelectOptionsContainerZIndex', fullWidth && 'width-per-100', className, children)
  }, props, {
    ref: ref
  }), !isOptionsActive ? /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])(defaultViewClassName),
    onClick: function onClick() {
      return setIsOptionsActive(!isOptionsActive);
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: (0, _classnames["default"])(showPlaceHolder && placeHolderClassName)
  }, curVal)) : /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('pos-rel', searchContainerClassName)
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    className: (0, _classnames["default"])('width-per-100', inputSearchClassName),
    onChange: function onChange(e) {
      return setFilteredOptions(function () {
        return options.filter(function (x) {
          var _x$shownText, _x$shownText$toLowerC, _e$target$value;

          return x === null || x === void 0 ? void 0 : (_x$shownText = x.shownText) === null || _x$shownText === void 0 ? void 0 : (_x$shownText$toLowerC = _x$shownText.toLowerCase()) === null || _x$shownText$toLowerC === void 0 ? void 0 : _x$shownText$toLowerC.includes((_e$target$value = e.target.value) === null || _e$target$value === void 0 ? void 0 : _e$target$value.toLowerCase());
        });
      });
    }
  }), showDefaultSearchIcon && /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('ISWAD-Select-iconSearch', iconSearchContainerClassName)
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    type: "search",
    scale: searchIconScale,
    fill: searchIconFillColor,
    stroke: searchIconStrokeColor,
    className: (0, _classnames["default"])('mouse-hand')
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('ISWAD-Select-optionsContainer', openOptionsDownWard ? optinsContainerToDownClassName : optinsContainerToUpClassName, isOptionsActive && optinsContainerIsActiveClassName, optinsContainerClassName)
  }, filteredOptions === null || filteredOptions === void 0 ? void 0 : filteredOptions.map(function (item, idx) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _classnames["default"])('ISWAD-Select-option', optionClassName),
      key: idx,
      value: item === null || item === void 0 ? void 0 : item.value,
      onClick: function onClick() {
        setSelectValue(item.value);
        setCurVal(item.shownText);
        setIsOptionsActive(false);
      }
    }, item === null || item === void 0 ? void 0 : item.shownText);
  })), showDefaultArrowDownIcon && !isOptionsActive ? /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])(arrowContainerClassName)
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    type: "down",
    fill: arrowIconFillColor,
    stroke: arrowIconStrokeColor,
    scale: arrowIconScale
  })) : ''));
});

Select.propTypes = _objectSpread(_objectSpread({}, defaultPropTypes), {}, {
  options: _propTypes["default"].array,
  fullWidth: _propTypes["default"].bool,
  showDefaultSearchIcon: _propTypes["default"].bool,
  showDefaultArrowDownIcon: _propTypes["default"].bool,
  searchIconFillColor: _propTypes["default"].string,
  searchIconStrokeColor: _propTypes["default"].string,
  searchIconScale: _propTypes["default"].number,
  arrowIconFillColor: _propTypes["default"].string,
  arrowIconStrokeColor: _propTypes["default"].string,
  arrowIconScale: _propTypes["default"].number,
  openOptionsDownWard: _propTypes["default"].bool,
  selectIntialShownText: _propTypes["default"].any,
  placeholder: _propTypes["default"].any,
  isOptionsActive: _propTypes["default"].bool,
  setIsOptionsActive: _propTypes["default"].func,
  SelectClickableClassName: _propTypes["default"].string,
  iconSearchContainerClassName: _propTypes["default"].string,
  optinsContainerToDownClassName: _propTypes["default"].string,
  optinsContainerToUpClassName: _propTypes["default"].string,
  optinsContainerIsActiveClassName: _propTypes["default"].string,
  arrowContainerClassName: _propTypes["default"].string
});
var _default = Select;
exports["default"] = _default;
//# sourceMappingURL=Select.js.map