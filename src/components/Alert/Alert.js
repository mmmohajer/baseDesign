import React from "react";
import cx from "classnames";

const Alert = ({ children, className, ...props }) => {
  return (
    <>
      <div className={cx("iswad_alert_container", className)} {...props}>
        {children}
      </div>
    </>
  );
};

export default Alert;
