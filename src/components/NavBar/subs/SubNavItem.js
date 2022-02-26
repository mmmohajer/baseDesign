import React from "react";
import cx from "classnames";

const SubNavItem = ({ children, className, ...props }) => {
  return (
    <>
      <div {...props} className={cx(className)}>
        {children}
      </div>
    </>
  );
};

export default SubNavItem;
