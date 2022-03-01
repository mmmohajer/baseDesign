import React, { useState } from "react";
import cx from "classnames";

import "./DesktopNav";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import HamburgerIcon from "Components/HamburgerIcon";

import styles from "./TestNavBar.module.scss";

const MENUES = ["Home", "About Us", "Services", "Contact Us"];
const SUB_MENUES = {
  "About Us": ["Team", "Support", "Careers"],
  Services: [
    "Software Development",
    "App Development",
    "MVP Development",
    "Web Design",
  ],
};

const HamIconCssConfig = {
  hamburgerMenuContainerBgColor: "transparent",
  hamburgerMenuContainerBorder: "none",
  hamburgerMenuContainerBorderRadius: 10,
  hamburgerMenuTopWidth: 15,
  hamburgerMenuMiddleWidth: 25,
  hamburgerMenuBottomWidth: 35,
  hamburgerMenuHeight: 4,
  hamburgerMenuBgColor: "white",
  hamburgerMenuSpace: 10,
  hamburgerMenuBorderRadius: 5,
  hamburgerMenuClosedIconWidth: 25,
  hamburgerMenuTransitionDuration: 0.3,
  hamburgerMenuContainerXPadding: 0,
  hamburgerMenuTransform: "scale(-1, 1)",
};

const TestNavBar = () => {
  const [activeSubMenues, setActiveSubMenues] = useState([]);
  const [activeMenu, setActiveMenu] = useState("Home");
  const [mobMenuIsActive, setMobMenuIsActive] = useState(false);
  const [iconToggler, setIconToggler] = useState(false);

  const addActiveSubMenu = (menu) => {
    setActiveSubMenues([menu]);
  };

  const removeActiveSubMenu = (menu) => {
    let localActiveSubMenues = [...activeSubMenues];
    localActiveSubMenues = localActiveSubMenues.filter((m) => m !== menu);
    setActiveSubMenues(localActiveSubMenues);
  };

  const menuClickHandler = (menu) => {
    setActiveSubMenues([]);
    if (Object.keys(SUB_MENUES).includes(menu)) {
      if (activeSubMenues.includes(menu)) {
        removeActiveSubMenu(menu);
      } else {
        addActiveSubMenu(menu);
      }
    } else {
      setActiveMenu(menu);
      setActiveSubMenues([]);
    }
  };

  const mobMenuClickHandler = (menu) => {
    menuClickHandler(menu);
    if (!Object.keys(SUB_MENUES).includes(menu)) {
      setIconToggler(true);
      setMobMenuIsActive(false);
    }
  };

  return (
    <>
      <div className="show-flex-in-lg">
        <DesktopNav
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          activeSubMenues={activeSubMenues}
          menuClickHandler={menuClickHandler}
          MENUES={MENUES}
          SUB_MENUES={SUB_MENUES}
        />
      </div>
      <div
        className={cx(
          "show-flex-in-md-sm-xsm",
          "w-per-100 flex flex--jc--between flex--ai--center pl2 pr2 height-px-60 br-bottom-solid-1 br-color-inverse bgInverse pos-rel"
        )}
      >
        <div className="w-px-200 height-px-50 bgSilver flex flex--jc--center flex--ai--center">
          Logo 200x50
        </div>
        <div className="z-100000">
          <HamburgerIcon
            cssConfig={HamIconCssConfig}
            onClick={() => setMobMenuIsActive(!mobMenuIsActive)}
            iconToggler={iconToggler}
            setIconToggler={setIconToggler}
          />
        </div>
        <div
          className={cx(
            "height-vh-full w-per-80 pos-fix pos-fix--rt flex flex--dir--col z-10000 iswad_mobNav",
            mobMenuIsActive && "iswad_mobNav_active"
          )}
        >
          <div className="height-px-60"></div>
          <MobileNav
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            activeSubMenues={activeSubMenues}
            mobMenuClickHandler={mobMenuClickHandler}
            MENUES={MENUES}
            SUB_MENUES={SUB_MENUES}
            mobMenuIsActive={mobMenuIsActive}
            setMobMenuIsActive={setMobMenuIsActive}
            iconToggler={iconToggler}
            setIconToggler={setIconToggler}
          />
        </div>
      </div>
    </>
  );
};

export default TestNavBar;
