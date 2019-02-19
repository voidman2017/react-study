import React, { Component } from 'react';
import TabsControl from '@lib/tabsControl';

class Tab extends Component {
    render() {
        return (
            <div className="page-tab">
                <TabsControl className="demo-swiper" historyKey="fType">
                    <div className="swiper-slide slide1" label="大栏目1">
                        <span>silde 1</span>
                    </div>
                    <div className="swiper-slide slide2" label="大栏目2">
                        {/* <span> silde 2 </span> */}
                        <TabsControl className="second-swiper" conf={{ nested: true }} historyKey="sType">
                            <div className="swiper-slide slide5" label="子栏目2-1"> silde 15 </div>
                            <div className="swiper-slide slide6" label="子栏目2-2"> silde 16 </div>
                            <div className="swiper-slide slide7" label="子栏目2-3"> silde 17 </div>
                        </TabsControl>
                    </div>
                    <div className="swiper-slide slide3" label="大栏目3"> silde 3 </div>
                    <div className="swiper-slide slide3" label="大栏目4">
                        <TabsControl className="second-swiper" conf={{ nested: true }} historyKey="tType">
                            <div className="swiper-slide slide5" label="子栏目4-1"> silde 15 </div>
                            <div className="swiper-slide slide6" label="子栏目4-2"> silde 16 </div>
                            <div className="swiper-slide slide7" label="子栏目4-3"> silde 17 </div>
                            <div className="swiper-slide slide7" label="子栏目4-4"> silde 17 </div>
                        </TabsControl>
                    </div>
                </TabsControl>
            </div>
        );
    }
}

export default Tab;