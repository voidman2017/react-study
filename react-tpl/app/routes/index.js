import React from 'react';
import Loadable from "react-loadable";
import { Route, Redirect, Switch } from 'react-router-dom';
import { PrivateRoute, AppLoadRoute } from './component';
import { LoadPage } from "../views/component/index";

const loading = ()=>{
    return <LoadPage config={{ msg : "加载中..." }} />
}

const AnsycLoad = ( loader ) => {
    return Loadable({
        loader,
        loading
    })
}

/**
 * ==== 根路由 ====
*/
const RootRoute = () => (
    <Switch>
        <PrivateRoute exact path="/uc/info" component={ AnsycLoad(() => import(/* webpackChunkName: "views/demo/profile" */"../views/demo/profile")) } />
        <Route exact path="/scroll" component={ AnsycLoad(()=> import(/* webpackChunkName: "views/demo/scroll" */ "../views/demo/scroll")) } />
        <Route exact path="/swiper" component={ AnsycLoad(()=> import(/* webpackChunkName: "views/demo/swiper" */ "../views/demo/swiper")) } />
        <Route exact path="/home" component={ AnsycLoad(()=> import(/* webpackChunkName: "views/demo/index" */ "../views/demo/index")) } />
        <Route exact path="/*" component={ AnsycLoad(()=> import(/* webpackChunkName: "views/404" */ "../views/404")) } />
    </Switch>
);

const AppRoutes = () => (
    <AppLoadRoute>
        <RootRoute />
    </AppLoadRoute>
)

export default AppRoutes;