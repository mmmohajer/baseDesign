import React from "react";
import cx from "classnames";

const CarouselItem = ({ children, className, ...props }) => {
  return (
    <>
      <div className={cx(className)} {...props}>
        {children}
      </div>
    </>
  );
};

export default CarouselItem;