import React, { useCallback } from "react";
import cx from "classnames";

import { validate } from "./utils";

const Form = React.forwardRef(
  ({ onSubmit, toBeValidatedFields, className, children, ...props }, ref) => {
    const submitHandler = useCallback((e) => {
      e.preventDefault();
      if (toBeValidatedFields?.length) {
        toBeValidatedFields.forEach((item) => {
          let curElement = e.target[item["input_name"]];
          for (let idx = 0; idx < item["validators"].length; idx++) {
            let validator = item["validators"][idx]?.type;
            let minRequired = item["validators"][idx]?.minRequired;
            let maxRequired = item["validators"][idx]?.maxRequired;
            if (validator) {
              if (
                !validate(curElement.value, validator, minRequired, maxRequired)
              ) {
                item?.errorMessageHandler(item["validators"][idx]?.message);
                item?.errorActivateHandler(true);
                break;
              }
            }
          }
        });
      }
      onSubmit();
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

export default Form;
