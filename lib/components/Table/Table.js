"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _defaultProps = _interopRequireDefault(require("../../constants/defaultProps"));

var _Th = _interopRequireDefault(require("./subs/Th"));

var _Tr = _interopRequireDefault(require("./subs/Tr"));

var _Td = _interopRequireDefault(require("./subs/Td"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Search = _interopRequireDefault(require("../Search"));

var _Pagination = _interopRequireDefault(require("../Pagination"));

var _excluded = ["headLines", "data", "colWidth", "tableWidth", "isSelectable", "search", "selectedData", "setSelectedData", "sortIconColors", "rowsPerPage", "currentPage", "setCurrentPage", "showDefaultPagination", "numberOfShownPages", "tableClassName", "mainContainerClassName", "className", "tableHeadContainerClassName", "paginationComponent", "showFirstLastIconInPagination", "showDefaultSortIcon", "sortIcon", "showDefaultSelectable", "selectableComp", "selectableColWidth", "selectableHeaderClassName", "selectableRowClassName", "isSearchCaseInsensitive", "containerUID", "isFullWidth", "thClassName", "trClassName", "tdClassName"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var defaultProps = _defaultProps["default"].defaultProps,
    defaultPropTypes = _defaultProps["default"].defaultPropTypes;

var Table = function Table(_ref) {
  var headLines = _ref.headLines,
      data = _ref.data,
      _ref$colWidth = _ref.colWidth,
      colWidth = _ref$colWidth === void 0 ? 300 : _ref$colWidth,
      tableWidth = _ref.tableWidth,
      _ref$isSelectable = _ref.isSelectable,
      isSelectable = _ref$isSelectable === void 0 ? false : _ref$isSelectable,
      search = _ref.search,
      selectedData = _ref.selectedData,
      setSelectedData = _ref.setSelectedData,
      _ref$sortIconColors = _ref.sortIconColors,
      sortIconColors = _ref$sortIconColors === void 0 ? {
    ASC: 'green',
    DESC: 'red',
    REG: 'silver'
  } : _ref$sortIconColors,
      rowsPerPage = _ref.rowsPerPage,
      currentPage = _ref.currentPage,
      setCurrentPage = _ref.setCurrentPage,
      _ref$showDefaultPagin = _ref.showDefaultPagination,
      showDefaultPagination = _ref$showDefaultPagin === void 0 ? true : _ref$showDefaultPagin,
      _ref$numberOfShownPag = _ref.numberOfShownPages,
      numberOfShownPages = _ref$numberOfShownPag === void 0 ? 5 : _ref$numberOfShownPag,
      tableClassName = _ref.tableClassName,
      mainContainerClassName = _ref.mainContainerClassName,
      className = _ref.className,
      tableHeadContainerClassName = _ref.tableHeadContainerClassName,
      paginationComponent = _ref.paginationComponent,
      _ref$showFirstLastIco = _ref.showFirstLastIconInPagination,
      showFirstLastIconInPagination = _ref$showFirstLastIco === void 0 ? true : _ref$showFirstLastIco,
      _ref$showDefaultSortI = _ref.showDefaultSortIcon,
      showDefaultSortIcon = _ref$showDefaultSortI === void 0 ? true : _ref$showDefaultSortI,
      sortIcon = _ref.sortIcon,
      _ref$showDefaultSelec = _ref.showDefaultSelectable,
      showDefaultSelectable = _ref$showDefaultSelec === void 0 ? true : _ref$showDefaultSelec,
      selectableComp = _ref.selectableComp,
      _ref$selectableColWid = _ref.selectableColWidth,
      selectableColWidth = _ref$selectableColWid === void 0 ? 25 : _ref$selectableColWid,
      _ref$selectableHeader = _ref.selectableHeaderClassName,
      selectableHeaderClassName = _ref$selectableHeader === void 0 ? '' : _ref$selectableHeader,
      _ref$selectableRowCla = _ref.selectableRowClassName,
      selectableRowClassName = _ref$selectableRowCla === void 0 ? '' : _ref$selectableRowCla,
      _ref$isSearchCaseInse = _ref.isSearchCaseInsensitive,
      isSearchCaseInsensitive = _ref$isSearchCaseInse === void 0 ? true : _ref$isSearchCaseInse,
      _ref$containerUID = _ref.containerUID,
      containerUID = _ref$containerUID === void 0 ? 'test' : _ref$containerUID,
      _ref$isFullWidth = _ref.isFullWidth,
      isFullWidth = _ref$isFullWidth === void 0 ? false : _ref$isFullWidth,
      thClassName = _ref.thClassName,
      trClassName = _ref.trClassName,
      tdClassName = _ref.tdClassName,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var mainContainerRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      firstSetup = _useState2[0],
      setFirstSetup = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      filter = _useState4[0],
      setFilter = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      filteredData = _useState6[0],
      setFilteredData = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      sortedData = _useState8[0],
      setSortedData = _useState8[1];

  var _useState9 = (0, _react.useState)({}),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      isChecked = _useState10[0],
      setIsChecked = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
      allIsChecked = _useState12[0],
      setAllIsChecked = _useState12[1];

  var _useState13 = (0, _react.useState)({}),
      _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
      isSorted = _useState14[0],
      setIsSorted = _useState14[1];

  var _useState15 = (0, _react.useState)({}),
      _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
      sortIconColor = _useState16[0],
      setSortIconColor = _useState16[1];

  var _useState17 = (0, _react.useState)({}),
      _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
      pageData = _useState18[0],
      setPageData = _useState18[1];

  var _useState19 = (0, _react.useState)(1),
      _useState20 = (0, _slicedToArray2["default"])(_useState19, 2),
      numberOfTotalPages = _useState20[0],
      setNumberOfTotalPages = _useState20[1];

  var _useState21 = (0, _react.useState)('100%'),
      _useState22 = (0, _slicedToArray2["default"])(_useState21, 2),
      tableTotalWidth = _useState22[0],
      setTableTotalWidth = _useState22[1];

  var _useState23 = (0, _react.useState)(0),
      _useState24 = (0, _slicedToArray2["default"])(_useState23, 2),
      tableTotalWidthInPx = _useState24[0],
      setTableTotalWidthInPx = _useState24[1];

  var _useState25 = (0, _react.useState)(0),
      _useState26 = (0, _slicedToArray2["default"])(_useState25, 2),
      addedPx = _useState26[0],
      setAddedPx = _useState26[1];

  var calcTotalWidth = function calcTotalWidth() {
    var totalWidth = 0;
    var allCols = headLines.length;
    headLines.map(function (h) {
      if (h !== null && h !== void 0 && h.width) {
        totalWidth += h.width;
        allCols -= 1;
      }
    });
    totalWidth += colWidth * allCols;

    if (isSelectable) {
      totalWidth += selectableColWidth;
    }

    setTableTotalWidth("".concat(totalWidth, "px"));
    setTableTotalWidthInPx(totalWidth);
  };

  (0, _react.useEffect)(function () {
    if (mainContainerRef !== null && mainContainerRef !== void 0 && mainContainerRef.current && isFullWidth) {
      if (!isNaN(tableTotalWidthInPx) && !isNaN(mainContainerRef.current.clientWidth)) {
        if (mainContainerRef.current.clientWidth - tableTotalWidthInPx > 0 && headLines !== null && headLines !== void 0 && headLines.length) {
          var localAddedPx = (mainContainerRef.current.clientWidth - tableTotalWidthInPx) / headLines.length;
          setAddedPx(localAddedPx);
          setTableTotalWidth("".concat(mainContainerRef.current.clientWidth, "px"));
        } else {
          setAddedPx(0);
          setTableTotalWidth("".concat(tableTotalWidthInPx, "px"));
        }
      }
    }
  }, [mainContainerRef === null || mainContainerRef === void 0 ? void 0 : mainContainerRef.current, tableTotalWidthInPx, headLines]);
  (0, _react.useEffect)(function () {
    if (!tableWidth) {
      calcTotalWidth();
    } else {
      setTableTotalWidth(tableWidth);
    }
  }, [tableWidth, headLines, isSelectable]);
  (0, _react.useEffect)(function () {
    if (headLines !== null && headLines !== void 0 && headLines.length && firstSetup) {
      var newObj = {};
      headLines === null || headLines === void 0 ? void 0 : headLines.forEach(function (item) {
        if (item !== null && item !== void 0 && item.value) {
          newObj[item.value] = '';
        } else {
          newObj[item] = '';
        }
      });
      setFilter(_objectSpread({}, newObj));
      setFirstSetup(false);
    }
  }, [headLines, firstSetup]);

  var searchHandler = function searchHandler(e, head) {
    var key = (head === null || head === void 0 ? void 0 : head.value) || head;

    var curFilter = _objectSpread({}, filter);

    if (key in curFilter) {
      curFilter[key] = e.target.value;
    } else {
      var newObj = (0, _defineProperty2["default"])({}, key, e.target.value);
      Object.assign(curFilter, newObj);
    }

    setFilter(curFilter);
  };

  (0, _react.useEffect)(function () {
    if (data !== null && data !== void 0 && data.length) {
      setTimeout(function () {
        var localSortedData = (0, _toConsumableArray2["default"])(data);
        Object.keys(filter).forEach(function (filteredKey) {
          if (filter[filteredKey].length) {
            if (currentPage !== 1) {
              setCurrentPage(1);
            }

            localSortedData = localSortedData.filter(function (d) {
              var _d$filteredKey;

              var curSearchElem = ((_d$filteredKey = d[filteredKey]) === null || _d$filteredKey === void 0 ? void 0 : _d$filteredKey.value) || d[filteredKey];

              if (isSearchCaseInsensitive) {
                return curSearchElem.toLowerCase().includes(filter[filteredKey].toLowerCase());
              } else {
                return curSearchElem.includes(filter[filteredKey]);
              }
            });
          }
        });
        setSortedData(localSortedData);
        setFilteredData(localSortedData);
      }, 500);
    }
  }, [filter, data, currentPage, isSearchCaseInsensitive]);
  (0, _react.useEffect)(function () {
    var localIsChecked = _objectSpread({}, isChecked);

    var count = 0;

    if (data !== null && data !== void 0 && data.length) {
      var localData = (0, _toConsumableArray2["default"])(data);
      localData.map(function (d) {
        d['iswad_table_idx'] = count;
        localIsChecked[count] = false;
        count += 1;
      });
      setFilteredData((0, _toConsumableArray2["default"])(localData));
      setSortedData((0, _toConsumableArray2["default"])(localData));
      setIsChecked(_objectSpread({}, localIsChecked));
    }
  }, [data]);
  (0, _react.useEffect)(function () {
    var localSortIconColor = _objectSpread({}, sortIconColor);

    headLines === null || headLines === void 0 ? void 0 : headLines.map(function (h) {
      if (h !== null && h !== void 0 && h.isSortable) {
        localSortIconColor[(h === null || h === void 0 ? void 0 : h.value) || h] = sortIconColors['REG'] || 'silver';
      }
    });
    setSortIconColor(localSortIconColor);
  }, [headLines]);
  (0, _react.useEffect)(function () {
    var localSelectedData = [];

    if (Object.keys(isChecked).length) {
      Object.keys(isChecked).map(function (idx) {
        if (isChecked[idx]) {
          var toBeAdded = _objectSpread({}, data.find(function (d) {
            return d['iswad_table_idx'] === parseInt(idx);
          }));

          delete toBeAdded['iswad_table_idx'];
          localSelectedData.push(toBeAdded);
        }
      });

      if (setSelectedData) {
        setSelectedData([].concat(localSelectedData));
      }
    }
  }, [isChecked, data]);

  var sortHandler = function sortHandler(head) {
    if (setCurrentPage) {
      setCurrentPage(1);
    }

    var key = (head === null || head === void 0 ? void 0 : head.value) || head;

    var localIsSorted = _objectSpread({}, isSorted);

    var curKey = Object.keys(localIsSorted)[0] || false;

    if (curKey && key === curKey) {
      localIsSorted[key] += 1;

      if (localIsSorted[key] > 2) {
        localIsSorted[key] = 0;
      }
    } else {
      localIsSorted = {};
      localIsSorted[key] = 1;
    }

    setIsSorted(localIsSorted);

    var localSortIconColor = _objectSpread({}, sortIconColor);

    Object.keys(localSortIconColor).map(function (k) {
      localSortIconColor[k] = sortIconColors['REG'] || 'silver';
    });

    if (localIsSorted[key] === 1) {
      localSortIconColor[key] = sortIconColors['ASC'] || 'green';
    } else if (localIsSorted[key] === 2) {
      localSortIconColor[key] = sortIconColors['DESC'] || 'red';
    } else {
      localSortIconColor[key] = sortIconColors['REG'] || 'silver';
    }

    setSortIconColor(localSortIconColor);
  };

  (0, _react.useEffect)(function () {
    var curKey = Object.keys(isSorted)[0] || false;
    var localData = (0, _toConsumableArray2["default"])(sortedData);

    if (curKey) {
      if (isSorted[curKey] === 1) {
        localData.sort(function (a, b) {
          var _a$curKey, _b$curKey;

          var firstVal = ((_a$curKey = a[curKey]) === null || _a$curKey === void 0 ? void 0 : _a$curKey.value) || a[curKey];
          var secondVal = ((_b$curKey = b[curKey]) === null || _b$curKey === void 0 ? void 0 : _b$curKey.value) || b[curKey];
          return firstVal > secondVal ? 1 : secondVal > firstVal ? -1 : 0;
        });
        setSortedData(localData);
      } else if (isSorted[curKey] === 2) {
        localData.sort(function (a, b) {
          var _a$curKey2, _b$curKey2;

          var firstVal = ((_a$curKey2 = a[curKey]) === null || _a$curKey2 === void 0 ? void 0 : _a$curKey2.value) || a[curKey];
          var secondVal = ((_b$curKey2 = b[curKey]) === null || _b$curKey2 === void 0 ? void 0 : _b$curKey2.value) || b[curKey];
          return firstVal > secondVal ? -1 : secondVal > firstVal ? 1 : 0;
        });
        setSortedData(localData);
      } else {
        setSortedData((0, _toConsumableArray2["default"])(filteredData));
      }
    }
  }, [isSorted, sortedData, filteredData]);
  (0, _react.useEffect)(function () {
    setNumberOfTotalPages(Math.ceil(sortedData.length / rowsPerPage));
  }, [sortedData]);
  (0, _react.useEffect)(function () {
    var localPageData = (0, _toConsumableArray2["default"])(sortedData);

    if (rowsPerPage) {
      var firstIdx = (currentPage - 1) * rowsPerPage;
      var lastIdx = currentPage * rowsPerPage;
      localPageData = localPageData.slice(firstIdx, lastIdx);
    }

    setPageData(localPageData);
  }, [currentPage, sortedData, filteredData]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('width-per-100', mainContainerClassName),
    ref: function ref(el) {
      return mainContainerRef.current = el;
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('width-per-100 of-x-auto', className)
  }, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _classnames["default"])("flex flex--dir--col m-l-auto m-r-auto of-x-auto ".concat(containerUID, "-iswad-table"), tableClassName)
  }, props), /*#__PURE__*/_react["default"].createElement(_Th["default"], {
    className: thClassName
  }, isSelectable && /*#__PURE__*/_react["default"].createElement(_Td["default"], {
    style: {
      width: "".concat(selectableColWidth, "px")
    },
    className: selectableHeaderClassName
  }, showDefaultSelectable && /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    checked: allIsChecked,
    onChange: function onChange(e) {
      setAllIsChecked(e.target.checked);

      var localIsChecked = _objectSpread({}, isChecked);

      Object.keys(localIsChecked).map(function (obj) {
        localIsChecked[obj] = e.target.checked;
      });
      setIsChecked(localIsChecked);
    }
  }), !showDefaultSelectable && selectableComp ? selectableComp({
    checked: allIsChecked,
    onBoxClick: function onBoxClick() {
      setAllIsChecked(!allIsChecked);

      var localIsChecked = _objectSpread({}, isChecked);

      Object.keys(localIsChecked).map(function (obj) {
        localIsChecked[obj] = !allIsChecked;
      });
      setIsChecked(localIsChecked);
    }
  }) : ''), headLines.map(function (head, idx) {
    return /*#__PURE__*/_react["default"].createElement(_Td["default"], {
      className: tdClassName,
      style: (head === null || head === void 0 ? void 0 : head.width) && {
        width: "".concat(head.width + addedPx, "px")
      },
      key: idx
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex width-per-100 flex--jc--between flex--ai--center"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _classnames["default"])('width-per-100 iswad_table_headContainer', tableHeadContainerClassName)
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: ""
    }, (head === null || head === void 0 ? void 0 : head.display) || head), head.hasSearch && /*#__PURE__*/_react["default"].createElement("div", {
      className: ""
    }, search ? search({
      value: filter[(head === null || head === void 0 ? void 0 : head.value) || head] || '',
      onChange: function onChange(e) {
        return searchHandler(e, head);
      }
    }) : /*#__PURE__*/_react["default"].createElement(_Search["default"], {
      value: filter[(head === null || head === void 0 ? void 0 : head.value) || head] || '',
      onChange: function onChange(e) {
        return searchHandler(e, head);
      }
    }))), (head === null || head === void 0 ? void 0 : head.isSortable) && /*#__PURE__*/_react["default"].createElement("div", {
      className: "mouse-hand",
      onClick: function onClick() {
        return sortHandler(head);
      }
    }, showDefaultSortIcon ? /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      type: "down",
      fill: sortIconColor[(head === null || head === void 0 ? void 0 : head.value) || head],
      stroke: sortIconColor[(head === null || head === void 0 ? void 0 : head.value) || head]
    }) : '', !showDefaultSortIcon && sortIcon ? sortIcon({
      isAsc: sortIconColor[(head === null || head === void 0 ? void 0 : head.value) || head] === sortIconColors['ASC'],
      isDesc: sortIconColor[(head === null || head === void 0 ? void 0 : head.value) || head] === sortIconColors['DESC'],
      notSorted: sortIconColor[(head === null || head === void 0 ? void 0 : head.value) || head] === sortIconColors['REG']
    }) : '')));
  })), pageData !== null && pageData !== void 0 && pageData.length ? pageData.map(function (curRow, idx) {
    return /*#__PURE__*/_react["default"].createElement(_Tr["default"], {
      key: idx,
      className: trClassName
    }, isSelectable && /*#__PURE__*/_react["default"].createElement(_Td["default"], {
      style: {
        width: "".concat(selectableColWidth, "px")
      },
      className: selectableRowClassName
    }, /*#__PURE__*/_react["default"].createElement("div", null, showDefaultSelectable && /*#__PURE__*/_react["default"].createElement("input", {
      type: "checkbox",
      checked: isChecked[curRow['iswad_table_idx']],
      onChange: function onChange(e) {
        var localIsChecked = _objectSpread({}, isChecked);

        localIsChecked[curRow['iswad_table_idx']] = e.target.checked;
        setIsChecked(localIsChecked);
      }
    }), !showDefaultSelectable && selectableComp ? selectableComp({
      checked: isChecked[curRow['iswad_table_idx']],
      onBoxClick: function onBoxClick() {
        var localIsChecked = _objectSpread({}, isChecked);

        localIsChecked[curRow['iswad_table_idx']] = !localIsChecked[curRow['iswad_table_idx']];
        setIsChecked(localIsChecked);
      }
    }) : '')), headLines.map(function (curCol, idx1) {
      var _curRow;

      return /*#__PURE__*/_react["default"].createElement(_Td["default"], {
        className: tdClassName,
        key: idx1,
        style: (curCol === null || curCol === void 0 ? void 0 : curCol.width) && {
          width: "".concat(curCol.width + addedPx, "px")
        }
      }, ((_curRow = curRow[(curCol === null || curCol === void 0 ? void 0 : curCol.value) || curCol]) === null || _curRow === void 0 ? void 0 : _curRow.display) || curRow[(curCol === null || curCol === void 0 ? void 0 : curCol.value) || curCol] || curRow[curCol]);
    }));
  }) : '')), showDefaultPagination && numberOfTotalPages ? /*#__PURE__*/_react["default"].createElement(_Pagination["default"], {
    numberOfShownPages: numberOfShownPages || 5,
    currentPage: currentPage,
    numberOfTotalPages: numberOfTotalPages,
    setCurrentPage: setCurrentPage,
    showFirstLastIcon: showFirstLastIconInPagination
  }) : '', !showDefaultPagination && numberOfTotalPages && paginationComponent ? paginationComponent({
    numberOfShownPages: numberOfShownPages || 5,
    currentPage: currentPage,
    numberOfTotalPages: numberOfTotalPages,
    setCurrentPage: setCurrentPage,
    showFirstLastIcon: showFirstLastIconInPagination
  }) : ''), /*#__PURE__*/_react["default"].createElement("style", null, "\n          .".concat(containerUID, "-iswad-table {\n            width: ").concat(tableTotalWidth, ";\n          }\n          ")));
};

Table.propTypes = _objectSpread(_objectSpread({}, defaultPropTypes), {}, {
  headLines: _propTypes["default"].array,
  data: _propTypes["default"].arrayOf(_propTypes["default"].object),
  colWidth: _propTypes["default"].number,
  tableWidth: _propTypes["default"].string,
  isSelectable: _propTypes["default"].bool,
  search: _propTypes["default"].func,
  selectedData: _propTypes["default"].arrayOf(_propTypes["default"].object),
  setSelectedData: _propTypes["default"].func,
  sortIconColors: _propTypes["default"].shape({
    ASC: _propTypes["default"].string,
    DESC: _propTypes["default"].string,
    REG: _propTypes["default"].string
  }),
  rowsPerPage: _propTypes["default"].number,
  currentPage: _propTypes["default"].number,
  setCurrentPage: _propTypes["default"].func,
  showDefaultPagination: _propTypes["default"].bool,
  numberOfShownPages: _propTypes["default"].number,
  paginationComponent: _propTypes["default"].func,
  showFirstLastIconInPagination: _propTypes["default"].bool,
  showDefaultSortIcon: _propTypes["default"].bool,
  sortIcon: _propTypes["default"].func,
  showDefaultSelectable: _propTypes["default"].bool,
  isFullWidth: _propTypes["default"].bool,
  selectableComp: _propTypes["default"].func,
  selectableColWidth: _propTypes["default"].number,
  selectableHeaderClassName: _propTypes["default"].string,
  selectableRowClassName: _propTypes["default"].string,
  isSearchCaseInsensitive: _propTypes["default"].bool,
  containerUID: _propTypes["default"].string
});
var _default = Table;
exports["default"] = _default;
//# sourceMappingURL=Table.js.map