import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import { connectRedux } from "../reducers/tool";

/**
 * === 初始化获取应用基础信息 === 
 */
export const AppLoadRoute = connectRedux(['user.isLogined'])(
    class AppLoadRoute extends PureComponent {
        constructor(props) {
            super(props)
            this.state = {
                loaded: false
            }
        }
        getLoginStatu() {
            const { isLogined = false, name } = window.localStorage;
            setTimeout(() => {
                this.props.mapDispatchToStore("user", "profile", { data: { isLogined, name } })
                this.setState({ loaded: true });
            }, 300)
        }
        componentDidMount() {
            this.getLoginStatu();
        }
        render() {
            const { loaded } = this.state;
            return loaded ? this.props.children : '加载中...';
        }
    }
)


/**
 * === 拦截组件 ===
 * 
 * @param {*} opts 
 */
export const InterceptRoute = (opts) => {
    const { component: Component, ...rest } = opts;
    class InterceptComponent extends PureComponent {
        constructor(props) {
            super(props)
            this.state = {
                loading: true,
                pass: true
            }
        }
        componentDidMount() {
            const { search } = window.location;
            const pass = !~search.indexOf('false')
            this.setState({
                pass,
                loading: false
            })
        }
        render() {
            const { loading, pass } = this.state;
            return loading ? '加载中...' :
                pass ? <Component {...this.props} /> : '条件不满足'
        }
    }
    return <Route {...rest} component={InterceptComponent} />
}



/**
 * === 拦截组件 ===
 * 
 * @param {*} opts 
 */
export const NeedLoginRoute = (opts) => {
    const { component: Component, ...rest } = opts;
    const Container = connectRedux(['user.isLogined'])(
        class NeedLoginRoute extends PureComponent {
            constructor(props) {
                super(props)
            }
            redirectLogin() {
                const loginUrl = '/user/login';
                location.replace(loginUrl);
            }
            render() {
                return this.props.isLogined ?
                    <Component {...this.props} /> : this.redirectLogin();
            }
        }
    )
    return <Route {...rest} component={Container} />
}