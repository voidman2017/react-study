
import { cookies, setGlobalVariable } from '../tool';

const ua = navigator.userAgent.toLowerCase(),
    arr = [], slice = arr.slice;

/**
 * ==== 获取设备类型 =====
 */
const getPlatform = () => {
    switch(true){
        case /iphone|ipad/.test(ua) :    //IOS
            return 'ios';
        case /android|adr/.test(ua) && !(/windows phone/.test(ua)) :    //安卓
            return 'android';
        default : 
            return 'pc';
    }
}

/**
 * ==== 获取当前渠道类型 =====
 * 1.可自定义新增对应渠道
 */
const getChannel = () => {
    switch(true){
        case /micromessenger/i.test(ua) :
            return 'wx';
        case !!cookies("origin") :
            return 'app';
        case !!cookies("platform") :
            return 'app';
        default :
            return 'wx';
    }
}

const CHANNEL = getChannel();           //渠道来源
const PLATFORM = getPlatform();         //平台类型
const APPID = "111111111111111111";     //APP ID

//获取设备高度
const DEVICEGEIGHT = window.innerHeight || 
                        document.documentElement.clientHeight || 
                        document.body.clientHeight;  
       
//获取设备宽度
const DEVICEWIDTH  = window.innerWidth || 
                        document.documentElement.clientWidth || 
                        document.body.clientWidth;

export default setGlobalVariable("BASE", { 
    DEVICEGEIGHT,
    DEVICEWIDTH,
    CHANNEL, 
    PLATFORM, 
    APPID
});