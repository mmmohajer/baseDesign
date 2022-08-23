import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import defaultPropsMap from 'Constants/defaultProps';
const { defaultProps, defaultPropTypes } = defaultPropsMap;

import Th from './subs/Th';
import Tr from './subs/Tr';
import Td from './subs/Td';
import Icon from '../Icon';
import Search from '../Search';
import Pagination from '../Pagination';

const Table = ({
  headLines,
  data,
  colWidth,
  tableWidth,
  isSelectable,
  search,
  selectedData,
  setSelectedData,
  sortIconColors,
  rowsPerPage,
  currentPage,
  setCurrentPage,
  showDefaultPagination,
  numberOfShownPages,
  tableClassName,
  tableHeadContainerClassName,
  paginationComponent,
  showFirstLastIconInPagination,
  showDefaultSortIcon,
  sortIcon,
  showDefaultSelectable,
  selectableComp,
  ...props
}) => {
  const [filter, setFilter] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [isChecked, setIsChecked] = useState({});
  const [allIsChecked, setAllIsChecked] = useState(false);
  const [isSorted, setIsSorted] = useState({});
  const [sortIconColor, setSortIconColor] = useState({});
  const [pageData, setPageData] = useState({});
  const [numberOfTotalPages, setNumberOfTotalPages] = useState(1);
  const [tableTotalWidth, setTableTotalWidth] = useState('100%');

  const calcTotalWidth = () => {
    let totalWidth = 0;
    let allCols = headLines.length;
    headLines.map((h) => {
      if (h?.width) {
        totalWidth += h.width;
        allCols -= 1;
      }
    });
    totalWidth += colWidth * allCols;
    if (isSelectable) {
      totalWidth += 25;
    }
    setTableTotalWidth(`${totalWidth}px`);
  };

  useEffect(() => {
    if (!tableWidth) {
      calcTotalWidth();
    } else {
      setTableTotalWidth(tableWidth);
    }
  }, []);

  useEffect(() => {
    if (headLines?.length) {
      const newObj = {};
      headLines?.forEach((item) => {
        if (item?.value) {
          newObj[item.value] = '';
        } else {
          newObj[item] = '';
        }
      });
      setFilter({ ...newObj });
    }
  }, [headLines]);

  const searchHandler = (e, head) => {
    const key = head?.value || head;
    const curFilter = { ...filter };
    if (key in curFilter) {
      curFilter[key] = e.target.value;
    } else {
      let newObj = { [key]: e.target.value };
      Object.assign(curFilter, newObj);
    }
    setFilter(curFilter);
  };

  useEffect(() => {
    setTimeout(() => {
      if (currentPage !== 1) {
        setCurrentPage(1);
      }
      let localSortedData = [...data];
      Object.keys(filter).forEach((filteredKey) => {
        if (filter[filteredKey].length) {
          localSortedData = localSortedData.filter((d) => {
            const curSearchElem = d[filteredKey]?.value || d[filteredKey];
            return curSearchElem.includes(filter[filteredKey]);
          });
        }
      });
      setSortedData(localSortedData);
      setFilteredData(localSortedData);
    }, 500);
  }, [filter]);

  useEffect(() => {
    const localIsChecked = { ...isChecked };
    let count = 0;
    if (data.length) {
      const localData = [...data];
      localData.map((d) => {
        d['iswad_table_idx'] = count;
        localIsChecked[count] = false;
        count += 1;
      });
      setFilteredData(localData);
      setSortedData(localData);
      setIsChecked(localIsChecked);
    }
  }, [data]);

  useEffect(() => {
    const localSortIconColor = { ...sortIconColor };
    headLines.map((h) => {
      if (h?.isSortable) {
        localSortIconColor[h?.value || h] = sortIconColors['REG'] || 'silver';
      }
    });
    setSortIconColor(localSortIconColor);
  }, [headLines]);

  useEffect(() => {
    const localSelectedData = [];
    if (Object.keys(isChecked).length) {
      Object.keys(isChecked).map((idx) => {
        if (isChecked[idx]) {
          const toBeAdded = {
            ...sortedData.find((d) => d['iswad_table_idx'] === parseInt(idx))
          };
          delete toBeAdded['iswad_table_idx'];
          localSelectedData.push(toBeAdded);
        }
      });
      setSelectedData(localSelectedData);
    }
  }, [isChecked]);

  const sortHandler = (head) => {
    setCurrentPage(1);
    const key = head?.value || head;
    let localIsSorted = { ...isSorted };
    const curKey = Object.keys(localIsSorted)[0] || false;
    if (curKey && key === curKey) {
      localIsSorted[key] += 1;
      if (localIsSorted[key] > 2) {
        localIsSorted[key] = 0;
      }
    } else {
      localIsSorted = {};
      localIsSorted[key] = 1;
    }
    setIsSorted(localIsSorted);

    const localSortIconColor = { ...sortIconColor };
    Object.keys(localSortIconColor).map((k) => {
      localSortIconColor[k] = sortIconColors['REG'] || 'silver';
    });
    if (localIsSorted[key] === 1) {
      localSortIconColor[key] = sortIconColors['ASC'] || 'green';
    } else if (localIsSorted[key] === 2) {
      localSortIconColor[key] = sortIconColors['DESC'] || 'red';
    } else {
      localSortIconColor[key] = sortIconColors['REG'] || 'silver';
    }
    setSortIconColor(localSortIconColor);
  };

  useEffect(() => {
    const curKey = Object.keys(isSorted)[0] || false;
    const localData = [...sortedData];
    if (curKey) {
      if (isSorted[curKey] === 1) {
        localData.sort((a, b) => {
          const firstVal = a[curKey]?.value || a[curKey];
          const secondVal = b[curKey]?.value || b[curKey];
          return firstVal > secondVal ? 1 : secondVal > firstVal ? -1 : 0;
        });
        setSortedData(localData);
      } else if (isSorted[curKey] === 2) {
        localData.sort((a, b) => {
          const firstVal = a[curKey]?.value || a[curKey];
          const secondVal = b[curKey]?.value || b[curKey];
          return firstVal > secondVal ? -1 : secondVal > firstVal ? 1 : 0;
        });
        setSortedData(localData);
      } else {
        setSortedData([...filteredData]);
      }
    }
  }, [isSorted]);

  useEffect(() => {
    setNumberOfTotalPages(Math.ceil(sortedData.length / rowsPerPage));
  }, [sortedData]);

  useEffect(() => {
    let localPageData = [...sortedData];
    if (rowsPerPage) {
      const firstIdx = (currentPage - 1) * rowsPerPage;
      const lastIdx = currentPage * rowsPerPage;
      localPageData = localPageData.slice(firstIdx, lastIdx);
    }
    setPageData(localPageData);
  }, [currentPage, sortedData, filteredData]);

  const headerSelectableOnChange = (e) => {
    setAllIsChecked(e.target.checked);
    const localIsChecked = { ...isChecked };
    Object.keys(localIsChecked).map((obj) => {
      localIsChecked[obj] = e.target.checked;
    });
    setIsChecked(localIsChecked);
  };

  const rowSelectableOnChange = (e) => {
    const localIsChecked = { ...isChecked };
    localIsChecked[curRow['iswad_table_idx']] = e.target.checked;
    setIsChecked(localIsChecked);
  };

  return (
    <>
      <div>
        <div className={cx('w-per-100 of-x-auto')}>
          <div
            className={cx(
              'flex flex--dir--col ml-auto mr-auto of-x-auto iswad_table',
              tableClassName
            )}
            {...props}>
            <Th className="">
              {isSelectable && (
                <Td style={{ width: `25px` }}>
                  {showDefaultSelectable && (
                    <input
                      type="checkbox"
                      checked={allIsChecked}
                      onChange={(e) => headerSelectableOnChange(e)}
                    />
                  )}
                  {!showDefaultSelectable && selectableComp
                    ? selectableComp({
                        checked: allIsChecked,
                        onChange: (e) => headerSelectableOnChange(e)
                      })
                    : ''}
                </Td>
              )}
              {headLines.map((head, idx) => (
                <Td className="" style={head?.width && { width: `${head.width}px` }} key={idx}>
                  <div className="flex w-per-100 flex--jc--between flex--ai--center">
                    <div
                      className={cx(
                        'w-per-100 iswad_table_headContainer',
                        tableHeadContainerClassName
                      )}>
                      <div className="m1">{head?.display || head}</div>
                      {head.hasSearch && (
                        <div className="">
                          {search ? (
                            search({
                              value: filter[head?.value || head] || '',
                              onChange: (e) => searchHandler(e, head)
                            })
                          ) : (
                            <Search
                              value={filter[head?.value || head] || ''}
                              onChange={(e) => searchHandler(e, head)}
                            />
                          )}
                        </div>
                      )}
                    </div>
                    {head?.isSortable && (
                      <div className="mouse-hand" onClick={() => sortHandler(head)}>
                        {showDefaultSortIcon ? (
                          <Icon
                            type="down"
                            fill={sortIconColor[head?.value || head]}
                            stroke={sortIconColor[head?.value || head]}
                          />
                        ) : (
                          ''
                        )}
                        {!showDefaultSortIcon && sortIcon
                          ? sortIcon({
                              isAsc: sortIconColor[head?.value || head] === sortIconColors['ASC'],
                              isDesc: sortIconColor[head?.value || head] === sortIconColors['DESC'],
                              notSorted:
                                sortIconColor[head?.value || head] === sortIconColors['REG']
                            })
                          : ''}
                      </div>
                    )}
                  </div>
                </Td>
              ))}
            </Th>
            {pageData?.length
              ? pageData.map((curRow, idx) => (
                  <Tr key={idx}>
                    {isSelectable && (
                      <Td style={{ width: `25px` }}>
                        <div>
                          {showDefaultSelectable && (
                            <input
                              type="checkbox"
                              checked={isChecked[curRow['iswad_table_idx']]}
                              onChange={(e) => rowSelectableOnChange(e)}
                            />
                          )}
                          {!showDefaultSelectable && selectableComp
                            ? selectableComp({
                                checked: isChecked[curRow['iswad_table_idx']],
                                onChange: (e) => rowSelectableOnChange(e)
                              })
                            : ''}
                        </div>
                      </Td>
                    )}
                    {headLines.map((curCol, idx1) => (
                      <Td key={idx1} style={curCol?.width && { width: `${curCol.width}px` }}>
                        {curRow[curCol?.value || curCol]?.display ||
                          curRow[curCol?.value || curCol] ||
                          curRow[curCol]}
                      </Td>
                    ))}
                  </Tr>
                ))
              : ''}
          </div>
        </div>
        {showDefaultPagination && numberOfTotalPages ? (
          <Pagination
            numberOfShownPages={numberOfShownPages || 5}
            currentPage={currentPage}
            numberOfTotalPages={numberOfTotalPages}
            setCurrentPage={setCurrentPage}
            showFirstLastIcon={showFirstLastIconInPagination}
          />
        ) : (
          ''
        )}
        {!showDefaultPagination && numberOfTotalPages && paginationComponent
          ? paginationComponent({
              numberOfShownPages: numberOfShownPages || 5,
              currentPage,
              numberOfTotalPages,
              setCurrentPage,
              showFirstLastIcon: showFirstLastIconInPagination
            })
          : ''}
      </div>
      <style>
        {`
        .iswad_td {
            width: ${colWidth}px;
          }

          .iswad_table {
            width: ${tableTotalWidth};
          }
          `}
      </style>
    </>
  );
};

Table.propTypes = {
  ...defaultPropTypes,
  headLines: PropTypes.array,
  data: PropTypes.arrayOf(PropTypes.object),
  colWidth: PropTypes.number,
  tableWidth: PropTypes.string,
  isSelectable: PropTypes.bool,
  search: PropTypes.func,
  selectedData: PropTypes.arrayOf(PropTypes.object),
  setSelectedData: PropTypes.func,
  sortIconColors: PropTypes.shape({
    ASC: PropTypes.string,
    DESC: PropTypes.string,
    REG: PropTypes.string
  }),
  rowsPerPage: PropTypes.number,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
  showDefaultPagination: PropTypes.bool,
  numberOfShownPages: PropTypes.number,
  paginationComponent: PropTypes.func,
  showFirstLastIconInPagination: PropTypes.bool,
  showDefaultSortIcon: PropTypes.bool,
  sortIcon: PropTypes.func,
  showDefaultSelectable: PropTypes.bool,
  selectableComp: PropTypes.func
};

Table.defaultProps = {
  colWidth: 300,
  isSelectable: false,
  sortIconColors: { ASC: 'green', DESC: 'red', REG: 'silver' },
  showDefaultPagination: true,
  numberOfShownPages: 5,
  showFirstLastIconInPagination: true,
  showDefaultSortIcon: true,
  showDefaultSelectable: true
};

export default Table;
