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
