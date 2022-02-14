import React from "react";
import cx from "classnames";

import styles from "../CarouselCard.module.scss";


function Card({Employe}) {
    return (
        <div>
            <div className={
                cx(
                    "w-px-250",
                    "height-px-370",
                    "m4",
                    "p1",
                )}>
                <div
                    className={
                        cx(
                            "pos-rel",
                            "w-per-100",
                            "height-px-300",
                            'bgSilver',
                            "br-rad-px-30",
                            "of-y-hidden"
                        )}>
                    <span className={
                        cx(
                            "pos-abs",
                            "p1",
                            "br-rad-px-30",
                            "textPink",
                            "bgWhite",
                            "text-center",
                            styles.cardTitle
                        )}>
                        {Employe.Occupation}
                    </span>
                    <div className={
                        cx(
                            "w-per-100",
                            "height-per-100",
                            styles.ImageThumb
                        )}>

                    </div>
                </div>
                <div className={
                    cx(
                        "w-per-100",
                        "height-px-100",
                        "pt2",
                    )}>
                    <h2 className={cx(styles.name, "text-center")}>{Employe.name}</h2>
                    <p className={
                        cx(
                            "w-per-100",
                            "height-px-20",
                            "op-50",
                            "my1",
                            "of-y-hidden",
                            "text-center",
                            styles.Description
                        )}>
                        {Employe.Description}
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Card;