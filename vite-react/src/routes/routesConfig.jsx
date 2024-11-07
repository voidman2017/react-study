import { lazy } from "react";

// 使用 lazy 动态加载组件
const Home = lazy(() => import("../pages/home"));
const Communication = lazy(() => import("../pages/communication"));
const IntensifyComponent = lazy(() => import("../pages/intensifyComponent"));
const Hooks = lazy(() => import("../pages/hooks"));
const Notes = lazy(() => import("../pages/notes"));
const Props = lazy(() => import("../pages/notes/props"));
const This = lazy(() => import("../pages/notes/this"));
const Image = lazy(() => import("../pages/notes/image"));
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
  // {
  //   path: "/communication",
  //   component: Communication,
  //   name: "组件通信",
  //   key: "2",
  // },
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
  {
    path: "/notes",
    component: Notes,
    name: "Notes",
    key: "5",
    children: [
      {
        path: "/props",
        component: Props,
        name: "Props",
        key: "5-1",
      },
      {
        path: "/this",
        component: This,
        name: "This",
        key: "5-2",
      },
      {
        path: "/image",
        component: Image,
        name: "Image",
        key: "5-3",
      },
    ],
  },
];

export default routes;
