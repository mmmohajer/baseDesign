import React, { useRef, useState } from "react";

import { menuToggleHandler } from "../utils";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import HamburgerIcon from "Components/HamburgerIcon";

const navList = ["Home", "About", "Services"];
const navSublist = {
  Services: ["App Development", "Software Development"],
  About: ["Team", "Work"],
};

function Nav() {
  const mobMenuContainer = useRef();
  const [hamburgerIconToggler, setHamburgerIconToggler] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <>
      <DesktopNav navList={navList} navSublist={navSublist} />

      <div className="show-flex-in-sm-xsm">
        <HamburgerIcon
          onOpenedIconClick={() =>
            menuToggleHandler(
              mobMenuContainer.current,
              setHamburgerIconToggler,
              menuIsOpen,
              setMenuIsOpen
            )
          }
          onClosedIconClick={() =>
            menuToggleHandler(
              mobMenuContainer.current,
              setHamburgerIconToggler,
              menuIsOpen,
              setMenuIsOpen
            )
          }
          iconToggler={hamburgerIconToggler}
        />
      </div>

      <MobileNav
        navList={navList}
        navSublist={navSublist}
        mobMenuContainer={mobMenuContainer}
      />
    </>
  );
}

export default Nav;
