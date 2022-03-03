import React from "react";
import cx from "classnames";

const AdminNavItem = ({ children, isActive, className, ...props }) => {
  return (
    <>
      <div
        className={cx(
          className,
          "iswad_adminNavItem",
          isActive && "iswad_adminNavItem_active"
        )}
        {...props}
      >
        {children}
      </div>
    </>
  );
};

export default AdminNavItem;
