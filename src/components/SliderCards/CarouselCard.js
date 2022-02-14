import React from "react";
import cx from "classnames";

import DesktopCarouseCard from "./subs/DesktopCarouseCard";
import MobileCarouseCard from "./subs/MobileCarouseCard";
import styles from "./CarouselCard.module.scss";


const CarouselCard = () => {
    return (
        <div className={cx(
            "flex",
            "flex--jc--center",
            "flex--ai--center",

        )}>
            <DesktopCarouseCard />
            <MobileCarouseCard />
        </div>
    );
};

export default CarouselCard;