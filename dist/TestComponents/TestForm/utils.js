"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lastNameValidators = exports.firstNameValidators = exports.emailValidators = void 0;
var firstNameValidators = [{
  type: "required",
  message: "First name is required"
}, {
  type: "minRequired",
  message: "First name must be at least 3 characters",
  minRequired: 3
}, {
  type: "maxRequired",
  message: "First name must be at less than 5 characters",
  maxRequired: 5
}];
exports.firstNameValidators = firstNameValidators;
var lastNameValidators = [{
  type: "required",
  message: "Last name is required"
}, {
  type: "minRequired",
  message: "Last name must be at least 3 characters",
  minRequired: 3
}, {
  type: "maxRequired",
  message: "Last must be at less than 5 characters",
  maxRequired: 5
}];
exports.lastNameValidators = lastNameValidators;
var emailValidators = [{
  type: "required",
  message: "Email is required"
}, {
  type: "email",
  message: "Must be a valid email address"
}];
exports.emailValidators = emailValidators;
//# sourceMappingURL=utils.js.map