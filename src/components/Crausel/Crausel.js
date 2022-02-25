import React, { useState, useEffect, useCallback, useRef } from "react";
import cx from "classnames";

import styles from "./Crausel.module.scss";

const Crausel = () => {
  const sliderContainer = useRef();
  const items = [0, 1, 2, 3, 4, 5];
  const [activeIndices, setActiveIndices] = useState([5, 0, 1]);

  const getNextActiveIdx = (idx) => {
    return idx + 1 < items.length ? idx + 1 : 0;
  };

  const getPrevActiveIdx = (idx) => {
    return idx - 1 >= 0 ? idx - 1 : items.length - 1;
  };

  const moveHandler = async (curActiveIdx) => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    sliderContainer.current.classList.add(styles.notransition);
    sliderContainer.current.classList.remove(styles.moveLeft);
    sliderContainer.current.classList.remove(styles.moveRight);
    const nextActiveIdx = getNextActiveIdx(curActiveIdx);
    const prevActiveIdx = getPrevActiveIdx(curActiveIdx);
    setActiveIndices([prevActiveIdx, curActiveIdx, nextActiveIdx]);
  };

  const goRight = useCallback(async () => {
    sliderContainer.current.classList.remove(styles.notransition);
    sliderContainer.current.classList.add(styles.moveRight);
    moveHandler(getNextActiveIdx(activeIndices[1]));
  });

  const goLeft = useCallback(async () => {
    sliderContainer.current.classList.remove(styles.notransition);
    sliderContainer.current.classList.add(styles.moveLeft);
    moveHandler(getPrevActiveIdx(activeIndices[1]));
  });

  return (
    <>
      <div>Crausel</div>
      <div className="w-per-100 of-x-hidden">
        <div
          className={cx("flex", styles.sliderContainer)}
          ref={(el) => (sliderContainer.current = el)}
        >
          {activeIndices.map((item, idx) => (
            <div
              key={idx}
              className="flex flex--jc--center flex--ai--center w-per-100 height-px-200 my2 bgRed"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <button onClick={goRight}>Right</button>
      <button onClick={goLeft}>Left</button>
    </>
  );
};

export default Crausel;
