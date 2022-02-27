import React from "react";
import cx from "classnames";

const MobNav = ({ children, className, ...props }) => {
  return (
    <>
      <div
        {...props}
        className={cx("flex flex--dir--col flex--ai--center", className)}
      >
        {children}
      </div>
    </>
  );
};

export default MobNav;
