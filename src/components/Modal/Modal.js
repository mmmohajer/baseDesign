import React from "react";
import cx from "classnames";

const Modal = ({ children, fullHeightclassName, className, ...props }) => {
  return (
    <>
      <div
        className={cx(
          "pos-fix pos-fix--lt w-per-100 height-vh-full bgFaded op-50 z-10000",
          fullHeightclassName
        )}
      ></div>
      <div
        className={cx(
          "pos-fix pos-fix--center bgRed w-per-100 flex flex--jc--center flex--ai--center z-100000",
          className
        )}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;
