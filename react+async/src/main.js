import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
// import React, {PureComponent} from '@packages/react';
// import ReactDOM from '@packages/react-dom/index.js';

class Home extends PureComponent{
    constructor(props){
        super(props)
        this.state = {
            num: 1
        }
    }
    wait(txt,time) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(txt)
            }, time)
        })
        
    
    }
    async componentDidMount(){
        const r = await Promise.all([
            this.wait(33,2000),
            this.wait('haha',3000)
        ])
        console.log(r)
        const [a, c] = r;
        // const a = await this.wait(33,2000)
        // const c = await this.wait('haha',3000);
        this.setState({
            num: a,
            txt: c
        })
    }
    render(){
        return(
            <div>
                {this.state.num}
                <hr/>
                {this.state.txt}
            </div>
        )
    }
}

ReactDOM.render(
    <Home/>
    , document.getElementById('app')
  );