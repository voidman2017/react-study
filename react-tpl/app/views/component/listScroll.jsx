import { compose } from "../../tool/util";
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import Ajax from '@tool/ajax';
import { EmptyPage } from './index';
import { connectRedux } from '../../reducers/tool';

export class List extends PureComponent {
    constructor(props) {
        super(props);
        this.init(props);
    }
    getChildren() {
        let { children } = this.props;
        return React.Children.map(children, (child) => {
            return React.cloneElement(child, { 
                request : this.request.bind(this),
                destoryClear : this.destoryClear.bind(this)
            })
        })
    }
    componentDidMount() {
        const { elemt = "" } = this.props;
        this.$elemt = document.getElementById(elemt);
        this.bindScrollEvent(); //绑定滚动监听事件
        this.request()
    }
    componentWillUnmount() {
        this.destroy.call(this) //卸载时解除滚动监听
    }
    render() {
        let { wrapScrollClass = "list-wrap", info = "init" } = this.props;
        return (
            <div className={`${wrapScrollClass} rScroll`}>
                { this.getChildren() }
                <div ref="anchor"> { SearchShow( info ) } </div>
            </div>
        )
    }
}

export const ListScroll = compose(function (component) {
    Object.assign(component.prototype, {
        init(props) {
            const { params = { } } = props;
            this.ajax = Ajax( props.api ).updateParams( params );  //初始化请求
        },
        request( params = { } ){
            const { load = true, str = "", pSize = "pageSize"  } = this.props;
            if( load ){
                this.mapDispatchToStore( "Scroll_Loading" );
                this.ajax.updateParams( params )
                        .get( str )
                        .then( res => {
                            const { [ pSize ] : size = 10 } = this.ajax.getParam();
                            this.mapDispatchToStore( "Scroll_Success", { res, pSize : size} )
                        })
            }
        },
        upatePage( params ){
            const { pIndex } = this.props;
            params[pIndex]++;
            return params;
        },
        mapDispatchToStore( type, data = { } ){
            const { namespace = "" } = this.props;
            const arr = namespace.split(".");
            this.props.mapDispatchToStore( arr[0], type, { key : arr[1], ...data } );
        },
        destoryClear(){
            this.mapDispatchToStore( "Scroll_clear" )
        },
        destroy() {
            this.unbindScrollEvent();
            if (this.props.destroyClear) {
                this.destoryClear()
            }
        },
        isSole(){
            const { $elemt, refs : { anchor } } = this;
            const { offsetHeight, scrollTop } = $elemt;
            return offsetHeight  > anchor.offsetTop - scrollTop;  //判断是否触底
        },
        scrollHandle(){
            const { isMore, isLoading, pIndex = "pageIndex" } = this.props;
            if ((isMore == null || isMore) && !isLoading && this.isSole()) {
                //在此处实现页码+1
                this.request( this.upatePage.bind(this) );
            }

            if ( isMore == false ) {
                this.unbindScrollEvent()
            }
        },
        bindScrollEvent( ) {
            this.$elemt.addEventListener('scroll', this.scrollHandle.bind(this));
            this.unbindScrollEvent = () => this.$elemt.removeEventListener('scroll', this.scrollHandle.bind(this))
        }
    });
    return component
})(List);

export class ConnectScroll extends PureComponent{
    constructor(props){
        super(props);
        this.init()
    }
    init(){
        const { namespace } = this.props;
        this.CScroll = connectRedux([
            `${namespace}.info`,
            `${namespace}.isMore`,
            `${namespace}.isLoading`,
        ])(ListScroll)
    }
    render(){
        return <this.CScroll { ...this.props } />
    }
}

export const SearchShow = (statu) => {
    switch (statu) {
        case "init":
            return '';
        case "loading":
            return <LoadingFlash />
        case "hasMore":
            return <div className="drop-statu-box">下拉加载更多</div>
        case "noData":
            return <EmptyPage config={{ title: "暂无相关记录", msg: "" }} />
        default:
            return <div className="drop-statu-box">别拉了，我也是有底线的~</div>
    }
}

//上拉加载中....
export let LoadingFlash = () => (
    <div className="spinner">
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
    </div>
);