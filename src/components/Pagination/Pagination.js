import React, { useState, useEffect } from "react";
import cx from "classnames";

import Icon from "Components/Icon";

const Pagination = ({
  numberOfShownPages,
  numberOfTotalPages,
  currentPage,
  setCurrentPage,
  showFirstLastIcon,
}) => {
  const [shownPages, setShownPages] = useState([]);

  const calcShownPage = (curPage) => {
    let count = 1;
    const localArray = [curPage];
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
    setShownPages(localArray);
  };

  useEffect(() => {
    calcShownPage(currentPage);
  }, [currentPage]);

  return (
    <>
      <div className="flex w-per-100 flex--jc--center flex--ai--center iswad_pagination">
        {showFirstLastIcon && !shownPages.includes(1) ? (
          <div
            className="flex flex--jc--center flex--ai--center mouse-hand"
            onClick={() => setCurrentPage(1)}
          >
            <Icon type="doubleLeft" scale={0.8} />
          </div>
        ) : (
          ""
        )}
        {shownPages.map((p, idx) => (
          <div
            className={cx(
              "mouse-hand iswad_pagination_item",
              p === currentPage && "iswad_pagination_item_active"
            )}
            key={idx}
            onClick={() => {
              setCurrentPage(p);
            }}
          >
            {p}
          </div>
        ))}
        {showFirstLastIcon && !shownPages.includes(numberOfTotalPages) ? (
          <div
            className="flex flex--jc--center flex--ai--center mouse-hand"
            onClick={() => setCurrentPage(numberOfTotalPages)}
          >
            <Icon type="doubleRight" scale={0.8} />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Pagination;
