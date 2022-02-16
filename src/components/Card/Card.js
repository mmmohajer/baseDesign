import React from "react";
import cx from "classnames";

import styles from "./Card.module.scss";
import IdentityCard from "./subs/IdentityCard"



const Card = ({info, type}) => {


    return (
        <div className={cx(
            "flex",
            "flex--jc--center",
            "flex--ai--center",
            "height-vh-full"
        )}>
            {type=="identity" &&
            <IdentityCard info={info}/>
            }
        </div>
    );
};

export default Card;