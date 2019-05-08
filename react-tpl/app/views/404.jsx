import React, { PureComponent } from 'react';
import ReactDOM, { render } from 'react-dom';
import { EmptyPage } from './component';

class Page404 extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            title : "404 not fund",
            link  : "/index",
            btn   : "back", 
            msg   : "小泰找不到页面了", 
            txt   : "返回", 
        }
    }
    render(){
        return <EmptyPage config={ this.state } />
    }
}

export default Page404;