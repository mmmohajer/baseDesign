import React from "react";
import cx from "classnames";

const NavBar = ({ children, className, ...props }) => {
  return (
    <>
      <div {...props} className={cx("w-per-100 flex", className)}>
        {children}
      </div>
    </>
  );
};

export default NavBar;
