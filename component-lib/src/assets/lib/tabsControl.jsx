import React, { PureComponent } from 'react';
import Swiper from 'swiper';
import '@css/tabsControl';
class TabsControl extends PureComponent {
    constructor(props) {
        super(props);
        this.initChildBullet();
    }
    initChildBullet() {
        this.bullet = []
        let { children = [] } = this.props;
        if (children instanceof Array) {
            children.map((child, index) => {
                const { label = "", value = index } = child.props;
                this.bullet.push({ label, value });
            })
        } 
        return this.bullet;
    }
    defConf = {
        freeMode: false,
        bulletClass: "bullet",
        slidesPerView: 1,
        slideNextClass: "next",
        slidePrevClass: "prev",
        slideActiveClass: "activity",
        bulletActiveClass: "activity",
        paginationCurrentClass: "current",
        paginationClickable: true,
        pagination: {
            clickable: true,
            renderBullet: (index, className) => {
                if (this.bullet.length > 1) {
                    return `<li class="${className}">${this.bullet[index].label}</li>`;
                } else {
                    return "";
                }
            },
        },
        on: {
            slideChangeTransitionEnd: (swiper) => {
                const { historyKey } = this.props;
                console.log(this.getHistoryState())
                if (historyKey && this.swiper) {   //如果有设置historyKey则保存slide切换状态
                    history.replaceState(this.merge(
                        this.getHistoryState(),
                        { [historyKey]: this.swiper.activeIndex }
                    ), null, location.pathname);
                }
            }
        }
    }
    getHistoryState() {
        return history.state || {};
    }
    merge(...rest) {
        return rest.reduce((object, current) => {
            return Object.assign(object, current)
        }, {});
    }
    deepMerge(obj1, obj2) {
        var key;
        for(key in obj2) {
            // 如果target(也就是obj1[key])存在，且是对象的话再去调用deepMerge，否则就是obj1[key]里面没这个对象，需要与obj2[key]合并
            obj1[key] = obj1[key] && obj1[key].toString() === "[object Object]" ?
            this.deepMerge(obj1[key], obj2[key]) : obj1[key] = obj2[key];
        }
        return obj1;
    }
    deepMergeList(...rest){
        return rest.reduce((last, current)=>{
            return this.deepMerge(last, current)
        })
    }
    componentDidMount() {
        const { conf, historyKey = "tabs" } = this.props;
        const { [historyKey]: initialSlide = 0 } = this.getHistoryState();    //获取history堆栈中state用以定位到指定slide
        this.swiper = new Swiper(
            this.refs.container,
            this.deepMergeList(this.defConf, {          //合并conf参数
                initialSlide,
                pagination: {
                    el: this.refs.tabs,
                    // el:".swiper-pagination"
                }
            }, conf)
        );
    }
    render() {
        const { className = "" } = this.props;
        return (
            <div className={`${className} list-swiper-subassembly`}>
                <div className="swiper-tab">
                    <ul className="clearfix swiper-pagination" ref="tabs">

                    </ul>
                </div>
                <div className="swiper-container" ref="container">
                    <div className="swiper-wrapper clearfinx">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default TabsControl;