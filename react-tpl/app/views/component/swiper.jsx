import React, { PureComponent } from 'react';
import { LoadPage, EmptyPage } from './index';
import Ajax from '@tool/ajax';

import "@assets/plugin/swiper-3.4.2/swiper.min.css";
import "@assets/plugin/swiper-3.4.2/swiper.min.js";

export class TRCSwiper extends PureComponent{
    constructor(props){
        super(props);
        this.initChildBullet();
    }
    initChildBullet(){
        this.bullet = [ ]
        let { children = [ ] } = this.props;
        return children.map((child, index) => {
            const { label = "", value = index } = child.props;
            this.bullet.push({ label, value });
        })
    }
    defConf = {
        freeMode : false,
        bulletClass : "bullet", 
        slidesPerView : 1,
        slideNextClass : "next",
        slidePrevClass : "prev",
        slideActiveClass : "activity",
        bulletActiveClass : "activity",
        paginationCurrentClass : "current",
        paginationClickable : true,
        paginationBulletRender : ( swiper, index, className ) => {
            if( swiper.slides.length > 1 ){
                return `<li class="${className}">${ this.bullet[index].label }</li>`;
            }else{
                return "";
            }
        },
        onSlideChangeEnd : ( swiper ) => {
            const { historyKey } = this.props;
            if( historyKey ){   //如果有设置historyKey则保存slide切换状态
                history.replaceState(this.merge(
                    this.getHistoryState(),
                    { [ historyKey ] : swiper.activeIndex }
                ), null, location.pathname);
            }
        }
    }
    getHistoryState(){
        return history.state || { };
    }
    merge( ...rest ){
        return rest.reduce( ( object, current ) => {
            return Object.assign( object, current )
        }, { });
    }
    componentDidMount() {
        const { conf, historyKey = "tabs" } = this.props;
        const { [ historyKey ] : initialSlide = 0 } = this.getHistoryState();    //获取history堆栈中state用以定位到指定slide
        const swiper = new Swiper(
            this.refs.container, 
            this.merge(this.defConf, {          //合并conf参数
                initialSlide,
                pagination : this.refs.tabs,
            }, conf)
        );
    }
    render(){
        const { className = "" } = this.props;
        return (
            <div className={ `${className} list-swiper-subassembly` }>
                <div className="swiper-tab">
                    <ul className="clearfix" ref="tabs">

                    </ul>
                </div>
                <div className="swiper-container" ref="container">
                    <div className="swiper-wrapper clearfinx">
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }
}