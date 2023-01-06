import React, { useEffect } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { randomStr } from 'Utils/utils';

import defaultPropsMap from 'Constants/defaultProps';
const { defaultProps, defaultPropTypes } = defaultPropsMap;

import { cssClassMaps, cssConfigShape, cssDefaultConfig } from './utils';
import { css } from './styles';

const Ring = React.forwardRef(
  (
    {
      percentage,
      cssConfig,
      containerUID,
      showDefaultPercentageText,
      innerSectionComp,
      className,
      outerCircleClassName,
      innerCircleClassName,
      defaultPercentageTextClassName,
      ...props
    },
    ref
  ) => {
    const appliedCssConfig = { ...cssDefaultConfig, ...cssConfig };
    useEffect(() => {
      //
    }, [percentage]);
    return (
      <>
        <div className={cx(className)} {...props} ref={ref}>
          <div className="pos-rel inline-block">
            <div
              className={cx(
                `pos-rel br-rad-per-50 of-hidden ${containerUID}-outer-circle`,
                outerCircleClassName
              )}>
              <div className={cx(`iswad_ring_segment ${containerUID}-seg-0-90`)}></div>
              <div className={cx(`iswad_ring_segment ${containerUID}-seg-90-180`)}></div>
              <div className={cx(`iswad_ring_segment ${containerUID}-seg-180-270`)}></div>
              <div className={cx(`iswad_ring_segment ${containerUID}-seg-270-360`)}></div>
            </div>
            <div
              className={cx(
                `pos-abs pos-abs--center br-rad-per-50 ${containerUID}-inner-circle`,
                innerCircleClassName
              )}></div>
            {showDefaultPercentageText && (
              <div className={cx('pos-abs pos-abs--center', defaultPercentageTextClassName)}>
                {percentage}%
              </div>
            )}
            {!showDefaultPercentageText && innerSectionComp ? (
              <div className={cx('pos-abs pos-abs--center')}>{innerSectionComp()}</div>
            ) : (
              ''
            )}
          </div>
        </div>
        <style>{css(appliedCssConfig, containerUID, percentage)}</style>
      </>
    );
  }
);

Ring.propTypes = {
  ...defaultPropTypes,
  cssConfig: PropTypes.shape(cssConfigShape),
  containerUID: PropTypes.string,
  showDefaultPercentageText: PropTypes.bool,
  innerSectionComp: PropTypes.func
};

Ring.defaultProps = {
  ...defaultProps,
  cssConfig: cssDefaultConfig,
  containerUID: randomStr(),
  percentage: 100,
  showDefaultPercentageText: true,
  innerSectionComp: null
};

export default Ring;
