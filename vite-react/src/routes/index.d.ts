// ./routes/index.d.ts
declare module './routes' {
    export interface RouteConfig {
        path: string;
        component: React.ComponentType<any>;
        exact?: boolean;
    }

    export const routes: RouteConfig[];
}