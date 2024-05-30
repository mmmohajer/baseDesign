import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import defaultPropsMap from 'Constants/defaultProps';
const { defaultProps, defaultPropTypes } = defaultPropsMap;

import Icon from '../Icon';

const Select = React.forwardRef(
  (
    {
      options,
      fullWidth = false,
      children,
      selectValue,
      setSelectValue,
      arrowIconFillColor = 'gray',
      arrowIconStrokeColor = 'gray',
      arrowIconScale = 0.8,
      searchIconFillColor = 'gray',
      searchIconStrokeColor = 'gray',
      searchIconScale = 0.8,
      showDefaultArrowDownIcon = true,
      showDefaultSearchIcon = true,
      openOptionsDownWard = true,
      selectIntialShownText = '',
      placeholder = '',
      isOptionsActive = false,
      setIsOptionsActive,
      className,
      defaultViewClassName,
      optionClassName,
      optinsContainerClassName,
      searchContainerClassName,
      inputSearchClassName,
      placeHolderClassName,
      SelectClickableClassName = 'width-per-100 height-vh-full bgWhite pos-fix pos-fix--lt op-10 z-10',
      iconSearchContainerClassName = '',
      optinsContainerToDownClassName = '',
      optinsContainerToUpClassName = '',
      optinsContainerIsActiveClassName = '',
      arrowContainerClassName = '',
      ...props
    },
    ref
  ) => {
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [curVal, setCurVal] = useState(selectIntialShownText);
    const [showPlaceHolder, setShowPlaceHolder] = useState(false);

    useEffect(() => {
      if (placeholder.length && !selectValue) {
        setCurVal(placeholder);
        setShowPlaceHolder(true);
      } else {
        setShowPlaceHolder(false);
      }
    }, [curVal]);

    useEffect(() => {
      let curOption;
      options?.forEach((item) => {
        if (item?.value && item.value === selectValue) {
          curOption = item.shownText;
        }
      });
      setCurVal(curOption);
    }, [selectValue, options]);

    useEffect(() => {
      setFilteredOptions(options);
    }, [options]);

    return (
      <>
        {isOptionsActive && (
          <div
            className={cx('SelectMainClickableZIndex', SelectClickableClassName)}
            onClick={() => {
              setIsOptionsActive(false);
              setFilteredOptions(options);
            }}
          />
        )}
        <div
          className={cx(
            'pos-rel SelectOptionsContainerZIndex',
            fullWidth && 'width-per-100',
            className,
            children
          )}
          {...props}
          ref={ref}>
          {!isOptionsActive ? (
            <div
              className={cx(defaultViewClassName)}
              onClick={() => setIsOptionsActive(!isOptionsActive)}>
              <span className={cx(showPlaceHolder && placeHolderClassName)}>{curVal}</span>
            </div>
          ) : (
            <div className={cx('pos-rel', searchContainerClassName)}>
              <input
                type="text"
                className={cx('width-per-100', inputSearchClassName)}
                onChange={(e) =>
                  setFilteredOptions(() =>
                    options.filter((x) =>
                      x?.shownText?.toLowerCase()?.includes(e.target.value?.toLowerCase())
                    )
                  )
                }
              />
              {showDefaultSearchIcon && (
                <div className={cx('ISWAD-Select-iconSearch', iconSearchContainerClassName)}>
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
              'ISWAD-Select-optionsContainer',
              openOptionsDownWard ? optinsContainerToDownClassName : optinsContainerToUpClassName,
              isOptionsActive && optinsContainerIsActiveClassName,
              optinsContainerClassName
            )}>
            {filteredOptions?.map((item, idx) => (
              <div
                className={cx('ISWAD-Select-option', optionClassName)}
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
            <div className={cx(arrowContainerClassName)}>
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
  selectIntialShownText: PropTypes.any,
  placeholder: PropTypes.any,
  isOptionsActive: PropTypes.bool,
  setIsOptionsActive: PropTypes.func,
  SelectClickableClassName: PropTypes.string,
  iconSearchContainerClassName: PropTypes.string,
  optinsContainerToDownClassName: PropTypes.string,
  optinsContainerToUpClassName: PropTypes.string,
  optinsContainerIsActiveClassName: PropTypes.string,
  arrowContainerClassName: PropTypes.string
};

export default Select;
