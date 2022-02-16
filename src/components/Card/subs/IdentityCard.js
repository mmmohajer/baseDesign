import React from "react";
import cx from "classnames";

import styles from "../Card.module.scss";
import Employee from "Images/js-Images/Employes/Employee.jpg";

function IdentityCard() {
  return (
    <div>
      <div
        className={cx(
          "pos-rel",
          "w-px-300",
          "height-px-350",
          "br-rad-px-5",
          styles.card
        )}
      >
        <div className={cx("pos-abs", "bgSilver", styles.imgBx)}>
          <img
            className={cx("pos-abs", "pos-abs--lt", "w-per-100")}
            src={Employee}
          />
        </div>
        <div
          className={cx(
            "pos-abs",
            "height-px-60",
            "text-center",
            styles.details
          )}
        >
          <h2 className={cx("fw-600", "fs-px-20")}>
            The Name <br />
            <span className={cx("fw-600", "fs-px-20", "block", "mt1")}>
              Programer
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default IdentityCard;
