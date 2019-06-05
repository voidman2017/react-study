import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { AppLoadRoute, InterceptRoute, NeedLoginRoute } from "./component";
import Loadable from "react-loadable";

const loading = () => {
    return '加载中...'
}
const AnsycLoad = (loader) => {
    return Loadable({
        loader,
        loading
    })
}


const UserRoute = () => (
    <Switch>
        <Route exact path="/user/index"
            component={AnsycLoad(() => import(
                /* webpackChunkName : "views/user/index" */
                "../views/user/index"))} />
        <NeedLoginRoute exact path="/user/setting"
            component={AnsycLoad(() => import(
                /* webpackChunkName : "views/user/setting" */
                "../views/user/setting"))} />
        <Route exact path="/user/login"
            component={AnsycLoad(() => import(
                /* webpackChunkName : "views/user/login" */
                "../views/user/login"))} />
        <Route exact path="/user" render={(props) => <Redirect to={{ pathname: "/user/index", state: { from: props.location } }} />} />
    </Switch>
)

/**
 * ==== 主路由 ====
*/
const RootRoute = () => (
    <Router>
        <Switch>
            <InterceptRoute exact path="/index" component={AnsycLoad(() => import( /* webpackChunkName : "views/home" */ "../views/home"))} />
            <Route path="/user" component={UserRoute} />
            <Route exact path="/redux" component={AnsycLoad(() => import(/* webpackChunkName : "views/redux" */ "../views/redux"))} />
            <Route exact path="/reduxHigh" component={AnsycLoad(() => import(/* webpackChunkName : "views/reduxHigh" */ "../views/reduxHigh"))} />
            <Route exact path="/tab" component={AnsycLoad(() => import(/* webpackChunkName : "views/tab" */ "../views/tab"))} />
            <Route exact path="/form" component={AnsycLoad(() => import(/* webpackChunkName : "views/form" */ "../views/form"))} />
            <Route exact path="/loadmore" component={AnsycLoad(() => import(/* webpackChunkName : "views/loadmore" */ "../views/loadmore"))} />
            <Route exact path="/" render={(props) => <Redirect to={{ pathname: "/index", state: { from: props.location } }} />} />
            <Route exact path="/*" component={AnsycLoad(() => import(/* webpackChunkName : "views/404" */ "../views/404"))} />
        </Switch>
    </Router>
);

const Routers = () => (
    <AppLoadRoute>
        <RootRoute />
    </AppLoadRoute>
)
export default Routers;