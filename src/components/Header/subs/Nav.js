import React from "react";

import { menuToggleHandler } from "../utils";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const navList = ["Home", "About", "Services"];
const navSublist = {
  Services: ["App Development", "Software Development"],
  About: ["Team", "Work"],
};

function Nav() {
  return (
    <>
      <DesktopNav navList={navList} navSublist={navSublist} />

      <div
        className="hamburger-menu-container show-flex-in-sm-xsm"
        onClick={menuToggleHandler}
      >
        <div id="hamburger-menu-icon" className="hamburger-menu-icon"></div>
      </div>

      <MobileNav navList={navList} navSublist={navSublist} />
    </>
  );
}

export default Nav;
