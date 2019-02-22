import React, { Component } from 'react';
import { isTypeOf } from '../../tool/common';
import '@css/formComp';

let form_id = 1;
export class FormItem extends Component {
    constructor(props) {
        super(props);
        const { initValue, customValidator, validatorType } = props;
        this.validator = isTypeOf(customValidator) === 'function' ? customValidator : this[`verify${validatorType}`] ? this[`verify${validatorType}`] : ''; //验证规则
        isTypeOf(this.validator) === 'function' ? this.required = true : console.warn('validator need throw a function'); //是否需要验证
        this.state = {
            value: initValue || '',
            pass: true
        }
        this.form_id = form_id++;
        this.pass = true;
    }
    verifystrlength() {
        const { value } = this.state;
        return value.length > 6;
    }
    // 输入处理
    changeHandle = (e) => {
        // 输入响应
        const { value } = e.target;
        this.setState({
            value
        });
        // 输入校验
        this.checkPass();
    }
    // 校验响应
    checkPass() {
        if (this.required && !this.validator()) {
            this.pass = false;
            this.setState({
                pass: false
            })
        } else {
            this.pass = true
            this.setState({
                pass: true
            })
        }
    }
    // 失焦响应
    blurHandle() {
        const { pass } = this.state;
        this.checkPass();
    }
    render() {
        const { value, pass } = this.state;
        const { label, input, message } = this.props;
        const { name: labelName, ...labelAttr } = label;
        return (
            <div>
                <label htmlFor={`form-${this.form_id}`} {...labelAttr}>{labelName}</label>
                <input  {...input}
                    value={value}
                    id={`form-${this.form_id}`}
                    onChange={this.changeHandle.bind(this)}
                    onBlur={this.blurHandle.bind(this)}
                />
                {!pass && <p>{message}</p>}
            </div>
        );
    }
}


export class FormList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pass: true
        }
    }
    submit() {
        const { refs } = this;
        Object.keys(refs).forEach((item) => {
            refs[item].checkPass()
        })
        const res = Object.keys(refs).every((item) => {
            return refs[item].pass === true
        })
    }
    render() {
        const { list = [] } = this.props;
        return (
            <form action="">
                {
                    list.map((item, index) => <FormItem {...item} key={index} ref={index} />)
                }
                <div onClick={this.submit.bind(this)}>submit</div>
            </form>
        )
    }
}