import React from "react";
import cx from "classnames";

const Card = ({ children, className, ...props }) => {
  return (
    <>
      <div className={cx("flex", "flex--dir--col", className)} {...props}>
        {children}
      </div>
    </>
  );
};

export default Card;
