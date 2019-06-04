import React, { PureComponent } from 'react';
import { connectRedux } from "../../reducers/tool/index";

class Home extends PureComponent {
    constructor(props){
        super(props);
    }
    render(){
        return <Profit { ...this.props } />
    }
}

const Profit = connectRedux([
    "user.isLogined"
])(
    class Profit extends PureComponent{
        constructor(props){
            super(props);
        }
        render(){
            return (
                <div>
                    { this.props.isLogined ? `已登录:${$GLOBAL.DOMAIN.JRWX}` : `未登录：z${$GLOBAL.DOMAIN.JRW}` }
                </div>
            )
        }
    }
)

export default Home;