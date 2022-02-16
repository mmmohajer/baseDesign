import React from "react";
import cx from "classnames";

import styles from "../Card.module.scss";

function IdentityCard({info}) {
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
          {info.image}
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
            {info.name} <br />
            <span className={cx("fw-600", "fs-px-20", "block", "mt1")}>
              {info.Occupation}
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default IdentityCard;
