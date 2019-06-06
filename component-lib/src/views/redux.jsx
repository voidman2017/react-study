
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import store from '../reducers';


/* Action */
/* let unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})
unsubscribe(); */

class NormalRedux extends PureComponent {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    add() {
        const val = this.refs.numberInput.value;
        this.props.onClick(val)
    }
    changeobj() {
        store.dispatch({ type: 'change_obj', data: '222' })
    }
    focus(e) {
        e.target.value = '';
    }
    render() {
        const { count, isOdd, list, obj } = this.props;
        return (
            <div>
                <h2>普通redux</h2>
                count:{count} <br />
                isOdd:{isOdd ? 'true' : 'false'} <br />
                <button onClick={() => this.props.increase()}>+</button> <br />
                <button onClick={() => this.props.decrease()}>-</button> <br />
                <input type="number" ref="numberInput" /><button onClick={() => this.add()}>add</button>
                <hr />
                <h2>不同数据类型redux操作</h2>
                <h3>数组</h3>
                <div>list:{list.join(',')}</div>
                <div>
                    <div>
                        <input type="text" ref="listInput" onFocus={this.focus.bind(this)} />
                    </div>
                    <div>
                        <button onClick={this.props.listOperate.bind(this, 'add_list')}>add</button>
                        <button onClick={this.props.listOperate.bind(this, 'delete_list')}>delete</button><br />
                    </div>
                    <div>
                        <button onClick={this.props.listOperate.bind(this, 'add_list_err')}>add(can't update view)</button>
                        <button onClick={this.props.listOperate.bind(this, 'delete_list_err')}>delete(can't update view)</button>
                    </div>
                </div>
                <h3>对象</h3>
                <ObjectTree {...obj} />
                <input type="text" ref="objInput" />
                <div>
                    <ul>
                        <li onClick={this.props.objOperate.bind(this, 'obj_c_d')}>obj.c.d -- 直接赋值修改，视图不会变化</li>
                        <li onClick={this.props.objOperate.bind(this, 'obj_a_b1')}>obj.a.b -- 覆盖obj.a</li>
                        <li onClick={this.props.objOperate.bind(this, 'obj_a_b2')}>obj.a.b -- 对未更新的对象用原state中的对象进行手动赋值</li>
                        <li onClick={this.props.objOperate.bind(this, 'obj_a_b3')}>obj.a.b -- 通过深拷贝，得到新对象</li>
                    </ul>
                </div>

            </div>
        )
    }
}



const mapStateToProps = (state, ownProps) => {
    const { data } = state;
    const isOdd = data.count % 2 != 0;
    return {
        ...data,
        isOdd
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: (num) => {
            dispatch({ type: 'add_count', num });
        },
        increase: () => {
            dispatch({ type: 'increase_count' });
        },
        decrease: () => {
            dispatch({ type: 'decrease_count' });
        },
        listOperate: function (type) {
            const data = this.refs.listInput.value;
            dispatch({ type, data })
        },
        objOperate: function (type) {
            const data = this.refs.objInput.value;
            dispatch({ type, data })
        }
    }
}

class ObjectTree extends PureComponent {
    constructor(props) {
        super(props)
    }
    isObj(obj) {
        return Object.prototype.toString.call(obj) === '[object Object]';
    }
    render() {
        const { ...obj } = this.props;
        return (
            <ul style={{ paddingLeft: '20px' }}>
                {Object.keys(obj).map((key, index) => {
                    const val = obj[key];
                    return (
                        <li key={index}>
                            {key}
                            {
                                this.isObj(val) ? <ObjectTree {...val} /> : `：${val}`
                            }
                        </li>
                    )
                })}
            </ul>
        )

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NormalRedux)