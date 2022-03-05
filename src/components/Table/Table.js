import React, { useState, useEffect } from "react";
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
  const [filter, setFilter] = useState({ Header1: "", Header2: "" });
  const [filteredData, setFilteredData] = useState([]);
  const [isChecked, setIsChecked] = useState({});

  const searchHandler = (e, head) => {
    const key = head?.value || head;
    const curFilter = { ...filter };
    curFilter[key] = e.target.value;
    setFilter(curFilter);

    setTimeout(() => {
      let localFilteredData = [...data];
      localFilteredData = localFilteredData.filter((d) => {
        const curSearchElem = d[key]?.value || d[key];
        return curSearchElem.includes(e.target.value);
      });
      setFilteredData(localFilteredData);
    }, 500);
  };

  useEffect(() => {
    const localIsChecked = { ...isChecked };
    let count = 0;
    if (data.length) {
      const localFilteredData = [...data];
      localFilteredData.map((d) => {
        d["iswad_table_idx"] = count;
        localIsChecked[count] = false;
        count += 1;
      });
      setFilteredData(localFilteredData);
      setIsChecked(localIsChecked);
    }
  }, [data]);

  useEffect(() => {
    const localSelectedData = [];
    if (Object.keys(isChecked).length) {
      Object.keys(isChecked).map((idx) => {
        if (isChecked[idx]) {
          const toBeAdded = {
            ...filteredData.find((d) => d["iswad_table_idx"] === parseInt(idx)),
          };
          delete toBeAdded["iswad_table_idx"];
          localSelectedData.push(toBeAdded);
        }
      });
      setSelectedData(localSelectedData);
    }
  }, [isChecked]);

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
                <input type="checkbox" disabled />
              </Td>
            )}
            {headLines.map((head, idx) => (
              <Td
                className=""
                style={head?.width && { width: `${head.width}px` }}
                key={idx}
              >
                <div className="w-per-100 iswad_table_headContainer">
                  <div>{head?.display || head}</div>
                  {head.hasSearch && (
                    <div className="">
                      {search({
                        value: filter[head?.value || head],
                        onChange: (e) => searchHandler(e, head),
                      })}
                    </div>
                  )}
                </div>
              </Td>
            ))}
          </Th>
          {filteredData.map((curRow, idx) => (
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
