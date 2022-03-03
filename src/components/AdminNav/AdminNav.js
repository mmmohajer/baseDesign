import React from "react";
import cx from "classnames";

const AdminNav = ({ children, isActive, className, ...props }) => {
  return (
    <>
      <div
        {...props}
        className={cx(
          "pos-fix pos-fix--lt height-vh-full of-y-auto flex flex--dir--col iswad_adminNav",
          isActive && "iswad_adminNav_active",
          className
        )}
      >
        {children}
      </div>
    </>
  );
};

export default AdminNav;
