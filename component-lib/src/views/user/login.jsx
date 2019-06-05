import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: ''
        }
    }
    login() {
        const {name, password} = this.state;
        localStorage.isLogined = true;
        localStorage.name = name;
        localStorage.password = password;
        location.replace('/user/index');
    }
   
    changeHandle(type,e){
      const value = e.target.value;
      this.setState({
          [type]: value
      })  
    }
    render() {
        const { name, password } = this.state;
        return (
            <div>
                <div>
                    <label htmlFor="name">用户名：</label>
                    <input type="text" name='name' value={name} onChange={this.changeHandle.bind(this, 'name')} />
                </div>
                <div>
                    <label htmlFor="password">密码：</label>
                    <input type="password" name="password" value={password} onChange={this.changeHandle.bind(this, 'password')}/>
                </div>
                <button onClick={this.login.bind(this)}>登录</button>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(login);