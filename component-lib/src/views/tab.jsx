import React, { Component } from 'react';
import TabsControl from '@lib/tabsControl';
import '@css/tab.less';

class Tab extends Component {
    componentDidMount(){
       
    }
    render() {
        return (
            <div>
                <div className="color">color</div>
                <div className="">
                <TabsControl className="demo-swiper" historyKey="ptype">
                    <div className="swiper-slide slide1" label="出借计划"> 
                        <span>silde 1</span>
                    </div>
                    <div className="swiper-slide slide2" label="散标列表"> 
                        <span> silde 2 </span> 
                        <TabsControl className="second-swiper" conf={{ nested : true }} historyKey="ctype">
                            <div className="swiper-slide slide5" label="看看"> silde 15 </div>
                            <div className="swiper-slide slide6" label="笑笑"> silde 16 </div>
                            <div className="swiper-slide slide7" label="哭哭"> silde 17 </div>
                        </TabsControl>
                    </div>
                    <div className="swiper-slide slide3" label="转让专区"> silde 3 </div>
                </TabsControl>
            </div>
            </div>
        );
    }
}

export default Tab;