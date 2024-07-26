import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import routes from "./routesConfig";

const { Sider, Content } = Layout;

const generateRoutes = (routes, parentPath = "") => {
  return routes.map((route) => {
    if (route.children) {
      return (
        <>
          <Route
            key={route.key}
            path={parentPath + route.path}
            element={<route.component />}
          />
          {generateRoutes(route.children, parentPath + route.path)}
        </>
      );
    }
    return (
      <Route
        key={route.key}
        path={parentPath + route.path}
        element={<route.component />}
      />
    );
  });
};

const generateMenuItems = (routes, parentPath = "") => {
  return routes.map((route) => {
    if (route.children) {
      return (
        <Menu.SubMenu
          key={route.key}
          title={
            <span>
              <Link
                to={parentPath + route.path}
                onClick={(e) => e.stopPropagation()}
              >
                {route.name}
              </Link>
            </span>
          }
        >
          {generateMenuItems(route.children, parentPath + route.path)}
        </Menu.SubMenu>
      );
    }
    return (
      <Menu.Item key={route.key}>
        <Link to={parentPath + route.path}>{route.name}</Link>
      </Menu.Item>
    );
  });
};

const AppRoutes = () => {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            {generateMenuItems(routes)}
          </Menu>
        </Sider>
        <Layout>
          <Content
            style={{ margin: "24px 16px", padding: 24, background: "#fff" }}
          >
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>{generateRoutes(routes)}</Routes>
            </Suspense>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default AppRoutes;
