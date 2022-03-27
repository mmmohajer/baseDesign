import React from "react";
import cx from "classnames";

import styles from "./Row.module.scss";

const Row = ({ className, children, ...props }) => {
  return (
    <>
      <div className={cx("row", className)} {...props}>
        {children}
      </div>
    </>
  );
};

export default Row;
