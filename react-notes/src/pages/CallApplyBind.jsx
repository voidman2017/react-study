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
    add(params) {
        alert(params)
        console.log(this)
        const { list } = this.state;
        this.setState({
            list: [...list, list.length + 1]
        })
    }
    render() {
        const { list } = this.state;
        return (
            <div>
                <List list={list} add={this.add.bind(this)} />
                <List list={list} add={() => this.add() } />
                <List list={list} add={this.add} />
            </div>
        )
    }
}

class List extends Component {
    render() {
        const { list = [], add } = this.props;
        console.log(add)
        return (
            <div>
                <ul>
                    {list.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
                <button onClick={()=>add(123)}>add</button>
                <Child add={add}/>
            </div>
        )
    }
}


class Child extends Component{
    render(){
        return <button onClick={()=>this.props.add(123)}>click</button>
    }
}
export default CallApplyBind;


