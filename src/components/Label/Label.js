import React from "react";
import cx from "classnames";

const Label = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <>
      <label className={cx(className)} {...props} ref={ref}>
        {children}
      </label>
    </>
  );
});

export default Label;
