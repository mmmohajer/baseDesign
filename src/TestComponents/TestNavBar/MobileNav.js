import React from "react";
import cx from "classnames";

import MobNav from "Components/MobNav";
import MobNavItem from "Components/MobNav/subs/MobNavItem";
import MobSubNavContainer from "Components/MobNav/subs/MobSubNavContainer";
import MobSubNavItem from "Components/MobNav/subs/MobSubNavItem";
import Icon from "Components/Icon";

import styles from "./TestNavBar.module.scss";

const MobileNav = ({
  activeMenu,
  setActiveMenu,
  activeSubMenues,
  menuClickHandler,
  MENUES,
  SUB_MENUES,
  mobMenuIsActive,
  setMobMenuIsActive,
  setIconToggler,
}) => {
  return (
    <>
      <MobNav
        className={cx(
          "flex--gr--1 w-per-100 bgInverse pl2 pr2 pt1 pb1 br-bottom-solid-1 br-color-inverse of-y-auto",
          styles.mobNavContainer,
          mobMenuIsActive && styles.mobNavContainer_active
        )}
      >
        {MENUES.map((menu, idx1) => (
          <MobNavItem
            className={cx(
              "my1 py1 textWhite br-rad-px-10 br-color-primary w-per-100"
            )}
            onClick={() => menuClickHandler(menu)}
            isActive={activeMenu === menu}
            key={idx1}
          >
            <div className="mouse-hand">{menu}</div>
            {menu in SUB_MENUES && (
              <MobSubNavContainer
                className={cx("bgInverse p1 br-rad-px-10 w-per-80")}
                onClick={() => setActiveMenu(menu)}
                isActive={activeSubMenues.includes(menu)}
              >
                {SUB_MENUES[menu].map((subMenu, idx2) => (
                  <MobSubNavItem
                    className={cx(
                      "br-rad-px-10 textWhite p1 w-per-100 flex flex--jc--center flex--ai--center mouse-hand"
                    )}
                    key={idx2}
                    onClick={() => {
                      setMobMenuIsActive(false);
                      setIconToggler(true);
                    }}
                  >
                    {subMenu}
                  </MobSubNavItem>
                ))}
              </MobSubNavContainer>
            )}
          </MobNavItem>
        ))}

        <div
          className={cx(
            "w-per-70 ml-auto mr-auto my2 height-px-10 br-rad-px-10",
            styles.separator
          )}
        ></div>

        <div className="flex flex--jc--center flex--ai--center pos-rel">
          <input type="text" className={cx("br-rad-px-10 fs-px-18 pl3 pr1")} />
          <div className={cx("pos-abs pos-abs--lt", styles.mob_search)}>
            <Icon
              type="search"
              scale={0.8}
              fill="gray"
              stroke="gray"
              className="mouse-hand"
            />
          </div>
        </div>
        <button
          className={cx(
            "bgPrimary my2 fs-px-16 br-hidden-1 br-color-primary mouse-hand br-rad-px-10 height-px-40 flex flex--ai--center flex--jc--center px2",
            styles.logRegBtn
          )}
        >
          Login/Register
        </button>
      </MobNav>
    </>
  );
};

export default MobileNav;
