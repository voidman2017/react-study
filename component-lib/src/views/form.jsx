import React, { Component } from 'react';
import { FormItem, FormList } from '@lib/formComp';

class Form extends Component {
    constructor(props){
        super(props);
        this.formList = [{
            label:{ name: 'username', className: "label" },
            input:{ placeholder: 'please input username', type: 'text', className: 'input' },
            initValue:'prince',
            message:'用户名长度大于6个字符',
            validatorType:'strlength'
        },{
            label:{ name: 'password', className: "label" },
            input:{ placeholder: 'please input password', type: 'password', className: 'input' },
            message: '密码长度大于4位小于14位',
            // customValidator: checkpassword
        }];
    }
    render() {
        return (
            <div>
                {/* <FormItem
                    label={{ name: 'username', className: "label-1" }}
                    input={{ placeholder: 'please input username', type: 'text', className: 'input-1' }}
                    initValue='princed'
                    message='用户名长度大于6个字符'
                    validatorType={'username'} />
                <FormItem
                    label={{ name: 'password' }}
                    input={{ placeholder: 'please input password', type: 'password' }}
                    message='密码长度不大于10个字符'
                    customValidator={checkpassword}
                /> */}

                <FormList list={this.formList}/>
            </div>
        );
    }
}

function checkpassword() {
    const { value } = this.state;
    return value.length < 14 && value.length >=4;
}

export default Form;