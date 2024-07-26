import { lazy } from "react";

// 使用 lazy 动态加载组件
const Home = lazy(() => import("../pages/home"));
const Communication = lazy(() => import("../pages/communication"));

const routes = [
  {
    path: "/home",
    component: Home,
    name: "Home",
    key: "1",
    children: [
      {
        path: "/communication",
        component: Communication,
        name: "Communication",
        key: "1-1",
        children: [
          {
            path: "/communication",
            component: Communication,
            name: "Communication",
            key: "1-1",
          },
        ],
      },
    ],
  },
  {
    path: "/communication",
    component: Communication,
    name: "组件通信",
    key: "2",
  },
];

export default routes;
