import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header-components";
import Dashboard from "./components/home-components";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
