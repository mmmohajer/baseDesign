import React, { useState, useEffect, useCallback, useRef } from 'react';
import cx from 'classnames';
import Swipe from 'react-easy-swipe';
import PropTypes from 'prop-types';

import { randomStr } from 'Utils/utils';
import defaultPropsMap from 'Constants/defaultProps';
const { defaultProps, defaultPropTypes } = defaultPropsMap;

const NewLimitedSwipeableSlider = React.forwardRef(
  (
    {
      className,
      arrayOfChildren,
      containerUID,
      transitionDuration,
      transition_timing_function,
      isSwipable,
      isVerticallyCenterAligned,
      isDraggable,
      cursorIsHandOnItem,
      minXDifferenceToMove,
      swipeTolerance,
      children,
      ...props
    },
    ref
  ) => {
    const containerRef = useRef();

    const [totalWidth, setTotalWidth] = useState(0);
    const [arrayOfWidths, setArrayOfWidths] = useState([]);
    const [containerTranslateX, setContainerTranslateX] = useState(0);
    const [xStart, setXStart] = useState(0);
    const [xEnd, setXEnd] = useState(-100000);
    const [activeIdx, setActiveIdx] = useState(0);
    const [showRight, setShowRight] = useState(false);
    const [showLeft, setShowLeft] = useState(false);

    const handleDragStart = (e) => {
      setXStart(e.clientX);
    };

    const handleDragEnd = (e) => {
      setXEnd(e.clientX);
    };

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

    // const goRight = useCallback(() => {
    //   setActiveIdx(getActiveIdx('right', activeIdx));
    // }, [activeIdx]);

    // const goLeft = useCallback(() => {
    //   setActiveIdx(getActiveIdx('left', activeIdx));
    // }, [activeIdx]);

    useEffect(() => {
      if (arrayOfChildren?.length) {
        let curTotalWidth = 0;
        const localArrayOfWidths = [];
        arrayOfChildren.forEach((item) => {
          curTotalWidth += item.clientWidth;
          localArrayOfWidths.push(item.clientWidth);
        });
        setTotalWidth(curTotalWidth);
        setArrayOfWidths(localArrayOfWidths);
      }
    }, [arrayOfChildren]);

    useEffect(() => {
      if (xEnd > -100000) {
        if (xEnd - xStart >= minXDifferenceToMove) {
          setShowLeft(true);
        }
        if (xEnd - xStart <= -minXDifferenceToMove) {
          setShowRight(true);
        }
      }
    }, [xEnd]);

    useEffect(() => {
      if (showRight && containerRef?.current) {
        let toalWidthsDisplayingElements = 0;
        let count = 0;
        while (
          count < arrayOfWidths?.length &&
          toalWidthsDisplayingElements <= -containerTranslateX + containerRef.current.clientWidth
        ) {
          toalWidthsDisplayingElements += arrayOfWidths[count];
          count += 1;
        }
        if (count <= arrayOfWidths.length - 1) {
          toalWidthsDisplayingElements -= arrayOfWidths[count];
          setContainerTranslateX(-toalWidthsDisplayingElements);
          if (toalWidthsDisplayingElements > totalWidth - containerRef.current.clientWidth) {
            setContainerTranslateX(-(totalWidth - containerRef.current.clientWidth));
          }
        } else {
          setContainerTranslateX(-(totalWidth - containerRef.current.clientWidth));
        }
        setShowRight(false);
      }
    }, [showRight, containerRef?.current, totalWidth, arrayOfWidths, containerTranslateX]);

    return (
      <>
        <div className={cx('w-per-100', className)} {...props} ref={ref}>
          <div className="w-per-100 of-x-hidden flex" ref={(el) => (containerRef.current = el)}>
            <div className={cx('flex', `${containerUID}`)}>
              {children?.map((item, idx) => {
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
                      onDragStart={handleDragStart}
                      onDragEnd={handleDragEnd}
                      //   onSwipeRight={goLeft}
                      //   onSwipeLeft={goRight}
                      //     tolerance={swipeTolerance}
                    >
                      {item}
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
            transition: all .3s linear;
            transform: translateX(${containerTranslateX}px);
          }
        `}
        </style>
      </>
    );
  }
);

NewLimitedSwipeableSlider.propTypes = {
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
  swipeTolerance: PropTypes.number
};

NewLimitedSwipeableSlider.defaultProps = {
  ...defaultProps,
  transitionDuration: 3,
  transition_timing_function: 'linear',
  containerUID: randomStr(),
  isSwipable: true,
  isVerticallyCenterAligned: true,
  isDraggable: true,
  cursorIsHandOnItem: true,
  minXDifferenceToMove: 5,
  swipeTolerance: 1
};

export default NewLimitedSwipeableSlider;
