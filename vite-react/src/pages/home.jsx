import React from "react";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div>
        <h2>Home Page</h2>
      </div>
      <Outlet />
    </>
  );
};

export default Home;
