import React from "react";
import cx from "classnames";

const Tr = ({ children, className, ...props }) => {
  return (
    <>
      <div className={cx("flex iswad_tr", className)} {...props}>
        {children}
      </div>
    </>
  );
};

export default Tr;
