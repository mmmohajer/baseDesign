import React, { useState, useEffect, useRef } from "react";
import cx from "classnames";

import Th from "./subs/Th";
import Tr from "./subs/tr";
import Td from "./subs/Td";
import Icon from "Components/Icon";

const Table = ({
  headLines,
  data,
  colWidth,
  tableWidth,
  isSelectable,
  search,
  selectedData,
  setSelectedData,
  ...props
}) => {
  const tableRef = useRef();
  const [filter, setFilter] = useState({ first_name: "", last_name: "" });
  const [filteredData, setFilteredData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [isChecked, setIsChecked] = useState({});
  const [allIsChecked, setAllIsChecked] = useState(false);
  const [isSorted, setIsSorted] = useState({});
  const [sortIconColor, setSortIconColor] = useState({});

  const searchHandler = (e, head) => {
    const key = head?.value || head;
    const curFilter = { ...filter };
    curFilter[key] = e.target.value;
    setFilter(curFilter);

    setTimeout(() => {
      let localSortedData = [...data];
      localSortedData = localSortedData.filter((d) => {
        const curSearchElem = d[key]?.value || d[key];
        return curSearchElem.includes(e.target.value);
      });
      setSortedData(localSortedData);
      setFilteredData(localSortedData);
    }, 500);
  };

  useEffect(() => {
    const localIsChecked = { ...isChecked };
    let count = 0;
    if (data.length) {
      const localData = [...data];
      localData.map((d) => {
        d["iswad_table_idx"] = count;
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
        localSortIconColor[h?.value || h] = "silver";
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
            ...sortedData.find((d) => d["iswad_table_idx"] === parseInt(idx)),
          };
          delete toBeAdded["iswad_table_idx"];
          localSelectedData.push(toBeAdded);
        }
      });
      setSelectedData(localSelectedData);
    }
  }, [isChecked]);

  const sortHandler = (head) => {
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
      localSortIconColor[k] = "silver";
    });
    if (localIsSorted[key] === 1) {
      localSortIconColor[key] = "green";
    } else if (localIsSorted[key] === 2) {
      localSortIconColor[key] = "red";
    } else {
      localSortIconColor[key] = "silver";
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
          console.log(firstVal);
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

  return (
    <>
      <div className={cx("w-per-100 of-x-auto")}>
        <div
          className={cx(
            "flex flex--dir--col ml-auto mr-auto of-x-auto iswad_table"
          )}
          {...props}
        >
          <Th className="">
            {isSelectable && (
              <Td style={{ width: `25px` }}>
                <input
                  type="checkbox"
                  checked={allIsChecked}
                  onChange={(e) => {
                    setAllIsChecked(e.target.checked);
                    const localIsChecked = { ...isChecked };
                    Object.keys(localIsChecked).map((obj) => {
                      localIsChecked[obj] = e.target.checked;
                    });
                    setIsChecked(localIsChecked);
                  }}
                />
              </Td>
            )}
            {headLines.map((head, idx) => (
              <Td
                className=""
                style={head?.width && { width: `${head.width}px` }}
                key={idx}
              >
                <div className="flex w-per-100 flex--jc--between flex--ai--center">
                  <div className="w-per-100 iswad_table_headContainer">
                    <div className="m1">{head?.display || head}</div>
                    {head.hasSearch && (
                      <div className="">
                        {search ? (
                          search({
                            value: filter[head?.value || head],
                            onChange: (e) => searchHandler(e, head),
                          })
                        ) : (
                          <input
                            type="search"
                            value={filter[head?.value || head]}
                            onChange={(e) => searchHandler(e, head)}
                            className="iswad_table_search"
                          />
                        )}
                      </div>
                    )}
                  </div>
                  {head?.isSortable && (
                    <div
                      className="mouse-hand"
                      onClick={() => sortHandler(head)}
                    >
                      <Icon
                        type="down"
                        fill={sortIconColor[head?.value || head]}
                        stroke={sortIconColor[head?.value || head]}
                      />
                    </div>
                  )}
                </div>
              </Td>
            ))}
          </Th>
          {sortedData.map((curRow, idx) => (
            <Tr key={idx}>
              {isSelectable && (
                <Td style={{ width: `25px` }}>
                  <div>
                    <input
                      type="checkbox"
                      checked={isChecked[curRow["iswad_table_idx"]]}
                      onChange={(e) => {
                        const localIsChecked = { ...isChecked };
                        localIsChecked[curRow["iswad_table_idx"]] =
                          e.target.checked;
                        setIsChecked(localIsChecked);
                      }}
                    />
                  </div>
                </Td>
              )}
              {headLines.map((curCol, idx1) => (
                <Td
                  key={idx1}
                  style={curCol?.width && { width: `${curCol.width}px` }}
                >
                  {curRow[curCol?.value || curCol]?.display ||
                    curRow[curCol?.value || curCol] ||
                    curRow[curCol]}
                </Td>
              ))}
            </Tr>
          ))}
        </div>
      </div>
      <style>
        {`
        .iswad_td {
            width: ${colWidth}px;
          }

          .iswad_table {
            width: ${tableWidth}px;
          }
          `}
      </style>
    </>
  );
};

export default Table;
