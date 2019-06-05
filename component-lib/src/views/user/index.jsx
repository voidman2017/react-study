import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

function mapStateToProps(state) {
    return {
  
    };
}

class index extends Component {
    loginout(){
        localStorage.clear();
        location.replace('/user/index');
    }
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/user/setting">设置</Link>
                    </li>
                    <li>
                        <button onClick={this.loginout.bind(this)}>登出</button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(index);