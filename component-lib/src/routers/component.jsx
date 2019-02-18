import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';

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
    return <Route {...rest} component={ InterceptComponent } />
}
