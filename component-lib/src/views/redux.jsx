
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import store from '../reducers';


/* Action */
let unsubscribe = store.subscribe(()=>{
    console.log(store.getState())
})
unsubscribe();
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
    render() {
        const { count, isOdd } = this.props;
        return (
            <div>
                <h1>todo</h1><hr />
                count:{count} <br />
                isOdd:{isOdd ? 'true' : 'false'} <br />
                <button onClick={() => this.props.increase()}>+</button> <br />
                <button onClick={() => this.props.decrease()}>-</button> <br />
                <input type="number" ref="numberInput" /><button onClick={() => this.add()}>add</button>
                <hr/>
                <OutBtn/>
            </div>
        )
    }
}


class OutBtn extends PureComponent{
    click(){
        alert('out')
    }
    render(){
        return <div onClick={this.click.bind(this)} className="out-btn">
                    outbtn
                    <InnerBtn/>
                </div>
    }
}

class InnerBtn extends PureComponent{
    click(num,n,e){
        console.log(num)
        console.log(n)
        alert('inner')
        e.stopPropagation();
        return false;
    }
    render(){
        return <div onClick={this.click.bind(this,1,2)} className="inner-btn">innerbtn</div>
    }
}


const mapStateToProps = (state, ownProps) => {
    const { todo } = state;
    const isOdd = todo.count % 2 != 0;
    return {
        ...todo,
        isOdd
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: (num) => {
            dispatch({ type: 'add', num });
        },
        increase: () => {
            dispatch({ type: 'increase' });
        },
        decrease: () => {
            dispatch({ type: 'decrease' });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NormalRedux)