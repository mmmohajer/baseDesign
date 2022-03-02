import React, { useEffect, useRef } from "react";
import cx from "classnames";

import "../Navbar.scss";

const SubNavContainer = ({ children, className, isActive, ...props }) => {
  const SubNavContainerElement = useRef();

  useEffect(() => {
    if (isActive) {
      SubNavContainerElement.current.classList.add(
        "iswad_subNavContainer_active"
      );
    } else {
      SubNavContainerElement.current.classList.remove(
        "iswad_subNavContainer_active"
      );
    }
  }, [isActive]);
  return (
    <>
      <div
        ref={(el) => (SubNavContainerElement.current = el)}
        {...props}
        className={cx(
          "pos-abs pos-abs--lb z-100000 iswad_subNavContainer iswad_subNavContainer_noActive",
          className
        )}
      >
        {children}
      </div>
    </>
  );
};

export default SubNavContainer;
