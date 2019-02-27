import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Loadable from "react-loadable";
import { InterceptRoute } from "./component";
class AppLoadRoute extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loaded: true
            })
        }, 300)
    }
    render() {
        const { loaded } = this.state;
        return loaded ? this.props.children : '加载中...';
    }
}
const loading = () => {
    return '加载中...'
}
const AnsycLoad = (loader) => {
    return Loadable({
        loader,
        loading
    })
}

/**
 * ==== 主路由 ====
*/
const RootRoute = () => (
    <Router>
        <Switch>
            <InterceptRoute exact path="/index"
                component={AnsycLoad(() => import(
                    /* webpackChunkName : "views/home" */
                    "../views/home")
                )} />
            <Route exact path="/redux"
                component={AnsycLoad(() => import(
                    /* webpackChunkName : "views/redux" */
                    "../views/redux")
                )} />
            <Route exact path="/reduxHigh"
                component={AnsycLoad(() => import(
                    /* webpackChunkName : "views/reduxHigh" */
                    "../views/reduxHigh")
                )} />
            <Route exact path="/tab"
                component={AnsycLoad(() => import(
                    /* webpackChunkName : "views/tab" */
                    "../views/tab")
                )} />
            <Route exact path="/" render={(props) => <Redirect to={{ pathname: "/index", state: { from: props.location } }} />} />
            <Route exact path="/*"
                component={AnsycLoad(() => import(
                    /* webpackChunkName : "views/404" */
                    "../views/404")
                )} />
        </Switch>
    </Router>
);

const Routers = () => (
    <AppLoadRoute>
        <RootRoute />
    </AppLoadRoute>
)
export default Routers;