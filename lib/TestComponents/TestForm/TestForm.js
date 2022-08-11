"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

require("./TestForm.scss");

var _Form = _interopRequireDefault(require("../../Components/Form"));

var _Input = _interopRequireDefault(require("../../Components/Input"));

var _Label = _interopRequireDefault(require("../../Components/Label"));

var _utils = require("./utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var TestForm = function TestForm() {
  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      firstName = _useState2[0],
      setFirstName = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      lastName = _useState4[0],
      setLastName = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      email = _useState6[0],
      setEmail = _useState6[1];

  var _useState7 = (0, _react.useState)(''),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      password = _useState8[0],
      setPassword = _useState8[1];

  var _useState9 = (0, _react.useState)(''),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      repeatedPassword = _useState10[0],
      setRepeatedPassword = _useState10[1];

  var _useState11 = (0, _react.useState)(''),
      _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
      fistNameErrorMessage = _useState12[0],
      setFirstNameErrorMessage = _useState12[1];

  var _useState13 = (0, _react.useState)(false),
      _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
      fistNameErrorIsActive = _useState14[0],
      setFirstNameErrorIsActive = _useState14[1];

  var _useState15 = (0, _react.useState)(''),
      _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
      lastNameErrorMessage = _useState16[0],
      setLastNameErrorMessage = _useState16[1];

  var _useState17 = (0, _react.useState)(false),
      _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
      lastNameErrorIsActive = _useState18[0],
      setLastNameErrorIsActive = _useState18[1];

  var _useState19 = (0, _react.useState)(''),
      _useState20 = (0, _slicedToArray2["default"])(_useState19, 2),
      emailErrorMessage = _useState20[0],
      setEmailErrorMessage = _useState20[1];

  var _useState21 = (0, _react.useState)(false),
      _useState22 = (0, _slicedToArray2["default"])(_useState21, 2),
      emailErrorIsActive = _useState22[0],
      setEmailErrorIsActive = _useState22[1];

  var _useState23 = (0, _react.useState)(''),
      _useState24 = (0, _slicedToArray2["default"])(_useState23, 2),
      passwordErrorMessage = _useState24[0],
      setPasswordErrorMessage = _useState24[1];

  var _useState25 = (0, _react.useState)(false),
      _useState26 = (0, _slicedToArray2["default"])(_useState25, 2),
      passwordErrorIsActive = _useState26[0],
      setPasswordErrorIsActive = _useState26[1];

  var _useState27 = (0, _react.useState)(''),
      _useState28 = (0, _slicedToArray2["default"])(_useState27, 2),
      repeatedPasswordErrorMessage = _useState28[0],
      setRepeatedPasswordErrorMessage = _useState28[1];

  var _useState29 = (0, _react.useState)(false),
      _useState30 = (0, _slicedToArray2["default"])(_useState29, 2),
      repeatedPasswordErrorIsActive = _useState30[0],
      setRepeatedPasswordErrorIsActive = _useState30[1];

  var toBeValidatedFields = [{
    input_name: 'first_name',
    validators: _utils.firstNameValidators,
    errorMessageHandler: setFirstNameErrorMessage,
    errorActivateHandler: setFirstNameErrorIsActive
  }, {
    input_name: 'last_name',
    validators: _utils.lastNameValidators,
    errorMessageHandler: setLastNameErrorMessage,
    errorActivateHandler: setLastNameErrorIsActive
  }, {
    input_name: 'email',
    validators: _utils.emailValidators,
    errorMessageHandler: setEmailErrorMessage,
    errorActivateHandler: setEmailErrorIsActive
  }, {
    input_name: 'password',
    validators: _utils.passwordValidators,
    errorMessageHandler: setPasswordErrorMessage,
    errorActivateHandler: setPasswordErrorIsActive
  }, {
    input_name: 'repeatedPassword',
    validators: (0, _utils.repeatedPasswordValidators)(password),
    errorMessageHandler: setRepeatedPasswordErrorMessage,
    errorActivateHandler: setRepeatedPasswordErrorIsActive
  }];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Form["default"], {
    className: "textWhite py1",
    toBeValidatedFields: toBeValidatedFields,
    onSubmit: function onSubmit() {
      return console.log('Yay');
    }
  }, /*#__PURE__*/_react["default"].createElement(_Label["default"], {
    className: "textBlack",
    htmlFor: "sample"
  }, "First Name"), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    type: "text",
    name: "first_name",
    fullWidth: true,
    placeholder: "Type your first name",
    value: firstName,
    onChange: function onChange(e) {
      setFirstName(e.target.value);
      setFirstNameErrorIsActive(false);
      setFirstNameErrorMessage('');
    },
    errorMessage: fistNameErrorMessage,
    errorIsActive: fistNameErrorIsActive
  }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    type: "text",
    name: "last_name",
    placeholder: "Type your last name",
    value: lastName,
    onChange: function onChange(e) {
      setLastName(e.target.value);
      setLastNameErrorIsActive(false);
      setLastNameErrorMessage('');
    },
    errorMessage: lastNameErrorMessage,
    errorIsActive: lastNameErrorIsActive
  }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    type: "text",
    name: "email",
    placeholder: "Type your email",
    value: email,
    onChange: function onChange(e) {
      setEmail(e.target.value);
      setEmailErrorIsActive(false);
      setEmailErrorMessage('');
    },
    errorMessage: emailErrorMessage,
    errorIsActive: emailErrorIsActive
  }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    type: "password",
    name: "password",
    placeholder: "Type your password",
    value: password,
    onChange: function onChange(e) {
      setPassword(e.target.value);
      setPasswordErrorIsActive(false);
      setPasswordErrorMessage('');
    },
    errorMessage: passwordErrorMessage,
    errorIsActive: passwordErrorIsActive
  }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    type: "password",
    name: "repeatedPassword",
    placeholder: "Repeat your password",
    value: repeatedPassword,
    onChange: function onChange(e) {
      setRepeatedPassword(e.target.value);
      setRepeatedPasswordErrorIsActive(false);
      setRepeatedPasswordErrorMessage('');
    },
    errorMessage: repeatedPasswordErrorMessage,
    errorIsActive: repeatedPasswordErrorIsActive
  }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    type: "checkbox",
    name: "sample3"
  }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    type: "radio",
    name: "sample4"
  }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    type: "submit",
    value: "Submit"
  })));
};

var _default = TestForm;
exports["default"] = _default;
//# sourceMappingURL=TestForm.js.map