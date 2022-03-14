import React from "react";
import cx from "classnames";

const AlertItem = ({ children, isActive, className, ...props }) => {
  return (
    <>
      <div
        className={cx(
          "iswad_alert_item",
          isActive && "iswad_alert_item_active",
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
