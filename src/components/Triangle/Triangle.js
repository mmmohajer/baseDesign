import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { randomStr } from 'Utils/utils';

import defaultPropsMap from 'Constants/defaultProps';
const { defaultProps, defaultPropTypes } = defaultPropsMap;

import { cssConfigShape, cssDefaultConfig } from './utils';
import { css } from './styles';

const Triangle = React.forwardRef(
  ({ containerUID = randomStr(), cssConfig = cssDefaultConfig, className, ...props }, ref) => {
    const appliedCssConfig = { ...cssDefaultConfig, ...cssConfig };

    return (
      <>
        <div className={cx(`${containerUID}-triangleContainer`, className)}></div>
        <style>{css(appliedCssConfig, containerUID)}</style>
      </>
    );
  }
);

Triangle.propTypes = {
  ...defaultPropTypes,
  cssConfig: PropTypes.shape(cssConfigShape),
  containerUID: PropTypes.string
};

export default Triangle;
