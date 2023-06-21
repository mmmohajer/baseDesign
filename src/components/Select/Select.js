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
      selectIntialShownText,
      placeholder,
      isOptionsActive,
      setIsOptionsActive,
      className,
      defaultViewClassName,
      optionClassName,
      optinsContainerClassName,
      searchContainerClassName,
      inputSearchClassName,
      placeHolderClassName,
      SelectClickableClassName,
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
            fullWidth && 'w-per-100',
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
                <div className={cx('ISWAD-Select-iconSearch')}>
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
              openOptionsDownWard
                ? 'ISWAD-Select-optionsContainerToDown'
                : 'ISWAD-Select-optionsContainerToUp',
              isOptionsActive && 'ISWAD-Select-optionsContainerIsActive',
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
            <div className={cx('ISWAD-Select-arrowConrainer')}>
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
  SelectClickableClassName: PropTypes.string
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
  placeholder: '',
  isOptionsActive: false,
  selectIntialShownText: '',
  SelectClickableClassName: 'w-per-100 height-vh-full bgWhite pos-fix pos-fix--lt op-10 z-10'
};

export default Select;
