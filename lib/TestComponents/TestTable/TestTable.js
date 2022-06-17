"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Table = _interopRequireDefault(require("../../Components/Table"));

var _Search = _interopRequireDefault(require("./Search"));

var _utils = require("./utils");

require("./TestTable.scss");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var TestTable = function TestTable(props) {
  var genderConverter = function genderConverter(gender) {
    if (gender === 'Male') {
      return /*#__PURE__*/_react["default"].createElement("img", {
        src: "https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-man-back-to-school-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-2.png",
        width: 30
      });
    } else if (gender === 'Female') {
      return /*#__PURE__*/_react["default"].createElement("img", {
        src: "https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-woman-back-to-school-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-2.png",
        width: 30
      });
    } else {
      return /*#__PURE__*/_react["default"].createElement("img", {
        src: "https://img.icons8.com/pastel-glyph/64/000000/person-male--v1.png",
        width: 30
      });
    }
  };

  var search = function search(props) {
    return /*#__PURE__*/_react["default"].createElement(_Search["default"], props);
  };

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      selectedData = _useState2[0],
      setSelectedData = _useState2[1];

  (0, _react.useEffect)(function () {
    _utils.data.map(function (d) {
      d['gender'] = {
        value: d['gender'],
        display: genderConverter(d['gender'])
      };
    });
  }, [_utils.data]);
  (0, _react.useEffect)(function () {
    console.log(selectedData);
  }, [selectedData]);

  var _useState3 = (0, _react.useState)(1),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      currentPage = _useState4[0],
      setCurrentPage = _useState4[1];

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Table["default"], {
    headLines: _utils.headLines,
    data: _utils.data // colWidth={400}
    // tableWidth={"2025px"}
    ,
    isSelectable: true // search={search}
    ,
    selectedData: selectedData,
    setSelectedData: setSelectedData // sortIconColors={{ ASC: "green", DESC: "red", REG: "silver" }}
    ,
    rowsPerPage: 10,
    currentPage: currentPage,
    setCurrentPage: setCurrentPage // showDefaultPagination={true}
    // numberOfShownPages={5}

  }), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return setCurrentPage(currentPage + 1);
    }
  }, "Next Page"));
};

var _default = TestTable;
exports["default"] = _default;
//# sourceMappingURL=TestTable.js.map