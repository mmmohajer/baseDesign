import React from "react";
import cx from "classnames";

const Th = ({ children, className, ...props }) => {
  return (
    <>
      <div className={cx("flex iswad_th", className)} {...props}>
        {children}
      </div>
    </>
  );
};

export default Th;
