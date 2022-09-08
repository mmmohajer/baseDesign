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

var _DragDropFileUpload = _interopRequireDefault(require("../../Components/DragDropFileUpload"));

var _TestDragDropFileUploadModule = _interopRequireDefault(require("./TestDragDropFileUpload.module.scss"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function TestDragDropFileUpload() {
  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      file = _useState2[0],
      setFile = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      openFileBrowser = _useState4[0],
      setOpenFileBrowser = _useState4[1];

  var draggableElement = function draggableElement() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "w-px-400 height-px-400 bgRed"
    }, "Hello");
  };

  (0, _react.useEffect)(function () {
    console.log(file);
  }, [file]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_DragDropFileUpload["default"], {
    file: file,
    setFile: setFile,
    openFileBrowser: openFileBrowser,
    setOpenFileBrowser: setOpenFileBrowser,
    draggableElement: draggableElement,
    mainContainerClassName: "w-px-400 height-px-400",
    whileDraggingElementClassName: (0, _classnames["default"])(_TestDragDropFileUploadModule["default"].dragIsActive)
  }), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return setOpenFileBrowser(true);
    }
  }, "Open"));
}

var _default = TestDragDropFileUpload;
exports["default"] = _default;
//# sourceMappingURL=TestDragDropFileUpload.js.map