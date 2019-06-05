import util, { isTypeOf } from './util';
import cookies from './cookies';
import helper from './helper';

const setGlobalVariable = ( key, val ) => {

    if( isTypeOf(window.$GLOBAL) != "object" ) window.$GLOBAL = { };

    return (window.$GLOBAL[key] = val);
}

module.exports = {
    util,
    cookies,
    helper,
    setGlobalVariable
}