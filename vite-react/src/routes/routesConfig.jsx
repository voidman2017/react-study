import { lazy } from "react";

// 使用 lazy 动态加载组件
const Home = lazy(() => import("../pages/home"));
const Communication = lazy(() => import("../pages/communication"));
const IntensifyComponent = lazy(() => import("../pages/intensifyComponent"));
const Hooks = lazy(() => import("../pages/hooks"));

const routes = [
  // {
  //   path: "/home",
  //   component: Home,
  //   name: "Home",
  //   key: "1",
  //   children: [
  //     {
  //       path: "/communication",
  //       component: Communication,
  //       name: "Communication",
  //       key: "1-1",
  //       children: [
  //         {
  //           path: "/communication",
  //           component: Communication,
  //           name: "Communication",
  //           key: "1-1-1",
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    path: "/communication",
    component: Communication,
    name: "组件通信",
    key: "2",
  },
  {
    path: "/intensifyComponent",
    component: IntensifyComponent,
    name: "强化组件",
    key: "3",
  },
  {
    path: "/hooks",
    component: Hooks,
    name: "Hooks",
    key: "4",
  },
];

export default routes;
