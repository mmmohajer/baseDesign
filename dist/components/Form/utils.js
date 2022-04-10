"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = exports.toBeValidatedFieldsShape = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var arrayOfErrorValidators = ["required", "minRequired", "maxRequired", "email", "same"];
var validatorsShape = {
  type: _propTypes["default"].oneOf(arrayOfErrorValidators).isRequired,
  message: _propTypes["default"].string.isRequired,
  minRequired: _propTypes["default"].number,
  maxRequired: _propTypes["default"].number
};
var toBeValidatedFieldsShape = {
  input_name: _propTypes["default"].string.isRequired,
  validators: _propTypes["default"].arrayOf(_propTypes["default"].shape(validatorsShape)),
  errorMessageHandler: _propTypes["default"].func.isRequired,
  errorActivateHandler: _propTypes["default"].func
};
exports.toBeValidatedFieldsShape = toBeValidatedFieldsShape;

var validate = function validate(val, validator) {
  var minRequired = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var maxRequired = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var toBeSameFieldVal = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  validator = validator.toLowerCase();
  var validated = true;

  if (validator === "required") {
    if (!val) {
      validated = false;
    }
  }

  if (validator === "minrequired") {
    if ((val === null || val === void 0 ? void 0 : val.length) < minRequired) {
      validated = false;
    }
  }

  if (validator === "maxrequired") {
    if ((val === null || val === void 0 ? void 0 : val.length) > maxRequired) {
      validated = false;
    }
  }

  if (validator === "email") {
    validated = validateEmail(val);
  }

  if (validator === "same") {
    if (val !== toBeSameFieldVal) {
      validated = false;
    }
  }

  return validated;
};

exports.validate = validate;

var validateEmail = function validateEmail(email) {
  return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};
//# sourceMappingURL=utils.js.map