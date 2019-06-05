import React, { Component } from 'react';
import { isTypeOf } from '../tool/common';
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



/* 属性refs应用
https://blog.csdn.net/suwu150/article/details/72802129 */

class FormApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRadio = this.handleRadio.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.state = {
            inputValue: 'input value',
            selectValue: 'A',
            radioValue: 'B',
            checkValues: [],
            textareaValue: 'some text here,,,,,'
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        /*    console.log(e);
              console.log(ReactDOM.findDOMNode(this.refs['goodInput']).value);
              console.log(ReactDOM.findDOMNode(this.refs['goodSelect']).value);
              console.log(ReactDOM.findDOMNode(this.refs['goodTextarea']).value);
        */
        var formData = {
            input: ReactDOM.findDOMNode(this.refs['goodInput']).value,//this.refs.goodInput.findDOMNode().value,
            select: ReactDOM.findDOMNode(this.refs['goodSelect']).value,//this.refs.goodSelect.findDOMNode().value,
            textarea: ReactDOM.findDOMNode(this.refs['goodTextarea']).value,//this.refs.goodTextarea.findDOMNode()().value,
            radio: this.state.radioValue,
            check: this.state.checkValues,
        }
        console.log(formData);
    }
    handleRadio(e) {
        this.setState({
            radioValue: e.target.value,
        })
    }
    handleCheck(e) {
        var checkValues = this.state.checkValues.slice();
        var newVal = e.target.value;
        var index = checkValues.indexOf(newVal);
        if (index == -1) {
            checkValues.push(newVal)
        } else {
            checkValues.splice(index, 1);
        }
        this.setState({
            checkValues: checkValues,
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input ref="goodInput" type="text" defaultValue={this.state.inputValue} />
                <br />
                选项：
                    <select defaultValue={this.state.selectValue} ref="goodSelect">
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                </select>
                <br />
                <p>radio button!</p>
                <RadioButtons ref="goodRadio" handleRadio={this.handleRadio} />
                <br />
                <Checkboxes handleCheck={this.handleCheck} />
                <br />
                <textarea defaultValue={this.state.textareaValue} ref="goodTextarea"></textarea>
                <br />
                <button type="submit">提交</button>
            </form>
        )
    }
}
class RadioButtons extends React.Component {
    saySomething() {
        alert("yo what's up man!!!");
    }
    render() {
        return (
            <span>
                A<input onChange={this.props.handleRadio} name="goodRadio" type="radio" value="A" />
                B<input onChange={this.props.handleRadio} name="goodRadio" type="radio" defaultChecked value="B" />
                C<input onChange={this.props.handleRadio} name="goodRadio" type="radio" value="C" />
            </span>
        )
    }
}
class Checkboxes extends React.Component {
    render() {
        return (
            <span>
                A<input onChange={this.props.handleCheck} name="goodCheckbox" type="checkbox" value="A" />
                B<input onChange={this.props.handleCheck} name="goodCheckbox" type="checkbox" value="B" />
                C<input onChange={this.props.handleCheck} name="goodCheckbox" type="checkbox" value="C" />
            </span>
        )
    }
}