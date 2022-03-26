import React from "react";
import cx from "classnames";

const AdminNav = React.forwardRef(
  ({ children, isActive, className, ...props }, ref) => {
    return (
      <>
        <div
          {...props}
          className={cx(
            "pos-fix pos-fix--lt height-vh-full of-y-auto flex flex--dir--col iswad_adminNav",
            isActive && "iswad_adminNav_active",
            className
          )}
          ref={ref}
        >
          {children}
        </div>
      </>
    );
  }
);

export default AdminNav;
