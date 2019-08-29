import React, { Component,PureComponent } from 'react';
import ReactDOM, { render } from 'react-dom';
import Immutable,{List, Set} from 'immutable';

class PureComponentPage extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            list1:List([1,2,3,4,5]),
            list2:[11,22,33,44,55]
        }
    }
    add(){
        let oldList = this.state.list1;
        let newList= oldList.push(oldList.size+1);
        this.setState({
            list1:newList
        })
    }
    render() {
        console.log('hello-render')
        return (
            <div>
                <h1>PureComponent</h1>
                <button onClick={()=>this.add()}>+</button>
                <List1 items={this.state.list1}/>
                <List2 items={this.state.list2}/>
                
            </div>
        )
    }
}

class List1 extends PureComponent{
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
class List2 extends PureComponent{
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

export default PureComponentPage;


