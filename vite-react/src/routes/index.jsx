import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// 使用 lazy 动态加载组件
const Home = lazy(() => import("../pages/home"));
const Communication = lazy(() => import("../pages/communication"));

const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/communication" element={<Communication />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
