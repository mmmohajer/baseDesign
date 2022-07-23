"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _defaultProps = _interopRequireDefault(require("../../constants/defaultProps"));

var _utils = require("./utils");

var _excluded = ["onSubmit", "toBeValidatedFields", "className", "children"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var defaultProps = _defaultProps["default"].defaultProps,
    defaultPropTypes = _defaultProps["default"].defaultPropTypes;

var Form = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var onSubmit = _ref.onSubmit,
      toBeValidatedFields = _ref.toBeValidatedFields,
      className = _ref.className,
      children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var submitHandler = (0, _react.useCallback)(function (e) {
    e.preventDefault();
    var is_validated = true;

    if (toBeValidatedFields !== null && toBeValidatedFields !== void 0 && toBeValidatedFields.length) {
      toBeValidatedFields.forEach(function (item) {
        var curElement = e.target[item['input_name']];

        for (var idx = 0; idx < item['validators'].length; idx++) {
          var _item$validators$idx, _item$validators$idx2, _item$validators$idx3, _item$validators$idx4;

          var validator = (_item$validators$idx = item['validators'][idx]) === null || _item$validators$idx === void 0 ? void 0 : _item$validators$idx.type;
          var minRequired = (_item$validators$idx2 = item['validators'][idx]) === null || _item$validators$idx2 === void 0 ? void 0 : _item$validators$idx2.minRequired;
          var maxRequired = (_item$validators$idx3 = item['validators'][idx]) === null || _item$validators$idx3 === void 0 ? void 0 : _item$validators$idx3.maxRequired;
          var toBeSameFieldVal = (_item$validators$idx4 = item['validators'][idx]) === null || _item$validators$idx4 === void 0 ? void 0 : _item$validators$idx4.toBeSameFieldVal;

          if (validator) {
            if (!(0, _utils.validate)(curElement.value, validator, minRequired, maxRequired, toBeSameFieldVal)) {
              var _item$validators$idx5;

              item === null || item === void 0 ? void 0 : item.errorMessageHandler((_item$validators$idx5 = item['validators'][idx]) === null || _item$validators$idx5 === void 0 ? void 0 : _item$validators$idx5.message);

              if (item !== null && item !== void 0 && item.errorActivateHandler) {
                item.errorActivateHandler(true);
              }

              is_validated = false;
              break;
            }
          }
        }
      });
    }

    if (is_validated) {
      onSubmit();
    }
  });
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("form", (0, _extends2["default"])({
    className: (0, _classnames["default"])(className)
  }, props, {
    ref: ref,
    onSubmit: function onSubmit(e) {
      return submitHandler(e);
    }
  }), children));
});

Form.propTypes = _objectSpread(_objectSpread({}, defaultPropTypes), {}, {
  onSubmit: _propTypes["default"].func,
  toBeValidatedFields: _propTypes["default"].arrayOf(_propTypes["default"].shape(_utils.toBeValidatedFieldsShape).isRequired)
});
Form.defaultProps = _objectSpread({}, defaultProps);
var _default = Form;
exports["default"] = _default;
//# sourceMappingURL=Form.js.map