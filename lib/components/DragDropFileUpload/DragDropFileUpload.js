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

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var defaultProps = _defaultProps["default"].defaultProps,
    defaultPropTypes = _defaultProps["default"].defaultPropTypes;

function DragDropFileUpload(_ref) {
  var setFile = _ref.setFile,
      _ref$openFileBrowser = _ref.openFileBrowser,
      openFileBrowser = _ref$openFileBrowser === void 0 ? false : _ref$openFileBrowser,
      setOpenFileBrowser = _ref.setOpenFileBrowser,
      draggableElement = _ref.draggableElement,
      whileDraggingElement = _ref.whileDraggingElement,
      multipleFileUploader = _ref.multipleFileUploader,
      whileDraggingElementClassName = _ref.whileDraggingElementClassName,
      mainContainerClassName = _ref.mainContainerClassName,
      _ref$acceptableFileTy = _ref.acceptableFileType,
      acceptableFileType = _ref$acceptableFileTy === void 0 ? '.jpg,.jpeg,.png' : _ref$acceptableFileTy,
      _ref$inputId = _ref.inputId,
      inputId = _ref$inputId === void 0 ? 'draggableFileUploaderId' : _ref$inputId,
      _ref$inputName = _ref.inputName,
      inputName = _ref$inputName === void 0 ? 'file_name' : _ref$inputName;
  var inputRef = (0, _react.useRef)();

  var _React$useState = _react["default"].useState(false),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      dragActive = _React$useState2[0],
      setDragActive = _React$useState2[1];

  var handleDrag = function handleDrag(e) {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  var handleDrop = function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files);
    }
  };

  var handleChange = function handleChange(e) {
    e.preventDefault();

    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files);
    }
  };

  (0, _react.useEffect)(function () {
    if (openFileBrowser) {
      inputRef.current.click();
      setTimeout(function () {
        setOpenFileBrowser(false);
      }, 500);
    }
  }, [openFileBrowser]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('pos-rel', mainContainerClassName),
    onDragEnter: handleDrag,
    onSubmit: function onSubmit(e) {
      return e.preventDefault();
    }
  }, /*#__PURE__*/_react["default"].createElement("input", {
    ref: inputRef,
    type: "file",
    className: "no-display",
    accept: acceptableFileType,
    multiple: multipleFileUploader,
    onChange: handleChange,
    id: inputId,
    name: inputName
  }), draggableElement && draggableElement(), dragActive && /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])(whileDraggingElementClassName),
    onDragEnter: handleDrag,
    onDragLeave: handleDrag,
    onDragOver: handleDrag,
    onDrop: handleDrop
  }, whileDraggingElement && whileDraggingElement())));
}

DragDropFileUpload.propTypes = _objectSpread(_objectSpread({}, defaultPropTypes), {}, {
  setFile: _propTypes["default"].func,
  openFileBrowser: _propTypes["default"].bool,
  setOpenFileBrowser: _propTypes["default"].func,
  draggableElement: _propTypes["default"].func,
  whileDraggingElement: _propTypes["default"].func,
  multipleFileUploader: _propTypes["default"].bool,
  whileDraggingElementClassName: _propTypes["default"].string,
  mainContainerClassName: _propTypes["default"].string,
  acceptableFileType: _propTypes["default"].string,
  inputId: _propTypes["default"].string,
  inputName: _propTypes["default"].string
});
var _default = DragDropFileUpload;
exports["default"] = _default;
//# sourceMappingURL=DragDropFileUpload.js.map