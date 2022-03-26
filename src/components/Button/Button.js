import React from "react";
import cx from "classnames";

const Button = React.forwardRef(
  ({ className, fullWidth, children, ...props }, ref) => {
    return (
      <>
        <button
          className={cx("mouse-hand", fullWidth && "w-per-100", className)}
          {...props}
          ref={ref}
        >
          {children}
        </button>
      </>
    );
  }
);

export default Button;
