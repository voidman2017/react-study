import React, { Component, PureComponent } from 'react';
import ReactDOM, { render } from 'react-dom';
import '../css/hoc.css';

const HigherOrderComp = (Child) => {
    return class Container extends PureComponent {
        constructor(props) {
            super(props);
            this.state = {
                value: ''
            }
        }
        refc(instance) {
            console.log(instance)
        }
        getState() {
            this.refs.child.getName && console.log(this.refs.child.getName());
            console.log(this.refs.child.state);
        }
        changeHandle(e) {
            this.setState({
                value: e.target.value
            })
        }
        render() {
            const { title, ...otherProps } = this.props;
            const newProps = {
                value: this.state.value,
                onChange: this.changeHandle.bind(this)
            }
            return (
                <div className="box">
                    <h2>{title}</h2>
                    <div className="wrapComp">
                        <Child ref='child' {...otherProps} {...newProps} />
                    </div>
                    <button onClick={this.getState.bind(this)}>get wrapComp.state</button>
                    <footer>footer</footer>
                </div>
            )
        }
    }
}

class ContentA extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
    }
    getName() {
        return 'this is component A';
    }
    increase() {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                this is a,get props list
                <ol>
                    {
                        this.props.list.map((item, index) => <li key={index}>{item}</li>)
                    }
                </ol>
                count:{this.state.count}
                <button onClick={this.increase.bind(this)}>+</button>
            </div>
        )
    }
}

class ContentB extends PureComponent {
    render() {
        return (
            <div style={this.props.style}>
                <input type="text" {...this.props} />
                this is b,get props color
            </div>
        )
    }
}

const A = HigherOrderComp(ContentA);
const B = HigherOrderComp(ContentB);

class HOC extends Component {
    render() {
        return (
            <div>
                <A title='box-a' list={[1, 2, 3]} />
                <B title='box-b' style={{ color: "#d23f21" }} />
            </div>
        )
    }
}


export default HOC;


