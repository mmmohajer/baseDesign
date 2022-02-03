import React from "react";
import cx from "classnames";

import styles from "./Nav.module.scss";

const Nav = ({ NavList }) => {
  console.log(NavList);
  return (
    <header
      className={cx(
        "width--full",
        "flex",
        "flex--jc--start",
        "flex--ai--center",
        "p1",
        styles.header
      )}
    >
      <nav
        className={cx(
          "flex",
          "flex--jc--between",
          "flex--ai--start",
          "width--full",
          styles.nav
        )}
      >
        <div
          className={cx(
            "flex",
            "flex--jc--center",
            "flex--ai--center",
            "br-per-rad-50",
            styles.logo
          )}
        >
          The Logo
        </div>
        <ul
          className={cx(
            "flex",
            "flex--jc--start",
            "flex--ai--center",
            "show-flex-in-md-lg",
            styles.menuContainer
          )}
        >
          {NavList.map((element) => (
            <li className={cx("m1", styles.menuListItem)}>
              <a href="#">{element}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
