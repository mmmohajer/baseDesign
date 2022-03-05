import React from "react";

const Search = ({ ...props }) => {
  return (
    <>
      <input type="search" {...props} />
    </>
  );
};

export default Search;
