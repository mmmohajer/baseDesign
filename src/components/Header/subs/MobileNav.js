import React, { useRef, useEffect } from "react";
import cx from "classnames";
import slugify from "slugify";

import styles from "../Header.module.scss";

import {
  toggleMobileSubMenuHandler,
  slugifyConfig,
  mobileSubMenuClickHandler,
} from "../utils";

import Anchor from "./Anchor";

function MobileNav({ navList, navSublist, mobMenuContainer }) {
  const mobileSubmenus = useRef({});
  return (
    <div
      ref={(el) => (mobMenuContainer.current = el)}
      className={cx(
        "pos-abs",
        "pos-abs--rt",
        "height-vh-full",
        "py2",
        "bgPrimary",
        "show-block-in-sm-xsm",
        "box-vh-full",
        "flex",
        "flex--dir--col",
        "flex--jc--center",
        "flex--ai--center",
        "w-per-80",
        "w-max-px-400",
        "z-100",
        styles.menu_mob_hr
      )}
    >
      <div
        className={cx(
          "br-bottom-solid-1",
          "pb2",
          "w-per-100",
          "flex",
          "flex--jc--center",
          "flex--ai--center"
        )}
      >
        <input
          type="text"
          placeholder="search"
          className={cx("w-per-80", "input")}
        />
      </div>
      <ul
        className={cx(
          "flex",
          "flex--dir--col",
          "flex--jc--center",
          "flex--ai--center",
          "br-bottom-solid-1",
          "mb3"
        )}
      >
        {navList.map((item, idx) => (
          <li
            key={idx}
            className={cx(
              "text-center",
              "br-all-1",
              "br-px-rad-10",
              "my1",
              "pl1",
              "pr1",
              "pt2",
              "pb2",
              "w-per-80",
              idx < navList.length - 1 && "br-bottom-dotted-1",
              styles.mobileMenuList
            )}
          >
            {item in navSublist ? (
              <>
                <div className="pos-rel">
                  <div
                    onClick={() =>
                      toggleMobileSubMenuHandler(mobileSubmenus.current[item])
                    }
                    className="mouse-hand"
                  >
                    {item}
                  </div>
                  <ul
                    className={cx(
                      "bgThird",
                      "w-per-100",
                      "bgFourth",
                      "flex",
                      "flex--jc--center",
                      "flex--dir--col",
                      "flex--ai--center",
                      "no-display"
                    )}
                    ref={(el) => (mobileSubmenus.current[item] = el)}
                  >
                    {navSublist[item].map((subItem, subIdx) => (
                      <li
                        key={subIdx}
                        className={cx(
                          "br-color-silver",
                          "w-per-80",
                          "ml-auto",
                          "mr-auto",
                          "text-center",
                          "py1",
                          "my1",
                          subIdx < navSublist[item].length - 1 &&
                            "br-bottom-dotted-1",
                          subIdx < navSublist[item].length - 1 && "pb2"
                        )}
                        onClick={() =>
                          mobileSubMenuClickHandler(mobMenuContainer)
                        }
                      >
                        <Anchor to={slugify(subItem, slugifyConfig)}>
                          {subItem}
                        </Anchor>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <div onClick={() => mobileSubMenuClickHandler(mobMenuContainer)}>
                <Anchor to={slugify(item, slugifyConfig)}>{item}</Anchor>
              </div>
            )}
          </li>
        ))}
      </ul>
      <ul
        className={cx(
          "flex",
          "flex--dir--col",
          "flex--jc--center",
          "flex--ai--center"
        )}
      >
        <li
          className={cx(
            "text-center",
            "br-all-1",
            "br-px-rad-10",
            "my1",
            "pl1",
            "pr1",
            "pt2",
            "pb2",
            "w-per-80",
            "br-bottom-dotted-1"
          )}
        >
          <Anchor to="login">Login</Anchor>
        </li>
        <li
          className={cx(
            "text-center",
            "br-all-1",
            "br-px-rad-10",
            "my1",
            "pl1",
            "pr1",
            "pt2",
            "pb2",
            "w-per-80"
          )}
        >
          <Anchor to="register">Register</Anchor>
        </li>
      </ul>
    </div>
  );
}

export default MobileNav;
