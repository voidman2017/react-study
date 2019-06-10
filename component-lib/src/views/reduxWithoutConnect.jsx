import React, { Component } from 'react';
import store from '../reducers';
import {Link} from "react-router-dom";

class reduxWithoutConnect extends Component {
    render() {
        return (
            <div>
                <Link to="/">home</Link>
                <Container />
            </div>
        );
    }
}

/* 容器组件 */
class Container extends Component {
    constructor(props) {
        super(props);
        /* getState()获取初始 state 状态 */
        const state = store.getState();
        this.state = {
            ...state,
        }
    }
    addList() {
        /* dispatch 发送 action 改变 state */
        store.dispatch({ type: 'add_list', data: this.state.data.list.length+1 })
    }
    componentDidMount() {
        /* subscribe 监听 state 变化，改变当前组件state， 从而影响展示组件重新渲染 */
        this.unsubscribe = store.subscribe(() => {
            const state = store.getState();
            this.setState({
                ...state
            })
        })
    }
    componentWillUnmount(){
        /* 注销监听器 */
        this.unsubscribe();
    }
    render() {
        const { data } = this.state;
        return <UiComp {...data} addList={this.addList.bind(this)}></UiComp>
    }
}

/* 展示组件 */
const UiComp = ({ list, addList }) => {
    return (
        <div>
            <ul onClick={addList.bind(this)}>
                {list.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}
export default reduxWithoutConnect;