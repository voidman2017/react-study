import React, { Component,PureComponent } from 'react';
import ReactDOM, { render } from 'react-dom';


class ComponentPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list1:[1,2,3,4,5],
            list2:[1,2,3,4,5]
        }
    }
    add(){
        let newList = this.state.list1;
        newList.push(newList.length+1);
        this.setState({
            list1:newList
        })
    }
    render() {
        console.log('hello-render')
        return (
            <div>
                <h1>component</h1>
                <button onClick={()=>this.add()}>+</button>
                <List1 items={this.state.list1}/>
                <List2 items={this.state.list2}/>
            </div>
        )
    }
}

class List1 extends Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log('list1-render')
        return(
            <ul>
                {
                    this.props.items.map((item,index)=>
                        <li key={index}>{item}</li>
                    )
                }
            </ul>
        )
    }
}
class List2 extends Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log('list2-render')
        return(
            <ul>
                {
                    this.props.items.map((item,index)=>
                        <li key={index}>{item}</li>
                    )
                }
            </ul>
        )
    }
}

export default ComponentPage;


