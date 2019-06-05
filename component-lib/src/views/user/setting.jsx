import React, { Component } from 'react';
import { connectRedux } from "../../reducers/tool";


const setting = connectRedux(['user'])(
    class setting extends Component {
        render() {
            const {name} = this.props;
            return (
                <div>
                    welcome {name} !
                </div>
            );
        }
    }
)
export default setting;


