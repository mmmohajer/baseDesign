import React from "react";
import cx from "classnames";

const MobNav = React.forwardRef(
  ({ children, isActive, className, ...props }, ref) => {
    return (
      <>
        <div
          {...props}
          className={cx(
            "flex flex--dir--col flex--ai--center iswad_mobNav",
            isActive && "iswad_mobNav_active",
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

export default MobNav;
