import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import cx from 'classnames';
import PropTypes from 'prop-types';

import defaultPropsMap from 'Constants/defaultProps';
const { defaultProps, defaultPropTypes } = defaultPropsMap;

const Scroll = React.forwardRef(
  (
    {
      containerClassName,
      scrollContainerClassName,
      scrollClassName,
      scrollableElementId,
      scrollableContentId,
      scrollAxis,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const [parentRef, setParentRef] = useState();
    const [contentRef, setContentRef] = useState();
    const [leftOnDragStart, setLeftOnDragStart] = useState(0);
    const [topOnDragStart, setTopOnDragStart] = useState(0);
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [scrollStyle, setScrollStyle] = useState({});
    const [bounds, setBounds] = useState({ left: 0, top: 0, right: 0, bottom: 0 });

    useEffect(() => {
      const localParentDom = document.getElementById(scrollableElementId);
      const localContentDom = document.getElementById(scrollableContentId);
      if (localParentDom) {
        setParentRef(localParentDom);
      }
      if (localContentDom) {
        setContentRef(localContentDom);
      }
    }, []);

    useEffect(() => {
      if (parentRef && contentRef) {
        if (scrollAxis === 'x') {
          setScrollPercentage((parentRef.clientWidth / contentRef.clientWidth) * 100);
        }
        if (scrollAxis === 'y') {
          setScrollPercentage((parentRef.clientHeight / contentRef.clientHeight) * 100);
        }
      }
    }, [parentRef, contentRef]);

    useEffect(() => {
      if (scrollPercentage) {
        if (scrollAxis === 'x') {
          setScrollStyle({ width: `${scrollPercentage}%` });
        }
        if (scrollAxis === 'y') {
          setScrollStyle({ height: `${scrollPercentage}%` });
        }
      }
    }, [scrollPercentage]);

    useEffect(() => {
      if (parentRef && scrollStyle) {
        const remainingToTheEnd =
          parentRef?.clientWidth - (parentRef?.clientWidth * scrollPercentage) / 100;
        if (scrollAxis === 'x') {
          setBounds({ left: 0, top: 0, right: remainingToTheEnd, bottom: 0 });
        }
        if (scrollAxis === 'y') {
          setBounds({ left: 0, top: 0, right: 0, bottom: remainingToTheEnd });
        }
      }
    }, [parentRef, scrollStyle]);

    const handleDragging = (e) => {
      if (scrollAxis === 'x') {
        const curScrollLeft = parentRef?.scrollLeft;
        parentRef.scroll(curScrollLeft + e?.clientX - leftOnDragStart, 0);
      }
      if (scrollAxis === 'y') {
        const curScrollTop = parentRef?.scrollTop;
        parentRef.scroll(0, curScrollTop + e?.clientY - topOnDragStart);
      }
    };

    const handleDragStart = (e) => {
      setLeftOnDragStart(e?.clientX);
      setTopOnDragStart(e?.clientY);
    };

    return (
      <>
        <div className={cx(containerClassName)}>
          {children}
          <div className={scrollContainerClassName}>
            <Draggable
              axis={scrollAxis}
              disabled={disabled}
              bounds={bounds}
              defaultPosition={{ x: 0, y: 0 }}
              position={null}
              grid={[1, 1]}
              scale={1}
              onDrag={handleDragging}
              onStart={handleDragStart}>
              <div style={scrollStyle} className={cx(scrollClassName)}></div>
            </Draggable>
          </div>
        </div>
      </>
    );
  }
);

// Row.propTypes = {
//   ...defaultPropTypes,
//   showIn: PropTypes.array
// };

// Row.defaultProps = {
//   ...defaultProps,
//   showIn: ['xs', 'sm', 'md', 'lg']
// };

export default Scroll;
