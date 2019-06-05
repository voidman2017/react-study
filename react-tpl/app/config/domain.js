import { setGlobalVariable } from '../tool';

const protocol = window.location.protocol;     //协议类型

const DOMAIN = {
    AUTHEN     : `${protocol}//passport.example.com`,
    CLI    : `${protocol}//cli.example.com`,
}

export default setGlobalVariable("DOMAIN", DOMAIN);