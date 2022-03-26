import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import defaultPropsMap from "Constants/defaultProps";
const { defaultProps, defaultPropTypes } = defaultPropsMap;

const Input = React.forwardRef(
  ({ type, className, fullWidth, children, ...props }, ref) => {
    return (
      <>
        <input
          className={cx(className, fullWidth && "w-per-100")}
          {...props}
          ref={ref}
          type={type}
        />
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
};

Input.defaultProps = {
  ...defaultProps,
  fullWidth: false,
};

export default Input;
