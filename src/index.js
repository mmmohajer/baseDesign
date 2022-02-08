import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./assets/styles/main.scss";
import AppRoutes from "./AppRoutes";

ReactDOM.render(
  <BrowserRouter basename="/dist/">
    <AppRoutes />
  </BrowserRouter>,
  document.querySelector("#app")
);
