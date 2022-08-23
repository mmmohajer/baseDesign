import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import defaultPropsMap from 'Constants/defaultProps';
const { defaultProps, defaultPropTypes } = defaultPropsMap;

import Icon from '../Icon';

const Pagination = ({
  numberOfShownPages,
  numberOfTotalPages,
  currentPage,
  setCurrentPage,
  showFirstLastIcon,
  showPrevNextIcon,
  containerClassName,
  itemClassName,
  activeItemClassName,
  showDefaultPrevNextIcon,
  showDefaultFirstLastIcon,
  prevComp,
  nextComp,
  firstPageComp,
  lastPageCome
}) => {
  const [shownPages, setShownPages] = useState([]);

  const calcShownPage = (curPage) => {
    let localArray = [];
    if (numberOfShownPages < numberOfTotalPages) {
      let count = 1;
      localArray.push(curPage);
      let prevPage = curPage;
      let nextPage = curPage;
      while (count < numberOfShownPages) {
        prevPage -= 1;
        nextPage += 1;
        if (prevPage >= 1) {
          localArray.push(prevPage);
          count += 1;
        }
        if (nextPage <= numberOfTotalPages) {
          count += 1;
          localArray.push(nextPage);
        }
      }
      localArray.sort(function (a, b) {
        return a - b;
      });
    } else {
      for (let i = 1; i <= numberOfTotalPages; i++) {
        localArray.push(i);
      }
    }
    setShownPages(localArray);
  };

  useEffect(() => {
    calcShownPage(currentPage);
  }, [currentPage, numberOfTotalPages]);

  return (
    <>
      <div
        className={cx(
          'flex w-per-100 flex--jc--center flex--ai--center iswad_pagination',
          containerClassName
        )}>
        {showFirstLastIcon ? (
          <div
            className="flex flex--jc--center flex--ai--center mouse-hand"
            onClick={() => setCurrentPage(1)}>
            {showDefaultFirstLastIcon && <Icon type="doubleLeft" scale={0.8} />}
            {!showDefaultFirstLastIcon && firstPageComp ? firstPageComp() : ''}
          </div>
        ) : (
          ''
        )}
        {showPrevNextIcon ? (
          <div
            className="flex flex--jc--center flex--ai--center mouse-hand"
            onClick={() =>
              currentPage !== 1
                ? setCurrentPage(currentPage - 1)
                : setCurrentPage(numberOfTotalPages)
            }>
            {showDefaultPrevNextIcon && <Icon type="left" scale={0.8} />}
            {!showDefaultPrevNextIcon && prevComp ? prevComp() : ''}
          </div>
        ) : (
          ''
        )}
        {shownPages.map((p, idx) => (
          <div
            className={cx(
              'mouse-hand iswad_pagination_item',
              itemClassName,
              p === currentPage && 'iswad_pagination_item_active',
              p === currentPage && activeItemClassName
            )}
            key={idx}
            onClick={() => {
              setCurrentPage(p);
            }}>
            {p}
          </div>
        ))}
        {showPrevNextIcon ? (
          <div
            className="flex flex--jc--center flex--ai--center mouse-hand"
            onClick={() =>
              currentPage !== numberOfTotalPages
                ? setCurrentPage(currentPage + 1)
                : setCurrentPage(1)
            }>
            {showDefaultPrevNextIcon && <Icon type="right" scale={0.8} />}
            {!showDefaultPrevNextIcon && nextComp ? nextComp() : ''}
          </div>
        ) : (
          ''
        )}
        {showFirstLastIcon ? (
          <div
            className="flex flex--jc--center flex--ai--center mouse-hand"
            onClick={() => setCurrentPage(numberOfTotalPages)}>
            {showDefaultFirstLastIcon && <Icon type="doubleRight" scale={0.8} />}
            {!showDefaultFirstLastIcon && lastPageCome ? lastPageCome() : ''}
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

Pagination.propTypes = {
  ...defaultPropTypes,
  numberOfShownPages: PropTypes.number,
  numberOfTotalPages: PropTypes.number,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
  showFirstLastIcon: PropTypes.bool,
  showPrevNextIcon: PropTypes.bool,
  showDefaultFirstLastIcon: PropTypes.bool,
  showDefaultPrevNextIcon: PropTypes.bool,
  firstPageComp: PropTypes.func,
  lastPageCome: PropTypes.func,
  prevComp: PropTypes.func,
  nextComp: PropTypes.func
};

Pagination.defaultProps = {
  showFirstLastIcon: true,
  currentPage: 1,
  showPrevNextIcon: true,
  showDefaultFirstLastIcon: true,
  showDefaultPrevNextIcon: true
};

export default Pagination;
