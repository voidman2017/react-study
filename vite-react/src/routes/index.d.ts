// ./routes/index.d.ts
import React from 'react';

declare module '@/routes' {
    export interface RouteConfig {
        path: string;
        component: React.ComponentType;
        exact?: boolean;
        children?: RouteConfig[];
        key?: string;
        label?: string;
    }

    export const routes: RouteConfig[];
}