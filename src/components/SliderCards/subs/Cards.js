import React from "react";
import cx from "classnames";

import styles from "../CarouselCard.module.scss";
import Card from "./Card";

function Cards({ListEmployes}) {
    return (
        <div className={cx(
            "w-per-100",
            "pos-rel",
            "flex",
            "flex--jc--start",
            "flex--ai--center",
            "mb4",
            "m8",
            styles.cardContainer
        )}>
            {ListEmployes.map((Employe,idx)=>(
                <React.Fragment key={idx}>
                    <Card Employe={Employe} />
                </React.Fragment>
            ))}

        </div>
    );
}

export default Cards;