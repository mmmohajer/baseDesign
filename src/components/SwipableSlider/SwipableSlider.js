import React, { useState, useEffect, useCallback, useRef } from 'react';
import Swipe from 'react-easy-swipe';
import cx from 'classnames';
import PropTypes from 'prop-types';

import defaultPropsMap from 'Constants/defaultProps';
const { defaultProps, defaultPropTypes } = defaultPropsMap;

import { randomStr } from 'Utils/utils';

const SwipableSlider = ({
  children,
  moveRight,
  setMoveRight,
  moveLeft,
  setMoveLeft,
  moveToItemWithNum,
  setMoveToItemWithNum,
  minXDifferenceToMove,
  notScrollableOnSwipableElement,
  transitionDuration,
  transition_timing_function,
  cursorIsHandOnItem,
  mainContainerWidthMultiplier,
  className,
  isDraggable,
  isSwipable,
  swipeTolerance,
  containerUID,
  ...props
}) => {
  const sliderContainer = useRef();

  const [activeIndices, setActiveIndices] = useState([children.length - 1, 0, 1]);
  const [xStart, setXStart] = useState(0);
  const [xEnd, setXEnd] = useState(-100000);

  const lengthOfEachItem = (mainContainerWidthMultiplier / 3) * 100;
  const sidesLength = (100 - lengthOfEachItem) / 2;
  const initialTranslateX = -((lengthOfEachItem - sidesLength) / mainContainerWidthMultiplier);
  const moveLeftTranslateX = initialTranslateX + 100 / 3;
  const moveRightTranslateX = initialTranslateX - 100 / 3;

  const handleDragStart = (e) => {
    setXStart(e.clientX);
  };

  const handleDragEnd = (e) => {
    setXEnd(e.clientX);
  };

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
    sliderContainer.current.classList.add(`${containerUID}-notransition`);
    sliderContainer.current.classList.remove(`${containerUID}-moveLeft`);
    sliderContainer.current.classList.remove(`${containerUID}-moveRight`);
    const nextActiveIdx = getNextActiveIdx(curActiveIdx);
    const prevActiveIdx = getPrevActiveIdx(curActiveIdx);
    setActiveIndices([prevActiveIdx, curActiveIdx, nextActiveIdx]);
  };

  const multipleMoveHandler = async (curActiveIdx, dir) => {
    sliderContainer.current.classList.remove(`${containerUID}-notransition`);
    dir === 'right'
      ? sliderContainer.current.classList.add(`${containerUID}-moveRight`)
      : sliderContainer.current.classList.add(`${containerUID}-moveLeft`);
    await wait(transitionDuration * 1000);
    sliderContainer.current.classList.add(`${containerUID}-notransition`);
    sliderContainer.current.classList.remove(`${containerUID}-moveLeft`);
    sliderContainer.current.classList.remove(`${containerUID}-moveRight`);
    const nextActiveIdx = getNextActiveIdx(curActiveIdx);
    const prevActiveIdx = getPrevActiveIdx(curActiveIdx);
    setActiveIndices([prevActiveIdx, curActiveIdx, nextActiveIdx]);
  };

  const goRight = useCallback(() => {
    sliderContainer.current.classList.remove(`${containerUID}-notransition`);
    sliderContainer.current.classList.add(`${containerUID}-moveRight`);
    moveHandler(getNextActiveIdx(activeIndices[1]));
  }, [activeIndices]);

  const goLeft = useCallback(() => {
    sliderContainer.current.classList.remove(`${containerUID}-notransition`);
    sliderContainer.current.classList.add(`${containerUID}-moveLeft`);
    moveHandler(getPrevActiveIdx(activeIndices[1]));
  }, [activeIndices]);

  const goToItemWithNum = async (num, curActiveIdx = activeIndices[1]) => {
    if (curActiveIdx < num - 1) {
      curActiveIdx += 1;
      multipleMoveHandler(curActiveIdx, 'right');
      await wait(transitionDuration * 1000 + 100);
      goToItemWithNum(num, curActiveIdx);
    } else if (curActiveIdx > num - 1) {
      curActiveIdx -= 1;
      multipleMoveHandler(curActiveIdx, 'left');
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

  useEffect(() => {
    if (xEnd > -100000) {
      if (xEnd - xStart >= minXDifferenceToMove) {
        goLeft();
      }
      if (xEnd - xStart <= -minXDifferenceToMove) {
        goRight();
      }
    }
  }, [xEnd]);

  return (
    <>
      <div className={cx('w-per-100 of-x-hidden', className)} {...props}>
        <div className={cx('flex', containerUID)} ref={(el) => (sliderContainer.current = el)}>
          {activeIndices.map((item, idx) => {
            if (isSwipable) {
              return (
                <Swipe
                  key={idx}
                  className={cx(
                    'flex flex--jc--center flex--ai--center w-per-100',
                    cursorIsHandOnItem && 'mouse-hand'
                  )}
                  draggable={isDraggable}
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                  onSwipeLeft={goRight}
                  onSwipeRight={goLeft}
                  tolerance={swipeTolerance}>
                  {children[item]}
                </Swipe>
              );
            } else {
              return (
                <div
                  key={idx}
                  className={cx(
                    'flex flex--jc--center flex--ai--center w-per-100',
                    cursorIsHandOnItem && 'mouse-hand'
                  )}
                  draggable={isDraggable}
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}>
                  {children[item]}
                </div>
              );
            }
          })}
        </div>
      </div>

      <style>
        {`
          .${containerUID} {
            width: ${mainContainerWidthMultiplier * 100}%;
            -webkit-transition: all ${transition_timing_function} ${transitionDuration}s;
            -moz-transition: all ${transition_timing_function} ${transitionDuration}s;
            -o-transition: all ${transition_timing_function} ${transitionDuration}s;
            transition: all ${transition_timing_function} ${transitionDuration}s;
            transform: translateX(${initialTranslateX}%);
          }

          .${`${containerUID}-moveLeft`} {
            transform: translateX(${moveLeftTranslateX}%);
          }

          .${`${containerUID}-moveRight`} {
            transform: translateX(${moveRightTranslateX}%);
          }

          .${`${containerUID}-notransition`} {
            -webkit-transition: none !important;
            -moz-transition: none !important;
            -o-transition: none !important;
            transition: none !important;
          }
        `}
      </style>
    </>
  );
};

SwipableSlider.propTypes = {
  ...defaultPropTypes,
  moveRight: PropTypes.bool,
  setMoveRight: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  moveLeft: PropTypes.bool,
  setMoveLeft: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  moveToItemWithNum: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  setMoveToItemWithNum: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  minXDifferenceToMove: PropTypes.number,
  transitionDuration: PropTypes.number,
  transition_timing_function: PropTypes.oneOf([
    'ease',
    'linear',
    'ease-in',
    'ease-out',
    'ease-in-out',
    'inherit'
  ]),
  cursorIsHandOnItem: PropTypes.bool,
  notScrollableOnSwipableElement: PropTypes.bool,
  mainContainerWidthMultiplier: PropTypes.number,
  isDraggable: PropTypes.bool,
  isSwipable: PropTypes.bool,
  swipeTolerance: PropTypes.number,
  containerUID: PropTypes.string
};

SwipableSlider.defaultProps = {
  ...defaultProps,
  moveRight: false,
  setMoveRight: false,
  moveLeft: false,
  setMoveLeft: false,
  moveToItemWithNum: false,
  setMoveToItemWithNum: false,
  minXDifferenceToMove: 100,
  transitionDuration: 0.3,
  transition_timing_function: 'linear',
  cursorIsHandOnItem: true,
  notScrollableOnSwipableElement: true,
  mainContainerWidthMultiplier: 3,
  isDraggable: true,
  isSwipable: true,
  swipeTolerance: 1,
  containerUID: randomStr()
};

export default SwipableSlider;
