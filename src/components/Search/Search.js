import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import defaultPropsMap from 'Constants/defaultProps';
const { defaultProps, defaultPropTypes } = defaultPropsMap;

import Icon from '../Icon';

const Search = React.forwardRef(
  (
    {
      closable = true,
      iconFillColor = 'gray',
      iconStrokeColor = 'gray',
      className,
      containerClassName,
      ...props
    },
    ref
  ) => {
    const [activeSearch, setActiveSearch] = useState(false);

    useEffect(() => {
      if (!closable) {
        setActiveSearch(true);
      }
    }, [closable]);

    return (
      <>
        <div className="flex">
          <div
            className={cx(
              'min-height-px-30 min-w-px-30 br-rad-px-50 bgWhite flex flex--jc--center flex--ai--center iswad_search_container',
              containerClassName
            )}>
            {closable ? (
              <Icon
                onClick={() => setActiveSearch(!activeSearch)}
                type="search"
                scale={0.8}
                fill={iconFillColor}
                stroke={iconStrokeColor}
                className="mouse-hand"
              />
            ) : (
              <Icon
                type="search"
                scale={0.8}
                fill={iconFillColor}
                stroke={iconStrokeColor}
                className={cx(closable && 'mouse-hand')}
              />
            )}
            <input
              type="search"
              className={cx(
                'iswad_search_input',
                activeSearch && 'iswad_search_input_active',
                className
              )}
              {...props}
            />
          </div>
        </div>
      </>
    );
  }
);

Search.propTypes = {
  ...defaultPropTypes,
  closable: PropTypes.bool,
  iconFillColor: PropTypes.string,
  iconStrokeColor: PropTypes.string
};

export default Search;
