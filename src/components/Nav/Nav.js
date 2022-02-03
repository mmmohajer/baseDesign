import React from "react";
import cx from "classnames";

import styles from "./Nav.module.scss";

const Nav = ({ NavList }) => {

  return (
    <header
      className={cx(
        "width--full",
        "flex",
        "flex--jc--start",
        "flex--ai--center",
        styles.header
      )}
    >
      <nav
        className={cx(
          "flex",
          "flex--ai--center",
          "width--full",
          "br-b-1",
          "br-st-bottom-solid",
          styles.nav
        )}
      >
        <div
          className={cx(
            "p1",
            "flex",
            "flex--jc--center",
            "flex--gr--1",
            "br-r-1",
            "br-st-right-solid",
            styles.logo
          )}
        >
          The Logo
        </div>
        <ul
          className={cx(
            "flex",
            "flex--jc--center",
            "flex--ai--center",
            "show-flex-in-md-lg",
            "flex--gr--3",
            styles.menuContainer
          )}
        >
          {NavList.map((element) => (
            <li className={cx("m1","px3", styles.menuListItem)}>
              <a href="#">{element}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
