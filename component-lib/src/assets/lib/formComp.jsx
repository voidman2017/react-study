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
    }
    verifystrlength(value) {
        return value.length > 6;
    }
    changeHandle = (e) => {
        const { value } = e.target;
        this.setState({
            value
        });
        if (this.required && !this.validator(value)) {
            this.setState({
                pass: false
            })
        } else {
            this.setState({
                pass: true
            })
        }
    }
    blurHandle(){
        const { pass } = this.state;
        console.log(pass)
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


export class FormList extends Component{
    constructor(props){
        super(props)
        this.state = {
            pass: true
        }
    }
    render(){
        const { list = [] } = this.props;
        return(
            <form action="">
                {
                    list.map((item, index) => <FormItem {...item} key={index} /> )
                }
            </form>
        )
    }
}