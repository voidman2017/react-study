import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Swiper from 'swiper';
// import '@css/tab.scss';
import a from '@css/tab.less';
console.log(a)
class tab extends Component {
    componentDidMount(){
        var mySwiper = new Swiper('.swiper-container', {
        
        });
    }
    render() {
        return (
            <div>
                <Link to="/index" className="link">home</Link>
                <div className="color">color</div>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">Slide 1</div>
                        <div className="swiper-slide">Slide 2</div>
                        <div className="swiper-slide">Slide 3</div>
                    </div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-scrollbar"></div>
                </div>
            </div>
        );
    }
}

export default tab;