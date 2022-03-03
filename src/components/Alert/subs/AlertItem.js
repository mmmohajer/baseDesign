import React from "react";
import cx from "classnames";

const AlertItem = ({ children, isActive, className, ...props }) => {
  return (
    <>
      <div
        className={cx(
          "iswad_alertItem",
          isActive && "iswad_alertItem_active",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </>
  );
};

export default AlertItem;
