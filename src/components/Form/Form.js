import React from "react";
import cx from "classnames";

const Form = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <>
      <form className={cx(className)} {...props} ref={ref}>
        {children}
      </form>
    </>
  );
});

export default Form;
