import React from "react";
import cx from "classnames";

import Anchor from "./Anchor";

import styles from "../Header.module.scss";

function Nav({ NavList }) {
  const menuToggleHandler = () => {
    const menuList = document.querySelector("#hamburger-menu-list");
    const menuIcon = document.querySelector("#hamburger-menu-icon");
    menuList.classList.toggle("hamburger-menu-hr-active");
    menuIcon.classList.toggle("hamburger-menu-icon");
    menuIcon.classList.toggle("hamburger-menu-closed-icon");
    const newDiv = document.createElement("DIV");
    newDiv.onclick = () => {
      menuList.classList.remove("hamburger-menu-hr-active");
      menuIcon.classList.add("hamburger-menu-icon");
      menuIcon.classList.remove("hamburger-menu-closed-icon");
      newDiv.parentNode.removeChild(newDiv);
    };
    newDiv.classList.add(styles.fullWindow);
    const body = document.querySelector("body");
    body.appendChild(newDiv);
  };
  return (
    <>
      <div
        className={cx(
          "flex",
          "flex--jc--between",
          "w-per-100",
          "flex--ai--center"
        )}
      >
        <ul
          className={cx(
            "flex",
            "flex--jc--start",
            "flex--ai--center",
            "show-flex-in-md-lg"
          )}
        >
          {NavList.map((item, idx) => (
            <li
              key={idx}
              className={cx(
                "pr2",
                "pl2",
                idx < NavList.length - 1 && "br-right-solid-1"
              )}
            >
              <Anchor>{item}</Anchor>
            </li>
          ))}
        </ul>

        <div
          className={cx(
            "flex",
            "flex--jc--center",
            "flex--ai--center",
            "show-flex-in-md-lg"
          )}
        >
          <ul className={cx("flex", "flex--jc--start", "flex--ai--center")}>
            <li className={cx("pr2", "pl2", "br-right-solid-1")}>
              <Anchor>Login</Anchor>
            </li>
            <li className={cx("pr2", "pl2")}>
              <Anchor>Register</Anchor>
            </li>
          </ul>
          <input
            type="text"
            placeholder="search"
            className={cx("w-per-80", "w-px-200")}
          />
        </div>
      </div>

      <div
        className="hamburger-menu-container show-flex-in-sm-xsm"
        onClick={menuToggleHandler}
      >
        <div id="hamburger-menu-icon" className="hamburger-menu-icon"></div>
      </div>

      <div
        id="hamburger-menu-list"
        className={cx(
          "hamburger-menu-hr",
          "pos-abs",
          "pos-abs--rt",
          "height-vh-full",
          "py2",
          "bgFourth",
          "show-block-in-sm-xsm",
          "box-vh-full",
          "flex",
          "flex--dir--col",
          "flex--jc--center",
          "flex--ai--center",
          "w-per-80",
          "w-max-px-400",
          "z-100"
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
          <input type="text" placeholder="search" className={cx("w-per-80")} />
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
          {NavList.map((item, idx) => (
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
                idx < NavList.length - 1 && "br-bottom-dotted-1",
                styles.mobileMenuList
              )}
            >
              <Anchor>{item}</Anchor>
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
            <Anchor>Login</Anchor>
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
              "w-per-80",
              "br-bottom-dotted-1"
            )}
          >
            <Anchor>Register</Anchor>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
