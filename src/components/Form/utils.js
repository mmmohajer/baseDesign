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
