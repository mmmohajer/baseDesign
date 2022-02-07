import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "Pages/Home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}

export default AppRoutes;
