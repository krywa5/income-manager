import React, { FunctionComponent } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { homePath } from "./routes";
import Home from "../pages/home/Home";

const AppRouting: FunctionComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route path={homePath} element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouting;
