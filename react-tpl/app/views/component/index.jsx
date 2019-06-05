import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from "react-redux";

//空页面组件
export class EmptyPage extends Component{
    constructor(props){
        super(props)
        const { config, config : { link, btn, txt } } = props;
        const btnStyle = "trc-btn trc-btn-outline trc-btn-blue";
        const btnLink = this.analysisLink( btn, link );
        const btnTxt = this.analysisTxt( btn, txt );
        const btnTag = this.analysisTag( btnLink );
        Object.assign(config, { btnLink, btnStyle, btnTxt, btnTag })
    }
    analysisLink( type, link = "/index" ){
        switch( type ){
            case "back" :
                document.referrer && (link = "javascript:window.history.go(-1);"); break;
            case "refresh" :
                link = "javascript:window.location.reload();"; break
            default : 
                break;
        }
        return link;
    }
    analysisTag( link ){
        return /^\/[a-zA-Z0-9_]+/.test(link) ? "Link" : "a";
    }
    analysisTxt( type, txt ){
        switch( type ){
            case "refresh":
                return txt || "刷新";
            default :
                return txt || "返回";
        }
    }
    render(){
        const { 
            title, msg, icon = "bill", btnTag,
            btnLink, btnTxt, btnStyle 
        } = this.props.config;
        return (
            <div className="empty-page">
                <div className={`empty-icon ${icon}`}></div>
                <h4>{ title }</h4>
                <p>{ msg }</p>
                <div className="empty-btns-wrap">
                    {
                        btnTag == "Link" ? <Link className={ btnStyle } to={ btnLink }>{ btnTxt }</Link> :
                            (btnTag == "a" ? <a className={ btnStyle } href={ btnLink }>{ btnTxt }</a> : "")
                    }
                </div>
            </div>
        )
    }
}

//页面加载动画
export class LoadPage extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const { msg } = this.props.config;
        return (
            <div className="load-page">
                <div className="trc-icon-loading"></div>
                <p>{ msg }</p>
            </div>
        )
    }
}
