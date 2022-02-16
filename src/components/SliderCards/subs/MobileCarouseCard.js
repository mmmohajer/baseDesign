import React from "react";
import cx from "classnames";

import styles from "../CarouselCard.module.scss";
import Cards from "./Cards";
import Icon from "Components/Icon/Icon"
import {GoToLeft, GoToNext} from "../utils";

const ListEmployes = [
    {name :"marouane", Occupation : "Developer", Description : "Full Stack Developer"},
    {name :"hamza", Occupation : "Developer", Description : "Full Stack Developer"},
    {name :"soufiane", Occupation : "Developer", Description : "Full Stack Developer"},
    {name :"samire", Occupation : "Developer", Description : "Full Stack Developer"},
    {name :"achraf", Occupation : "Developer", Description : "Full Stack Developer"},
];

function MobileCarouseCard() {
    return (
        <div className={cx(
            "flex",
            "flex--jc--center",
            "flex--ai--center",
            "w-per-100",
            "br-all-solid-1",
            "br-color-black",
            "pos-rel",
            "show-flex-in-sm-xsm",
            styles.product
        )}>
            <div className={cx(
                "flex",
                "pos-abs",
                "flex--ai--center",
                styles.preBtn
            )} onClick={GoToLeft}>
                <Icon type="left" scale={3} />
            </div>
            <div className={cx(
                "flex",
                "pos-abs",
                "flex--ai--center",
                styles.nxtBtn
            )} onClick={GoToNext}>
                <Icon type="right" scale={3} />
            </div>


            <Cards  ListEmployes={ListEmployes}/>

        </div>


    );
}

export default MobileCarouseCard;