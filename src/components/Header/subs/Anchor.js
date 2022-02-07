import React from "react";
import { Link } from "react-router-dom";

import { removeDivFullWindow } from "../utils";
function Anchor({ children, to }) {
  return (
    <>
      <Link to={`/${to}`} onClick={removeDivFullWindow}>
        {children}
      </Link>
    </>
  );
}

export default Anchor;
