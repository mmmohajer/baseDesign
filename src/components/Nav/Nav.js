import React from "react";
import cx from "classnames";

import styles from "./Nav.module.scss";

const Nav = ({NavList}) => {
    console.log(NavList)
    return(
    <header id="header">
        <nav>
            <div className={cx(styles.logo)}> The Logo </div>
            <ul>
                {NavList.map((element) => (
                    <li><a href="#">{element}</a></li>
                ))}
            </ul>
        </nav>
    </header>
    );

};

export default Nav;
