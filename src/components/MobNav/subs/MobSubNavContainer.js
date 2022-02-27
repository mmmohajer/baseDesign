import React, { useEffect, useRef } from "react";
import cx from "classnames";

import "../MobNav.scss";

const MobSubNavContainer = ({ children, className, isActive, ...props }) => {
  const SubNavContainerElement = useRef();

  useEffect(() => {
    if (isActive) {
      SubNavContainerElement.current.classList.remove(
        "iswad_mobSubNavContainer_noActive"
      );
      SubNavContainerElement.current.classList.add(
        "iswad_mobSubNavContainer_active"
      );
    } else {
      SubNavContainerElement.current.classList.remove(
        "iswad_mobSubNavContainer_active"
      );
      SubNavContainerElement.current.classList.add(
        "iswad_mobSubNavContainer_noActive"
      );
    }
  }, [isActive]);
  return (
    <>
      <div
        ref={(el) => (SubNavContainerElement.current = el)}
        {...props}
        className={cx(
          "flex flex--dir--col iswad_mobSubNavContainer iswad_mobSubNavContainer_noActive",
          className
        )}
      >
        {children}
      </div>
    </>
  );
};

export default MobSubNavContainer;