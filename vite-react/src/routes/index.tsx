import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import routes from "./routesConfig";

const { Sider, Content } = Layout;

const findMatchingRouteKeys = (routes, pathname, parentPath = "") => {
  let keys = [];

  for (let route of routes) {
    const fullPath = parentPath + route.path;
    if (fullPath === pathname) {
      keys.push(route.key);
    } else if (pathname.startsWith(fullPath)) {
      keys.push(route.key);
      if (Array.isArray(route.children)) {
        const childKeys = findMatchingRouteKeys(
          route.children,
          pathname,
          fullPath
        );
        if (childKeys.length > 0) {
          keys = keys.concat(childKeys);
        }
      }
    }
  }

  return keys;
};

const generateRoutes = (routes, parentPath = "") => {
  return routes.map((route) => {
    if (route.children) {
      return (
        <Route
          key={route.key}
          path={parentPath + route.path}
          element={<route.component />}
        >
          {generateRoutes(route.children, parentPath + route.path)}
        </Route>
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
      return {
        key: route.key,
        label: (
          <Link to={parentPath + route.path} onClick={(e) => e.stopPropagation()}>
            {route.name}
          </Link>
        ),
        children: generateMenuItems(route.children, parentPath + route.path)
      };
    }
    return {
      key: route.key,
      label: <Link to={parentPath + route.path}>{route.name}</Link>
    };
  });
};

const AppRoutes = () => {
  const path = location.pathname;
  const key = findMatchingRouteKeys(routes, path);
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={key}
            defaultOpenKeys={key}
            items={generateMenuItems(routes)}
          >
          </Menu>
        </Sider>
        <Layout
          style={{
            flex: 1,
            maxHeight: "100vh",
            overflow: "scroll",
          }}
        >
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
            }}
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
