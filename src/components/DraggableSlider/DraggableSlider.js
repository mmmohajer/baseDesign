import React, { useState, useEffect, useCallback, useRef } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import defaultPropsMap from 'Constants/defaultProps';
const { defaultProps, defaultPropTypes } = defaultPropsMap;

import propTypes from 'prop-types';

const DraggableSlider = ({
  children,
  moveRight,
  setMoveRight,
  moveLeft,
  setMoveLeft,
  moveToItemWithNum,
  setMoveToItemWithNum,
  minXDifferenceToMove,
  initialTranslateX,
  moveLeftTranslateX,
  moveRightTranslateX,
  transitionDuration,
  transition_timing_function,
  cursorIsHandOnItem,
  className,
  ...props
}) => {
  const sliderContainer = useRef();

  const [activeIndices, setActiveIndices] = useState([children.length - 1, 0, 1]);
  const [xStart, setXStart] = useState(0);
  const [xEnd, setXEnd] = useState(-100000);
  const [yStart, setYStart] = useState(0);
  const [yEnd, setYEnd] = useState(-100000);

  const handleDragStart = (e) => {
    setXStart(e.clientX);
    setYStart(e.clientY);
  };

  const handleDragEnd = (e) => {
    setXEnd(e.clientX);
    setYEnd(e.clientY);
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
    sliderContainer.current.classList.add('ISWAD-Draggable-notransition');
    sliderContainer.current.classList.remove('ISWAD-Draggable-moveLeft');
    sliderContainer.current.classList.remove('ISWAD-Draggable-moveRight');
    const nextActiveIdx = getNextActiveIdx(curActiveIdx);
    const prevActiveIdx = getPrevActiveIdx(curActiveIdx);
    setActiveIndices([prevActiveIdx, curActiveIdx, nextActiveIdx]);
  };

  const multipleMoveHandler = async (curActiveIdx, dir) => {
    sliderContainer.current.classList.remove('ISWAD-Draggable-notransition');
    dir === 'right'
      ? sliderContainer.current.classList.add('ISWAD-Draggable-moveRight')
      : sliderContainer.current.classList.add('ISWAD-Draggable-moveLeft');
    await wait(transitionDuration * 1000);
    sliderContainer.current.classList.add('ISWAD-Draggable-notransition');
    sliderContainer.current.classList.remove('ISWAD-Draggable-moveLeft');
    sliderContainer.current.classList.remove('ISWAD-Draggable-moveRight');
    const nextActiveIdx = getNextActiveIdx(curActiveIdx);
    const prevActiveIdx = getPrevActiveIdx(curActiveIdx);
    setActiveIndices([prevActiveIdx, curActiveIdx, nextActiveIdx]);
  };

  const goRight = () => {
    sliderContainer.current.classList.remove('ISWAD-Draggable-notransition');
    sliderContainer.current.classList.add('ISWAD-Draggable-moveRight');
    moveHandler(getNextActiveIdx(activeIndices[1]));
  };

  const goLeft = () => {
    sliderContainer.current.classList.remove('ISWAD-Draggable-notransition');
    sliderContainer.current.classList.add('ISWAD-Draggable-moveLeft');
    moveHandler(getPrevActiveIdx(activeIndices[1]));
  };

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
  }, [xEnd, yEnd]);

  return (
    <>
      <div className={cx('w-per-100 of-x-hidden', className)} {...props}>
        <div
          className={cx('flex', 'ISWAD-Draggable-sliderContainer')}
          ref={(el) => (sliderContainer.current = el)}>
          {activeIndices.map((item, idx) => (
            <div
              key={idx}
              className={cx(
                'flex flex--jc--center flex--ai--center w-per-100',
                cursorIsHandOnItem && 'mouse-hand'
              )}
              draggable={true}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}>
              {children[item]}
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .${'ISWAD-Draggable-sliderContainer'} {
            -webkit-transition: all ${transition_timing_function} ${transitionDuration}s;
            -moz-transition: all ${transition_timing_function} ${transitionDuration}s;
            -o-transition: all ${transition_timing_function} ${transitionDuration}s;
            transition: all ${transition_timing_function} ${transitionDuration}s;
            transform: translateX(${initialTranslateX});
          }

          .${'ISWAD-Draggable-moveLeft'} {
            transform: translateX(${moveLeftTranslateX});
          }

          .${'ISWAD-Draggable-moveRight'} {
            transform: translateX(${moveRightTranslateX});
          }
        `}
      </style>
    </>
  );
};

DraggableSlider.propTypes = {
  ...defaultPropTypes,
  moveRight: PropTypes.bool,
  setMoveRight: PropTypes.func,
  moveLeft: PropTypes.bool,
  setMoveLeft: PropTypes.func,
  moveToItemWithNum: PropTypes.oneOfType([PropTypes.bool, propTypes.number]),
  setMoveToItemWithNum: PropTypes.func,
  minXDifferenceToMove: PropTypes.number,
  initialTranslateX: PropTypes.string,
  moveLeftTranslateX: PropTypes.string,
  moveRightTranslateX: PropTypes.string,
  transitionDuration: PropTypes.number,
  transition_timing_function: PropTypes.oneOf([
    'ease',
    'linear',
    'ease-in',
    'ease-out',
    'ease-in-out',
    'inherit'
  ]),
  cursorIsHandOnItem: PropTypes.bool
};

DraggableSlider.defaultProps = {
  ...defaultProps,
  moveRight: false,
  moveLeft: false,
  moveToItemWithNum: 1,
  minXDifferenceToMove: 100,
  initialTranslateX: '-33.33333%',
  moveLeftTranslateX: '0%',
  moveRightTranslateX: '-66.666666%',
  transitionDuration: 0.3,
  transition_timing_function: 'linear',
  cursorIsHandOnItem: true
};

export default DraggableSlider;
