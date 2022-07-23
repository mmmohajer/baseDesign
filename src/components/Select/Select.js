import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import defaultPropsMap from 'Constants/defaultProps';
const { defaultProps, defaultPropTypes } = defaultPropsMap;

import Icon from '../Icon';
import Search from '../Search';

import styles from './Select.module.scss';

const Select = React.forwardRef(
  (
    {
      options,
      className,
      optionClassName,
      fullWidth,
      children,
      selectValue,
      setSelectValue,
      arrowIconFillColor,
      arrowIconStrokeColor,
      arrowIconScale,
      searchIconFillColor,
      searchIconStrokeColor,
      optinsContainerClassName,
      ...props
    },
    ref
  ) => {
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [curVal, setCurVal] = useState('Select');
    const [isOptionsActive, setIsOptionsActive] = useState(false);

    useEffect(() => {
      setFilteredOptions(options);
    }, []);

    return (
      <>
        <div
          className={cx('pos-rel', fullWidth && 'w-per-100', className, children)}
          {...props}
          ref={ref}>
          {!isOptionsActive ? (
            <div className={cx(styles.select)} onClick={() => setIsOptionsActive(!isOptionsActive)}>
              {curVal}
            </div>
          ) : (
            <input
              type="search"
              closable={false}
              onChange={(e) =>
                setFilteredOptions(() =>
                  options.filter((x) =>
                    x?.shownText?.toLowerCase()?.includes(e.target.value?.toLowerCase())
                  )
                )
              }
            />
          )}
          <div
            className={cx(
              styles.optionContainer,
              isOptionsActive && styles.optionContainerIsActive,
              optinsContainerClassName
            )}>
            {filteredOptions?.map((item, idx) => (
              <div
                className={cx(styles.option, optionClassName)}
                key={idx}
                value={item?.value}
                onClick={() => {
                  setSelectValue(item.value);
                  setCurVal(item.shownText);
                  setIsOptionsActive(false);
                }}>
                {item?.shownText}
              </div>
            ))}
          </div>
          <div className={cx(styles.arrowConrainer)}>
            <Icon
              type="down"
              fill={arrowIconFillColor}
              stroke={arrowIconStrokeColor}
              scale={arrowIconScale}
            />
          </div>
        </div>
      </>
    );
  }
);

Select.propTypes = {
  ...defaultPropTypes,
  fullWidth: PropTypes.bool,
  options: PropTypes.array
};

Select.defaultProps = {
  ...defaultProps,
  fullWidth: false
};

export default Select;
