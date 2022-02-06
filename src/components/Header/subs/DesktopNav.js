import React from "react";
import cx from "classnames";

import styles from "../Header.module.scss";

import { toggleSubMenuHandler } from "../utils";

import Anchor from "./Anchor";

function DesktopNav({ navList, navSublist }) {
  return (
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
        {navList.map((item, idx) => (
          <li
            key={idx}
            className={cx(
              "pr2",
              "pl2",
              idx < navList.length - 1 && "br-right-solid-1"
            )}
          >
            {item in navSublist ? (
              <>
                <div className="pos-rel">
                  <div
                    onClick={() => toggleSubMenuHandler(item)}
                    className="mouse-hand"
                  >
                    {item}
                  </div>
                  <ul
                    className={cx(
                      "pos-abs",
                      "pos-abs--lb",
                      "bgFourth",
                      "min-w-px-200",
                      "flex",
                      "flex--jc--center",
                      "flex--dir--col",
                      "flex--ai--center",
                      "no-display",
                      "z-100",
                      styles.subMenuContainer
                    )}
                    id={`${item}SubMenu`}
                  >
                    {navSublist[item].map((subItem, subIdx) => (
                      <li
                        key={subIdx}
                        className={cx(
                          "mb1",
                          "p1",
                          "br-color-silver",
                          "w-per-100",
                          "text-center",
                          subIdx < navSublist[item].length - 1 &&
                            "br-bottom-solid-1",
                          subIdx < navSublist[item].length - 1 && "pb2"
                        )}
                      >
                        <Anchor>{subItem}</Anchor>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <Anchor>{item}</Anchor>
            )}
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
  );
}

export default DesktopNav;
