export const isTypeOf = ( val ) => {
    const type = toString.call(val);
    switch(type){
        case "[object Error]": 
            return "error";
        case "[object Array]": 
            return "array";
        case "[object RegExp]": 
            return "regExp";
        case "[object Number]": 
            return "number";
        case "[object Object]": 
            return "object";
        case "[object String]": 
            return "string";
        case "[object Boolean]": 
            return "boolean";
        case "[object Function]": 
            return "function";
        case "[object Undefined]": 
            return "undefined";
        default : 
            return "null";
    }
};

export const throttle = function( func, wait, options ){

    let context, args, result;
    let timeout = null, previous = 0;
    if (!options) options = {};

    const later = function(){
        previous = options.leading === false ? 0 : +new Date;
        timeout = null, result = func.apply(context, args);
        if (!timeout) context = args = null;
    }

    return function(){
        
        let now = +new Date;
        if (!previous && options.leading === false) previous = now;

        let remaining = wait - (now - previous);
        context = this, args = arguments;

        if(remaining <= 0 || remaining > wait){
            if(timeout){
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
        }else if(!timeout && options.trailing !== false){
            timeout = setTimeout(later, remaining);
        }
        return result;
    }
}

export const compose = (...func) => {
    if (!func.length) {
        return (args) => args
    } else {
        const last = func[func.length-1];
        const ret = func.slice(0,-1);
        return (...arg) => ret.reduceRight((component, fn) => fn(component), last(...arg))
    }
};

export const camelCase = function(name = ""){
    return name.toLowerCase()
                .replace(/(_+[a-zA-Z]{1})/g, ($1) => {
                    return $1.replace(/_+/, "").toUpperCase();
                });
}

export const compare =(x, y) => {

    let p

    if (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y)) {
        return true
    }

    if (x === y) {
        return true
    }

    if (typeof x === 'function' && typeof y === 'function') {
        if ((x instanceof RegExp && y instanceof RegExp) ||
            (x instanceof String || y instanceof String) ||
            (x instanceof Number || y instanceof Number)) {
            return x.toString() === y.toString()
        } else {
            return false
        }
    }
    if (x instanceof Date && y instanceof Date) {
        return x.getTime() === y.getTime()
    }

    if (!(x instanceof Object && y instanceof Object)) {
        return false
    }
    if (x.prototype !== y.prototype) {
        return false
    }
    if (x.constructor !== y.constructor) {
        return false
    }
    for (p in y) {
        if (!x.hasOwnProperty(p)) {
            return false
        }
    }
    for (p in x) {
        if (!y.hasOwnProperty(p)) {
            return false
        }
        if (typeof y[p] !== typeof x[p]) {
            return false
        }
        if (x[p] !== x && y[p] !== y && !compare(x[p], y[p])) {
            return false
        }
    }

    return true
};


export const base64encode = ( str = "" ) => {

    // 编码start
    const base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var out = "", i = 0, len = str.length;
    var c1, c2, c3;

    while(i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if(i == len)
        {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt((c1 & 0x3) << 4);
            out += "==";
            break;
        }
        c2 = str.charCodeAt(i++);
        if(i == len)
        {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
            out += base64EncodeChars.charAt((c2 & 0xF) << 2);
            out += "=";
            break;
        }
        c3 = str.charCodeAt(i++);
        out += base64EncodeChars.charAt(c1 >> 2);
        out += base64EncodeChars.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
        out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >>6));
        out += base64EncodeChars.charAt(c3 & 0x3F);
    }
    return out;
}

export const utf16to8 = (str) => {
    var out, i, len, c;

    out = "";
    len = str.length;
    for(i = 0; i < len; i++) {
        c = str.charCodeAt(i);
        if ((c >= 0x0001) && (c <= 0x007F)) {
            out += str.charAt(i);
        } else if (c > 0x07FF) {
            out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
            out += String.fromCharCode(0x80 | ((c >>  6) & 0x3F));
            out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));
        } else {
            out += String.fromCharCode(0xC0 | ((c >>  6) & 0x1F));
            out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));
        }
    }
    return out;
};