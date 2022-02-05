import React from "react";
import cx from "classnames";

import styles from "./Header.module.scss";

import Logo from "./subs/Logo";
import Nav from "./subs/Nav";

const Header = ({ NavList }) => {
  return (
    <div
      className={cx(
        "w-per-100",
        "flex",
        "flex--jc--start",
        "flex--ai--center",
        "p2",
        "pos-rel",
        "br-bottom-solid-1",
        "br-color-third",
        "bgFourth"
      )}
    >
      <Logo />
      <Nav NavList={NavList} />
    </div>
  );
};

export default Header;
