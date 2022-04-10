import React, { useCallback } from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import defaultPropsMap from "Constants/defaultProps";
const { defaultProps, defaultPropTypes } = defaultPropsMap;

import { validate, toBeValidatedFieldsShape } from "./utils";

const Form = React.forwardRef(
  ({ onSubmit, toBeValidatedFields, className, children, ...props }, ref) => {
    const submitHandler = useCallback((e) => {
      e.preventDefault();
      let is_validated = true;
      if (toBeValidatedFields?.length) {
        toBeValidatedFields.forEach((item) => {
          let curElement = e.target[item["input_name"]];
          for (let idx = 0; idx < item["validators"].length; idx++) {
            let validator = item["validators"][idx]?.type;
            let minRequired = item["validators"][idx]?.minRequired;
            let maxRequired = item["validators"][idx]?.maxRequired;
            let toBeSameFieldVal = item["validators"][idx]?.toBeSameFieldVal;
            if (validator) {
              if (
                !validate(
                  curElement.value,
                  validator,
                  minRequired,
                  maxRequired,
                  toBeSameFieldVal
                )
              ) {
                item?.errorMessageHandler(item["validators"][idx]?.message);
                item?.errorActivateHandler(true);
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

    return (
      <>
        <form
          className={cx(className)}
          {...props}
          ref={ref}
          onSubmit={(e) => submitHandler(e)}
        >
          {children}
        </form>
      </>
    );
  }
);

Form.propTypes = {
  ...defaultPropTypes,
  onSubmit: PropTypes.func,
  toBeValidatedFields: PropTypes.arrayOf(
    PropTypes.shape(toBeValidatedFieldsShape).isRequired
  ),
};

Form.defaultProps = {
  ...defaultProps,
};

export default Form;
