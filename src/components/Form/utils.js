import PropTypes from "prop-types";

const arrayOfErrorValidators = [
  "required",
  "minRequired",
  "maxRequired",
  "email",
];

const validatorsShape = {
  type: PropTypes.oneOf(arrayOfErrorValidators).isRequired,
  message: PropTypes.string.isRequired,
  minRequired: PropTypes.number,
  maxRequired: PropTypes.number,
};

export const toBeValidatedFieldsShape = {
  input_name: PropTypes.string.isRequired,
  validators: PropTypes.arrayOf(PropTypes.shape(validatorsShape)),
  errorMessageHandler: PropTypes.func.isRequired,
  errorActivateHandler: PropTypes.func,
};

export const validate = (
  val,
  validator,
  minRequired = null,
  maxRequired = null
) => {
  validator = validator.toLowerCase();
  let validated = true;

  if (validator === "required") {
    if (!val) {
      validated = false;
    }
  }

  if (validator === "minrequired") {
    if (val?.length < minRequired) {
      validated = false;
    }
  }

  if (validator === "maxrequired") {
    if (val?.length > maxRequired) {
      validated = false;
    }
  }

  if (validator === "email") {
    validated = validateEmail(val);
  }

  return validated;
};

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
