import React, { useState, useEffect, useCallback, useRef } from 'react';
import cx from 'classnames';
import Swipe from 'react-easy-swipe';
import PropTypes from 'prop-types';

import defaultPropsMap from 'Constants/defaultProps';
import {
  handleDrag,
  handleDragStart,
  handleDragEnd,
  leftSideSubstituteElementsInList,
  getArrayOfChildern,
  calculateArrayOfWidths,
  showRightHandler,
  buildActiveIndices,
  handleSubstitution,
  showLeftHandler
} from './utils';
const { defaultProps, defaultPropTypes } = defaultPropsMap;

const ResponsiveSwipeableSlider = React.forwardRef(
  (
    {
      containerUID,
      transitionDuration,
      transition_timing_function,
      isSwipable,
      isVerticallyCenterAligned,
      isDraggable,
      cursorIsHandOnItem,
      minXDifferenceToMove,
      swipeTolerance,
      rightSideActiveIndices,
      setRightSideActiveIndices,
      occupiedEachSidInPx,
      occupiedEachSidInPercentage,
      moveRight,
      setMoveRight,
      moveLeft,
      setMoveLeft,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const containerRef = useRef();
    const arrayOfChildrenRefs = useRef(new Array());

    const [totalWidth, setTotalWidth] = useState(0);
    const [arrayOfChildren, setArrayOfChildren] = useState([]);
    const [arrayOfWidths, setArrayOfWidths] = useState([]);
    const [containerTranslateX, setContainerTranslateX] = useState(0);
    const [xStart, setXStart] = useState(0);
    const [xEnd, setXEnd] = useState(-100000);
    const [showRight, setShowRight] = useState(false);
    const [showLeft, setShowLeft] = useState(false);
    const [hasNoTransition, setHasNoTransition] = useState(false);
    const [activeIndices, setActiveIndices] = useState([]);
    const [leftSideActiveIndices, setLeftSideActiveIndices] = useState([]);
    const [occupiedEachSidInPxState, setOccupiedEachSidInPxState] = useState([]);

    // Handle the drag
    useEffect(() => {
      handleDrag(xStart, xEnd, minXDifferenceToMove, setShowLeft, setShowRight);
    }, [xEnd]);

    // Handle the transition effect
    useEffect(() => {
      if (hasNoTransition) {
        setTimeout(() => {
          setHasNoTransition(false);
        }, [10]);
      }
    }, [hasNoTransition]);

    useEffect(() => {
      if (occupiedEachSidInPx && occupiedEachSidInPx > 0) {
        setOccupiedEachSidInPxState(occupiedEachSidInPx);
      } else if (occupiedEachSidInPercentage && containerRef?.current?.clientWidth) {
        setOccupiedEachSidInPxState(
          (containerRef.current.clientWidth * occupiedEachSidInPercentage) / 100
        );
      } else {
        setOccupiedEachSidInPxState(0);
      }
    }, [occupiedEachSidInPx, occupiedEachSidInPercentage, containerRef?.current]);

    // Get array of children
    useEffect(() => {
      getArrayOfChildern(arrayOfChildrenRefs, setArrayOfChildren);
    }, [arrayOfChildrenRefs?.current, activeIndices]);

    // Determine left part from the right side
    useEffect(() => {
      setLeftSideActiveIndices(leftSideSubstituteElementsInList(rightSideActiveIndices));
    }, [rightSideActiveIndices]);

    useEffect(() => {
      calculateArrayOfWidths(arrayOfChildren, setTotalWidth, setArrayOfWidths);
    }, [arrayOfChildren, activeIndices]);

    useEffect(() => {
      if (showRight && containerRef?.current) {
        showRightHandler(
          rightSideActiveIndices,
          setRightSideActiveIndices,
          setShowRight,
          arrayOfWidths,
          containerRef,
          setContainerTranslateX,
          transitionDuration,
          containerTranslateX,
          occupiedEachSidInPxState
        );
      }
    }, [showRight, containerRef?.current?.clientWidth, arrayOfWidths]);

    useEffect(() => {
      if (showLeft && containerRef?.current) {
        showLeftHandler(
          leftSideActiveIndices,
          setRightSideActiveIndices,
          setShowLeft,
          arrayOfWidths,
          containerRef,
          setContainerTranslateX,
          transitionDuration,
          containerTranslateX,
          occupiedEachSidInPxState
        );
      }
    }, [showLeft, containerRef?.current?.clientWidth, arrayOfWidths]);

    useEffect(() => {
      const localActiveIndices = buildActiveIndices(leftSideActiveIndices, rightSideActiveIndices);
      setActiveIndices({ ...localActiveIndices });
    }, [leftSideActiveIndices, rightSideActiveIndices]);

    useEffect(() => {
      handleSubstitution(
        activeIndices,
        setHasNoTransition,
        setContainerTranslateX,
        totalWidth,
        arrayOfWidths,
        occupiedEachSidInPxState
      );
    }, [activeIndices, totalWidth, arrayOfWidths]);

    useEffect(() => {
      if (moveRight) {
        setShowRight(true);
        setTimeout(() => {
          setMoveRight(false);
        }, 10);
      }
    }, [moveRight]);

    useEffect(() => {
      if (moveLeft) {
        setShowLeft(true);
        setTimeout(() => {
          setMoveLeft(false);
        }, 10);
      }
    }, [moveLeft]);

    return (
      <>
        <div className={cx('w-per-100', className)} {...props} ref={ref}>
          <div className="w-per-100 of-x-hidden flex" ref={(el) => (containerRef.current = el)}>
            <div className={cx('flex', `${containerUID}`, hasNoTransition && 'noTransition')}>
              {Object.keys(activeIndices)?.map((item, idx) => {
                if (isSwipable) {
                  return (
                    <Swipe
                      key={idx}
                      className={cx(
                        'w-per-100',
                        cursorIsHandOnItem && 'mouse-hand',
                        isVerticallyCenterAligned && 'flex--ai--center'
                      )}
                      draggable={isDraggable}
                      onDragStart={(e) => handleDragStart(e, setXStart)}
                      onDragEnd={(e) => handleDragEnd(e, setXEnd)}
                      onSwipeRight={() => setShowLeft(true)}
                      onSwipeLeft={() => setShowRight(true)}
                      tolerance={swipeTolerance}>
                      <div ref={(el) => (arrayOfChildrenRefs.current[item] = el)}>
                        {children[[activeIndices[item]]]}
                      </div>
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
                      {item}
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>

        <style>
          {`
          .${containerUID} {
            -webkit-transition: all ${transition_timing_function} ${transitionDuration}s;
            -moz-transition: all ${transition_timing_function} ${transitionDuration}s;
            -o-transition: all ${transition_timing_function} ${transitionDuration}s;
            transition: all ${transitionDuration}s linear;
            transform: translateX(${containerTranslateX}px);
          }
        `}
        </style>
      </>
    );
  }
);

ResponsiveSwipeableSlider.propTypes = {
  ...defaultPropTypes,
  transitionDuration: PropTypes.number,
  transition_timing_function: PropTypes.oneOf([
    'ease',
    'linear',
    'ease-in',
    'ease-out',
    'ease-in-out',
    'inherit'
  ]),
  containerUID: PropTypes.string,
  isSwipable: PropTypes.bool,
  isVerticallyCenterAligned: PropTypes.bool,
  isDraggable: PropTypes.bool,
  cursorIsHandOnItem: PropTypes.bool,
  minXDifferenceToMove: PropTypes.number,
  swipeTolerance: PropTypes.number,
  rightSideActiveIndices: PropTypes.array,
  setRightSideActiveIndices: PropTypes.func,
  occupiedEachSidInPx: PropTypes.number,
  occupiedEachSidInPercentage: PropTypes.number,
  moveLeft: PropTypes.bool,
  moveRight: PropTypes.bool,
  setMoveLeft: PropTypes.func,
  setMoveRight: PropTypes.func
};

ResponsiveSwipeableSlider.defaultProps = {
  ...defaultProps,
  transitionDuration: 0.3,
  transition_timing_function: 'linear',
  containerUID: 'test',
  isSwipable: true,
  isVerticallyCenterAligned: false,
  isDraggable: true,
  cursorIsHandOnItem: false,
  minXDifferenceToMove: 5,
  swipeTolerance: 1,
  occupiedEachSidInPx: 0,
  occupiedEachSidInPercentage: 0,
  moveRight: false,
  moveLeft: false
};

export default ResponsiveSwipeableSlider;
