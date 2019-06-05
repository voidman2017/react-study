import React, { PureComponent } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { EmptyPage, LoadPage } from '../views/component';
import { connectRedux } from '../reducers/tool';
import Ajax from '@tool/ajax';
import API from '../api/index';

/**
 * ==== 初始化路由(获取应用基础信息) ====
 * 1、用户登录状态
 * 2、应用配置信息
 */
export const AppLoadRoute = connectRedux()(
    class LoadComponent extends PureComponent{
        constructor(props){
            super(props);
            this.state = { load : true }
        }
        login = Ajax(API.USER.PROFILE.INFO)
        getLoginStatu(){
            setTimeout(() => {
                this.setState({ load : false });
                this.props.mapDispatchToStore("user", "info", { "phone" : "11" })
            }, 1000);
        }
        componentWillMount(){
            this.getLoginStatu();
        }
        componentDidMount(){
            //添加后退监听获取登录信息
            window.addEventListener("pageshow", (e) => {
                e.persisted && this.getLoginStatu();
            });
        }
        render(){
            const { load } = this.state;
            return load ? <LoadPage config={{ msg : "加载中..." }} /> : this.props.children;
        }
    }
)


/*
* ==== 私有路由拦截器实现 ====
*/
export const PrivateRoute = ({ component : Component, ...rest }) => {
    const Container = connectRedux(["user.isLogined"])(
        class PrivateComponent extends PureComponent{
            constructor(props){
                super(props)
            }
            redirectLogin(){
                const redirectUrl = window.location.href;
                const LoginUrl = `${$GLOBAL.DOMAIN.AUTHEN}/login`;
                console.log("跳转登录页");
            }
            render(){
                return this.props.isLogined ? 
                    <Component { ...this.props } /> : this.redirectLogin()
            }
        }
    );
    return <Route { ...rest } component={ Container } />
};