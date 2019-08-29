import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

class CallApplyBind extends Component {
    render() {
        return (
            <div>
                <h1>CallApplyBind</h1>
                <Parent />
            </div>
        )
    }
}

class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [1, 2, 3]
        }
    }
    add() {

    }
    render() {
        const { list } = this.state;
        return (
            <List list={list} />
        )
    }
}

class List extends Component {
    render() {
        const { list } = this.props;
        return (
            <ul>
                {list.map((item,index) => <li key={index}>{item}</li>)}
            </ul>
        )
    }
}



export default CallApplyBind;


