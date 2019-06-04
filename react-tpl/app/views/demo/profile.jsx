import React, { PureComponent } from 'react';
import { connectRedux } from "../../reducers/tool/index";

class Profile extends PureComponent {
    constructor(props){
        super(props);
    }
    render(){
        return <Info { ...this.props } />
    }
}

const Info = connectRedux([
    "user.isLogined"
])(
    class Profit extends PureComponent{
        constructor(props){
            super(props);
        }
        render(){
            return (
                <div>
                    { this.props.isLogined ? "已登录" : "未登录" }
                </div>
            )
        }
    }
)

export default Profile;