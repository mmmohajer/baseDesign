import React, { useState, useEffect } from "react";
import cx from "classnames";

import "./TestNavBar.scss";

import Icon from "Components/Icon";
import NavBar from "Components/NavBar";
import NavItem from "Components/NavBar/subs/NavItem";
import SubNavContainer from "Components/NavBar/subs/SubNavContainer";
import SubNavItem from "Components/NavBar/subs/SubNavItem";

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

const TestNavBar = () => {
  const [activeSubMenues, setActiveSubMenues] = useState([]);
  const [activeMenu, setActiveMenu] = useState("Home");
  const [activeSearch, setActiveSearch] = useState(false);

  const addActiveSubMenu = (menu) => {
    // const localActiveSubMenues = [...activeSubMenues];
    // localActiveSubMenues.push(menu);
    // setActiveSubMenues(localActiveSubMenues);
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

  useEffect(() => {
    console.log(activeSubMenues);
  }, [activeSubMenues]);

  return (
    <>
      <NavBar
        className={cx(
          "w-per-100 flex flex--jc--between flex--ai--center pl2 pr2 pt1 pb1 br-bottom-solid-1 br-color-inverse bgInverse"
        )}
      >
        <div className="flex flex--jc--start flex--ai--center">
          <div className="w-px-200 height-px-50 bgSilver flex flex--jc--center flex--ai--center">
            Logo 200x50
          </div>
          <div className="flex">
            {MENUES.map((menu, idx1) => (
              <NavItem
                className={cx(
                  "mx1 px1 flex flex--ai--center textWhite br-rad-px-10 height-px-40 br-color-primary"
                )}
                onClick={() => menuClickHandler(menu)}
                isActive={activeMenu === menu}
                key={idx1}
              >
                <div className="">{menu}</div>
                {menu in SUB_MENUES && (
                  <SubNavContainer
                    className={cx(
                      "bgInverse w-px-200 flex flex--jc--center flex--dir--col flex--ai--center br-rad-px-10"
                    )}
                    onClick={() => setActiveMenu(menu)}
                    isActive={activeSubMenues.includes(menu)}
                  >
                    {SUB_MENUES[menu].map((subMenu, idx2) => (
                      <SubNavItem
                        className={cx(
                          "br-rad-px-10 textWhite p1 w-per-100 flex flex--jc--center flex--ai--center"
                        )}
                        key={idx2}
                      >
                        {subMenu}
                      </SubNavItem>
                    ))}
                  </SubNavContainer>
                )}
              </NavItem>
            ))}
          </div>
        </div>

        <div className="flex flex--jc--center flex--ai--center">
          <div
            className={cx(
              "mr2 min-height-px-30 min-w-px-30 br-rad-px-50 bgWhite flex flex--jc--center flex--ai--center search"
            )}
          >
            <Icon
              onClick={() => setActiveSearch(!activeSearch)}
              type="search"
              scale={0.8}
              fill="gray"
              stroke="gray"
              className="mouse-hand"
            />
            <input
              type="text"
              className={cx(
                "br-rad-px-10 fs-px-18 searchInput",
                activeSearch && "searchInput_active pl1 pr1"
              )}
            />
          </div>
          <button
            className={cx(
              "show-flex-in-md-lg bgPrimary fs-px-16 br-hidden-1 br-color-primary btn-small mouse-hand br-rad-px-10 height-px-40 flex flex--ai--center flex--jc--center px2 logRegBtn"
            )}
          >
            Login/Register
          </button>
        </div>
      </NavBar>
    </>
  );
};

export default TestNavBar;
