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
      fullWidth,
      children,
      selectValue,
      setSelectValue,
      arrowIconFillColor,
      arrowIconStrokeColor,
      arrowIconScale,
      searchIconFillColor,
      searchIconStrokeColor,
      searchIconScale,
      showDefaultArrowDownIcon,
      showDefaultSearchIcon,
      openOptionsDownWard,
      selectIntialVal,
      placeHolder,
      isOptionsActive,
      setIsOptionsActive,
      className,
      defaultViewClassName,
      optionClassName,
      optinsContainerClassName,
      searchContainerClassName,
      inputSearchClassName,
      placeHolderClassName,
      ...props
    },
    ref
  ) => {
    const [filteredOptions, setFilteredOptions] = useState(options);
    const [curVal, setCurVal] = useState(selectIntialVal || options?.[0]?.shownText || '');
    const [showPlaceHolder, setShowPlaceHolder] = useState(false);

    useEffect(() => {
      if (placeHolder.length && !curVal.length) {
        setCurVal(placeHolder);
        setShowPlaceHolder(true);
      }
    }, [curVal]);

    return (
      <>
        <div
          className={cx('pos-rel', fullWidth && 'w-per-100', className, children)}
          {...props}
          ref={ref}>
          {!isOptionsActive ? (
            <div
              className={cx(defaultViewClassName)}
              onClick={() => setIsOptionsActive(!isOptionsActive)}>
              <span className={cx(showPlaceHolder && styles.placeHolderClassName)}>{curVal}</span>
            </div>
          ) : (
            <div className={cx('pos-rel', searchContainerClassName)}>
              <input
                type="text"
                className={cx('w-per-100', inputSearchClassName)}
                onChange={(e) =>
                  setFilteredOptions(() =>
                    options.filter((x) =>
                      x?.shownText?.toLowerCase()?.includes(e.target.value?.toLowerCase())
                    )
                  )
                }
              />
              {showDefaultSearchIcon && (
                <div className={cx(styles.iconSearch)}>
                  <Icon
                    type="search"
                    scale={searchIconScale}
                    fill={searchIconFillColor}
                    stroke={searchIconStrokeColor}
                    className={cx('mouse-hand')}
                  />
                </div>
              )}
            </div>
          )}
          <div
            className={cx(
              styles.optionsContainer,
              openOptionsDownWard ? styles.optionsContainerToDown : styles.optionsContainerToUp,
              isOptionsActive && styles.optionsContainerIsActive,
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
          {showDefaultArrowDownIcon && !isOptionsActive ? (
            <div className={cx(styles.arrowConrainer)}>
              <Icon
                type="down"
                fill={arrowIconFillColor}
                stroke={arrowIconStrokeColor}
                scale={arrowIconScale}
              />
            </div>
          ) : (
            ''
          )}
        </div>
      </>
    );
  }
);

Select.propTypes = {
  ...defaultPropTypes,
  options: PropTypes.array,
  fullWidth: PropTypes.bool,
  showDefaultSearchIcon: PropTypes.bool,
  showDefaultArrowDownIcon: PropTypes.bool,
  searchIconFillColor: PropTypes.string,
  searchIconStrokeColor: PropTypes.string,
  searchIconScale: PropTypes.number,
  arrowIconFillColor: PropTypes.string,
  arrowIconStrokeColor: PropTypes.string,
  arrowIconScale: PropTypes.number,
  openOptionsDownWard: PropTypes.bool,
  selectIntialVal: PropTypes.any,
  placeHolder: PropTypes.any,
  isOptionsActive: PropTypes.bool,
  setIsOptionsActive: PropTypes.func
};

Select.defaultProps = {
  ...defaultProps,
  fullWidth: false,
  showDefaultSearchIcon: true,
  showDefaultArrowDownIcon: true,
  searchIconFillColor: 'gray',
  searchIconStrokeColor: 'gray',
  searchIconScale: 0.8,
  arrowIconStrokeColor: 'gray',
  arrowIconFillColor: 'gray',
  arrowIconScale: 0.8,
  openOptionsDownWard: true,
  placeHolder: '',
  isOptionsActive: false
};

export default Select;
