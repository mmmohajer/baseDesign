export const firstNameValidators = [
  { type: "required", message: "First name is required" },
  {
    type: "minRequired",
    message: "First name must be at least 3 characters",
    minRequired: 3,
  },
  {
    type: "maxRequired",
    message: "First name must be at less than 5 characters",
    maxRequired: 5,
  },
];

export const lastNameValidators = [
  { type: "required", message: "Last name is required" },
  {
    type: "minRequired",
    message: "Last name must be at least 3 characters",
    minRequired: 3,
  },
  {
    type: "maxRequired",
    message: "Last must be at less than 5 characters",
    maxRequired: 5,
  },
];

export const emailValidators = [
  { type: "required", message: "Email is required" },
  {
    type: "email",
    message: "Must be a valid email address",
  },
];

export const passwordValidators = [
  { type: "required", message: "Password is required" },
  {
    type: "minRequired",
    message: "PAssword must be at least 3 characters",
    minRequired: 3,
  },
  {
    type: "maxRequired",
    message: "Password must be at less than 8 characters",
    maxRequired: 8,
  },
];

export const repeatedPasswordValidators = (toBeSameFieldVal) => [
  {
    type: "same",
    message: "Password and repeated password fields must be the same.",
    toBeSameFieldVal,
  },
];
