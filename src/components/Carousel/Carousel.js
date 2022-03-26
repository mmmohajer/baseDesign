import React, { useState, useEffect, useCallback, useRef } from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import defaultPropsMap from "Constants/defaultProps";
const { defaultProps, defaultPropTypes } = defaultPropsMap;

import styles from "./Carousel.module.scss";
import propTypes from "prop-types";

const Carousel = ({
  children,
  moveRight,
  setMoveRight,
  moveLeft,
  setMoveLeft,
  moveToItemWithNum,
  setMoveToItemWithNum,
  transitionDuration,
  transition_timing_function,
}) => {
  const sliderContainer = useRef();
  const [activeIndices, setActiveIndices] = useState([children.length, 0, 1]);

  const getNextActiveIdx = (idx) => {
    return idx + 1 < children.length ? idx + 1 : 0;
  };

  const getPrevActiveIdx = (idx) => {
    return idx - 1 >= 0 ? idx - 1 : children.length - 1;
  };

  const wait = async (delay) => {
    return new Promise((resolve, reject) => setTimeout(resolve, delay));
  };

  const moveHandler = async (curActiveIdx) => {
    await wait(transitionDuration * 1000);
    sliderContainer.current.classList.add(styles.notransition);
    sliderContainer.current.classList.remove(styles.moveLeft);
    sliderContainer.current.classList.remove(styles.moveRight);
    const nextActiveIdx = getNextActiveIdx(curActiveIdx);
    const prevActiveIdx = getPrevActiveIdx(curActiveIdx);
    setActiveIndices([prevActiveIdx, curActiveIdx, nextActiveIdx]);
  };

  const multipleMoveHandler = async (curActiveIdx, dir) => {
    sliderContainer.current.classList.remove(styles.notransition);
    dir === "right"
      ? sliderContainer.current.classList.add(styles.moveRight)
      : sliderContainer.current.classList.add(styles.moveLeft);
    await wait(transitionDuration * 1000);
    sliderContainer.current.classList.add(styles.notransition);
    sliderContainer.current.classList.remove(styles.moveLeft);
    sliderContainer.current.classList.remove(styles.moveRight);
    const nextActiveIdx = getNextActiveIdx(curActiveIdx);
    const prevActiveIdx = getPrevActiveIdx(curActiveIdx);
    setActiveIndices([prevActiveIdx, curActiveIdx, nextActiveIdx]);
  };

  const goRight = () => {
    sliderContainer.current.classList.remove(styles.notransition);
    sliderContainer.current.classList.add(styles.moveRight);
    moveHandler(getNextActiveIdx(activeIndices[1]));
  };

  const goLeft = () => {
    sliderContainer.current.classList.remove(styles.notransition);
    sliderContainer.current.classList.add(styles.moveLeft);
    moveHandler(getPrevActiveIdx(activeIndices[1]));
  };

  const goToItemWithNum = async (num, curActiveIdx = activeIndices[1]) => {
    if (curActiveIdx < num - 1) {
      curActiveIdx += 1;
      multipleMoveHandler(curActiveIdx, "right");
      await wait(transitionDuration * 1000 + 100);
      goToItemWithNum(num, curActiveIdx);
    } else if (curActiveIdx > num - 1) {
      curActiveIdx -= 1;
      multipleMoveHandler(curActiveIdx, "left");
      await wait(transitionDuration * 1000 + 100);
      goToItemWithNum(num, curActiveIdx);
    }
  };

  useEffect(() => {
    if (moveRight) {
      goRight();
      setMoveRight(false);
    }
  }, [moveRight]);

  useEffect(() => {
    if (moveLeft) {
      goLeft();
      setMoveLeft(false);
    }
  }, [moveLeft]);

  useEffect(() => {
    if (moveToItemWithNum) {
      goToItemWithNum(moveToItemWithNum);
    }
    setMoveToItemWithNum(false);
  }, [moveToItemWithNum]);

  return (
    <>
      <div className="w-per-100 of-x-hidden">
        <div
          className={cx("flex", styles.sliderContainer)}
          ref={(el) => (sliderContainer.current = el)}
        >
          {activeIndices.map((item, idx) => (
            <div
              key={idx}
              className="flex flex--jc--center flex--ai--center w-per-100"
            >
              {children[item]}
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .${styles.sliderContainer} {
            -webkit-transition: all ${transition_timing_function} ${transitionDuration}s;
            -moz-transition: all ${transition_timing_function} ${transitionDuration}s;
            -o-transition: all ${transition_timing_function} ${transitionDuration}s;
            transition: all ${transition_timing_function} ${transitionDuration}s;
          }
        `}
      </style>
    </>
  );
};

Carousel.propTypes = {
  ...defaultPropTypes,
  moveRight: PropTypes.bool,
  setMoveRight: PropTypes.func,
  moveLeft: PropTypes.bool,
  setMoveLeft: PropTypes.func,
  moveToItemWithNum: PropTypes.oneOfType([PropTypes.bool, propTypes.number]),
  setMoveToItemWithNum: PropTypes.func,
  transitionDuration: PropTypes.number,
  transition_timing_function: PropTypes.oneOf([
    "ease",
    "linear",
    "ease-in",
    "ease-out",
    "ease-in-out",
    "inherit",
  ]),
};

Carousel.defaultProps = {
  ...defaultProps,
  moveRight: false,
  moveLeft: false,
  moveToItemWithNum: 1,
  transitionDuration: 0.3,
  transition_timing_function: "linear",
};

export default Carousel;
