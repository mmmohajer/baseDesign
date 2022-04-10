import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import defaultPropsMap from "Constants/defaultProps";
const { defaultProps, defaultPropTypes } = defaultPropsMap;
import { randomStr } from "Utils/utils";

const Input = React.forwardRef(
  (
    {
      type,
      className,
      fullWidth,
      errorMessage,
      errorIsActive,
      children,
      id,
      ...props
    },
    ref
  ) => {
    return (
      <>
        <div className="flex flex--dir--col iswad_input_container">
          <div className="iswad_input_field_container">
            <input
              className={cx("iswad_input", className, fullWidth && "w-per-100")}
              {...props}
              ref={ref}
              type={type}
              id={id || randomStr(16)}
            />
          </div>
          {errorMessage?.length ? (
            <div
              className={cx(
                "iswad_input_errorMessage",
                errorIsActive && "iswad_input_errorMessage_active"
              )}
            >
              <span>{errorMessage}</span>
            </div>
          ) : (
            ""
          )}
        </div>
      </>
    );
  }
);

Input.propTypes = {
  ...defaultPropTypes,
  type: PropTypes.oneOf([
    "button",
    "checkbox",
    "color",
    "date",
    "datetime-local",
    "email",
    "file",
    "hidden",
    "image",
    "month",
    "number",
    "password",
    "radio",
    "range",
    "reset",
    "search",
    "submit",
    "tel",
    "text",
    "time",
    "url",
    "week",
  ]),
  fullWidth: PropTypes.bool,
  errorMessage: PropTypes.string,
  errorIsActive: PropTypes.bool,
};

Input.defaultProps = {
  ...defaultProps,
  fullWidth: false,
  errorIsActive: true,
};

export default Input;
