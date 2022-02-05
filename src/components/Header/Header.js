import React from "react";
import cx from "classnames";

import styles from "./Header.module.scss";

import Logo from "./subs/Logo";
import Nav from "./subs/Nav";

const Header = ({ NavList }) => {
  return (
    <div className="w-per-100 flex flex--jc--between flex--ai--center pl2 pr2 pt2 pos-rel">
      <Logo />
      <Nav NavList={NavList} />
    </div>
  );
};

export default Header;
