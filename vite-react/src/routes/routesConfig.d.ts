interface RouteItem {
  path: string;
  component: React.ComponentType;
  name: string;
  key: string;
  children?: RouteItem[];
}

declare const routes: RouteItem[];
export default routes;
