import React from "react";

import Anchor from "./Anchor";

function Nav({ NavList }) {
  const menuToggleHandler = () => {
    const menuList = document.querySelector("#hamburger-menu-list");
    const menuIcon = document.querySelector("#hamburger-menu-icon");
    menuList.classList.toggle("hamburger-menu-hr-active");
    menuIcon.classList.toggle("hamburger-menu-icon");
    menuIcon.classList.toggle("hamburger-menu-closed-icon");
  };
  return (
    <>
      <ul className="flex flex--jc--start show-flex-in-md-lg">
        {NavList.map((item, idx) => (
          <li key={idx} className="mx2">
            <Anchor>{item}</Anchor>
          </li>
        ))}
      </ul>

      <div
        className="hamburger-menu-container show-flex-in-sm-xsm"
        onClick={menuToggleHandler}
      >
        <div id="hamburger-menu-icon" className="hamburger-menu-icon"></div>
      </div>

      <div
        id="hamburger-menu-list"
        className="pos-abs pos-abs--rb bgPrimary pl8 pr8 op-70 hamburger-menu-hr show-block-in-sm-xsm box-vh-full"
      >
        <ul className="flex flex--ai--center flex--dir--col flex--jc--center">
          {NavList.map((item, idx) => (
            <li key={idx} className="w-per-100 text-center">
              <Anchor>{item}</Anchor>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Nav;
