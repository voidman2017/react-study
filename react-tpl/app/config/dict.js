import { setGlobalVariable } from '../tool';

const DICT = {
    "TIPS" : {
        "NETWORK" : {
            "5XX" : "啊喔，服务器开小差了！",
            "503" : "请求超时，请稍后再试！",
            "401" : "请先登录后在操作！",
            "404" : "啊喔，未找到对应接口"
        }
    }
}

export default setGlobalVariable("DICT", DICT);