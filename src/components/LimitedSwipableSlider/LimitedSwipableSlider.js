import React, { useState, useEffect, useCallback, useRef } from 'react';
import Swipe from 'react-easy-swipe';
import cx from 'classnames';
import PropTypes from 'prop-types';

import defaultPropsMap from 'Constants/defaultProps';
const { defaultProps, defaultPropTypes } = defaultPropsMap;

import { randomStr } from 'Utils/utils';

const LimitedSwipableSlider = ({
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
  className,
  sliderContainerWidthMultiplier,
  isDraggable,
  isSwipable,
  showRightOfLastItem,
  swipeTolerance,
  containerUID,
  isVerticallyCenterAligned,
  ...props
}) => {
  const sliderContainer = useRef();

  const [activeIdx, setActiveIdx] = useState(0);
  const [xStart, setXStart] = useState(0);
  const [xEnd, setXEnd] = useState(-100000);
  const [mainWidthMultiplier, setMainWidthMultiplier] = useState(1);
  const [translateXVal, setTranslateXVal] = useState(0);

  const lengthOfEachItem = (sliderContainerWidthMultiplier / children.length) * 100;
  const sidesLength = (100 - lengthOfEachItem) / 2;
  const initialTranslateX = -((lengthOfEachItem - sidesLength) / sliderContainerWidthMultiplier);

  const getActiveIdx = (dir, idx) => {
    if (dir === 'right') {
      if (idx + 1 <= children.length - 1) {
        return idx + 1;
      } else {
        return children.length - 1;
      }
    }
    if (dir === 'left') {
      if (idx - 1 >= 0) {
        return idx - 1;
      } else {
        return 0;
      }
    }
  };

  const handleDragStart = (e) => {
    setXStart(e.clientX);
  };

  const handleDragEnd = (e) => {
    setXEnd(e.clientX);
  };

  const goRight = useCallback(() => {
    setActiveIdx(getActiveIdx('right', activeIdx));
  }, [activeIdx]);

  const goLeft = useCallback(() => {
    setActiveIdx(getActiveIdx('left', activeIdx));
  }, [activeIdx]);

  const goToItemWithNum = async (num) => {
    let cur_num = num - 1;
    if (cur_num > children.length - 1) {
      cur_num = children.length - 1;
    }
    if (cur_num < 0) {
      cur_num = 0;
    }
    setActiveIdx(cur_num);
  };

  useEffect(() => {
    if (activeIdx === 0) {
      setTranslateXVal(0);
    } else if (activeIdx === 1) {
      setTranslateXVal(initialTranslateX);
    } else if (activeIdx > 1 && activeIdx < children.length - 1) {
      setTranslateXVal(
        initialTranslateX - (lengthOfEachItem / sliderContainerWidthMultiplier) * (activeIdx - 1)
      );
    } else {
      if (showRightOfLastItem) {
        setTranslateXVal(-(activeIdx / children.length) * 100);
      } else {
        setTranslateXVal(-100 + 100 / mainWidthMultiplier);
      }
    }
  }, [activeIdx]);

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
      setMoveToItemWithNum(false);
    }
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

  useEffect(() => {
    if (children && !sliderContainerWidthMultiplier) {
      setMainWidthMultiplier(`${children.length}`);
    }
    if (children && sliderContainerWidthMultiplier) {
      setMainWidthMultiplier(`${sliderContainerWidthMultiplier}`);
    }
  }, [children, sliderContainerWidthMultiplier]);

  return (
    <>
      <div className={cx('width-per-100 of-x-hidden', className)} {...props}>
        <div
          className={cx('flex', `${containerUID}`, `${containerUID}-move`)}
          ref={(el) => (sliderContainer.current = el)}>
          {children?.map((item, idx) => {
            if (isSwipable) {
              return (
                <Swipe
                  key={idx}
                  className={cx(
                    'flex flex--jc--center width-per-100',
                    cursorIsHandOnItem && 'mouse-hand',
                    isVerticallyCenterAligned && 'flex--ai--center'
                  )}
                  draggable={isDraggable}
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                  onSwipeRight={goLeft}
                  onSwipeLeft={goRight}
                  tolerance={swipeTolerance}>
                  {item}
                </Swipe>
              );
            } else {
              return (
                <div
                  key={idx}
                  className={cx(
                    'flex flex--jc--center flex--ai--center width-per-100',
                    cursorIsHandOnItem && 'mouse-hand'
                  )}
                  draggable={isDraggable}
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}>
                  {item}
                </div>
              );
            }
          })}
        </div>
      </div>

      <style>
        {`
          .${containerUID} {
            width: ${mainWidthMultiplier * 100}%;
            -webkit-transition: all ${transition_timing_function} ${transitionDuration}s;
            -moz-transition: all ${transition_timing_function} ${transitionDuration}s;
            -o-transition: all ${transition_timing_function} ${transitionDuration}s;
            transition: all ${transition_timing_function} ${transitionDuration}s;
            transform: translateX(${0});
          }

          .${containerUID}-move {
            transform: translateX(${translateXVal}%);
          }
        `}
      </style>
    </>
  );
};

LimitedSwipableSlider.propTypes = {
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
  isDraggable: PropTypes.bool,
  isSwipable: PropTypes.bool,
  showRightOfLastItem: PropTypes.bool,
  swipeTolerance: PropTypes.number,
  containerUID: PropTypes.string,
  isVerticallyCenterAligned: PropTypes.bool
};

LimitedSwipableSlider.defaultProps = {
  ...defaultProps,
  moveRight: false,
  setMoveRight: false,
  moveLeft: false,
  setMoveLeft: false,
  moveToItemWithNum: false,
  setMoveToItemWithNum: false,
  minXDifferenceToMove: 20,
  transitionDuration: 0.3,
  transition_timing_function: 'linear',
  cursorIsHandOnItem: true,
  notScrollableOnSwipableElement: true,
  isDraggable: true,
  isSwipable: true,
  showRightOfLastItem: false,
  swipeTolerance: 1,
  containerUID: randomStr(),
  isVerticallyCenterAligned: true
};

export default LimitedSwipableSlider;
