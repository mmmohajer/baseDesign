import React, { useState, useEffect, useRef } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import defaultPropsMap from 'Constants/defaultProps';
const { defaultProps, defaultPropTypes } = defaultPropsMap;

const Scroll = ({
  scrollableElementId,
  scrollableContentId,
  scrollAxis,
  containerClassName,
  scrollContainerClassName,
  scrollClassName,
  transition,
  updateRefs,
  children
}) => {
  const scrollRef = useRef();

  const [parentRef, setParentRef] = useState();
  const [contentRef, setContentRef] = useState();
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [scrollStyle, setScrollStyle] = useState({});

  useEffect(() => {
    window.addEventListener('resize', () => {
      setTimeout(() => {
        setParentRef('');
        setContentRef('');
        setTimeout(() => {
          const localParentDom = document.getElementById(scrollableElementId);
          const localContentDom = document.getElementById(scrollableContentId);
          if (localParentDom) {
            setParentRef(localParentDom);
          }
          if (localContentDom) {
            setContentRef(localContentDom);
          }
        }, 100);
      }, 100);
    });
  }, []);

  useEffect(() => {
    setParentRef('');
    setContentRef('');
    setTimeout(() => {
      const localParentDom = document.getElementById(scrollableElementId);
      const localContentDom = document.getElementById(scrollableContentId);
      if (localParentDom) {
        setParentRef(localParentDom);
      }
      if (localContentDom) {
        setContentRef(localContentDom);
      }
    }, 500);
  }, [updateRefs]);

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
    if (parentRef && scrollPercentage) {
      parentRef?.addEventListener('scroll', (e) => {
        if (scrollAxis === 'x') {
          const curScrollLeft = parentRef?.scrollLeft;
          const calculatedTranslateX = (scrollPercentage * curScrollLeft) / 100;
          scrollRef.current.style.transform = `translateX(${calculatedTranslateX}px)`;
        }
        if (scrollAxis === 'y') {
          const curScrollTop = parentRef?.scrollTop;
          const calculatedTranslateY = (scrollPercentage * curScrollTop) / 100;
          scrollRef.current.style.transform = `translateY(${calculatedTranslateY}px)`;
        }
      });
    }
  }, [parentRef, scrollPercentage]);

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

  return (
    <>
      <div className={cx(containerClassName)}>
        {children}
        {scrollPercentage < 100 && (
          <div className={scrollContainerClassName}>
            <div
              ref={(el) => (scrollRef.current = el)}
              style={{
                transition,
                ...scrollStyle
              }}
              className={cx(scrollClassName)}></div>
          </div>
        )}
      </div>
    </>
  );
};

Scroll.propTypes = {
  ...defaultPropTypes,
  scrollableElementId: PropTypes.string,
  scrollableContentId: PropTypes.string,
  scrollAxis: PropTypes.oneOf(['x', 'y']),
  containerClassName: PropTypes.string,
  scrollContainerClassName: PropTypes.string,
  scrollClassName: PropTypes.string,
  transition: PropTypes.string,
  updateRefs: PropTypes.bool
};

Scroll.defaultProps = {
  ...defaultProps,
  transition: 'all linear .1s',
  scrollAxis: 'x',
  updateRefs: true
};

export default Scroll;
