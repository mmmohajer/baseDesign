import React from "react";
import { Link } from "react-router-dom";

import { removeDivFullWindow } from "../utils";
function Anchor({ children, to }) {
  return (
    <>
      <Link to={`/${to}`}>
        <div className="link" onClick={removeDivFullWindow}>
          {children}
        </div>
      </Link>
    </>
  );
}

export default Anchor;
