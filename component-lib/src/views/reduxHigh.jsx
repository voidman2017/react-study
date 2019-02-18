import React, {Component, PureComponent } from 'react';
import {connectRedux} from "../reducers/tool";
const ReduxHigh = connectRedux(['list'])(
    class ReduxUI extends PureComponent {
        constructor(props){
            super(props);
            this.state = {
                num : 2
            }
        }
        add(){
            const addNum = ~~(Math.random()*10);
            this.props.mapDispatchToStore("list", "add_list", { data : addNum });
        }
        render() {
            const { list } = this.props;
            return (
                <div>
                    {this.state.num}
                    <button onClick={this.add.bind(this)}>+</button>
                    {
                        list.map((item, index)=>
                            <div key="index" key={index}>{item}</div>
                        )
                    }
                </div>
            );
        }
    }
)



export default ReduxHigh;