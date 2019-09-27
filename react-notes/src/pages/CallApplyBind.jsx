import React, { Component } from 'react';

class CallApplyBind extends Component {
    render() {
        return (
            <div>
                <h1>CallApplyBind</h1>
                <Demo/>
                <Parent />
            </div>
        )
    }
}


class Demo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 1
        }
    }
    add() {
        console.log(this)
        this.setState({
            num: this.state.num + 1
        })
    }
    render() {
        return (
            <div>
                <p> {this.state.num}</p>
                <button onClick={this.add}>add1</button>
                <button onClick={this.add.bind(this)}>add2</button>
                <button onClick={()=>this.add()}>add3</button>
                <ChildDemo add={this.add} num={this.state.num}/>
                <ChildDemo add={()=>this.add()} num={this.state.num}/>
                <ChildDemo add={this.add.bind(this)} num={this.state.num}/>
            </div>
        )
    }
}

class ChildDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1
        }
    }
    render() {
        return (
            <div>
                <p>父组件num: {this.props.num}</p>
                <p>子组件num: {this.state.num}</p>
                <button onClick={this.props.add}>add1</button>
                <button onClick={this.props.add.bind(this)}>add2</button>
                <button onClick={()=>this.props.add()}>add3</button>
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
                <button onClick={this.add}>click</button>
                <List list={list} add={this.add.bind(this)} />
                <List list={list} add={() => this.add()} />
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
                <button onClick={() => add(123)}>add</button>
                <Child add={add} />
            </div>
        )
    }
}


class Child extends Component {
    render() {
        return <button onClick={() => this.props.add(123)}>click</button>
    }
}

export default CallApplyBind;


