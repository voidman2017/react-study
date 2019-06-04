import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class setting extends Component {
    render() {
        return (
            <div>
                用户设置界面，需要登录
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(setting);