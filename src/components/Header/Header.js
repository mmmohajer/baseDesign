import React from "react";
import cx from "classnames";

import styles from "./Header.module.scss";

import Logo from "./subs/Logo";
import Nav from "./subs/Nav";

const Header = () => {
  return (
    <div
      className={cx(
        "w-per-100",
        "flex",
        "flex--jc--start",
        "flex--ai--center",
        "pl2",
        "pr2",
        "pt1",
        "pb1",
        "pos-rel",
        "br-bottom-solid-1",
        "br-color-primary",
        "bgPrimary"
      )}
    >
      <Logo />
      <Nav />
    </div>
  );
};

export default Header;
