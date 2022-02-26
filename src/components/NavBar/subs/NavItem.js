import React, { useRef, useEffect } from "react";
import cx from "classnames";

import "../Navbar.scss";

const NavItem = ({ children, className, isActive, ...props }) => {
  const navItemElement = useRef();

  useEffect(() => {
    if (isActive) {
      navItemElement.current.classList.add("iswad_navItem_active");
    }
  }, [isActive]);
  return (
    <>
      <div
        ref={(el) => (navItemElement.current = el)}
        {...props}
        className={cx(
          "flex flex--jc--center flex--ai--center mouse-hand pos-rel iswad_navItem",
          className
        )}
      >
        {children}
      </div>
    </>
  );
};

export default NavItem;
