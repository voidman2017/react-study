import React, { PureComponent } from 'react';
import { TRCSwiper } from '@component/swiper';

import "@assets/demo/swiper.scss";

class SwiperDemo extends PureComponent {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="">
                <TRCSwiper className="demo-swiper" historyKey="ptype">
                    <div className="swiper-slide slide1" label="出借计划"> 
                        <span>silde 1</span>
                    </div>
                    <div className="swiper-slide slide2" label="散标列表"> 
                        <span> silde 2 </span> 
                        <TRCSwiper className="second-swiper" conf={{ nested : true }} historyKey="ctype">
                            <div className="swiper-slide slide5" label="看看"> silde 15 </div>
                            <div className="swiper-slide slide6" label="笑笑"> silde 16 </div>
                            <div className="swiper-slide slide7" label="哭哭"> silde 17 </div>
                        </TRCSwiper>
                    </div>
                    <div className="swiper-slide slide3" label="转让专区"> silde 3 </div>
                </TRCSwiper>
            </div>
        )
    }
}

export default SwiperDemo;