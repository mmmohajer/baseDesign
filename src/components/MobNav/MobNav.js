import React from "react";
import cx from "classnames";

const MobNav = ({ children, isActive, className, ...props }) => {
  return (
    <>
      <div
        {...props}
        className={cx(
          "flex flex--dir--col flex--ai--center iswad_mobNav",
          isActive && "iswad_mobNav_active",
          className
        )}
      >
        {children}
      </div>
    </>
  );
};

export default MobNav;
