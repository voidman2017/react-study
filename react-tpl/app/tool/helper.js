import { isTypeOf } from "./util";

export function date(date, format) {
    if (!date)
        return '--';
    format = format || 'yyyy-MM-dd hh:mm:ss';   //默认输出格式
    if (typeof date == 'string')
        date = date.replace(/-/g, '/');          //ie时间格式兼容
    date = new Date(date);
    var map = {
        "M": date.getMonth() + 1, //月份
        "d": date.getDate(), //日
        "h": date.getHours(), //小时
        "m": date.getMinutes(), //分
        "s": date.getSeconds(), //秒
        "q": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
    format = format.replace(/([yMdhmsqS])+/g, function (all, t) {
        var v = map[t];
        if (v !== undefined) {
            if (all.length > 1) {
                v = '0' + v;
                v = v.substr(v.length - 2);
            }
            return v;
        }
        else if (t === 'y') {
            return (date.getFullYear() + '').substr(4 - all.length);
        }
        return all;
    });
    return format;
}

export function substr(str = "", num = 0) {
    str = "" + str;
    let len = str.length, start = 0;
    if (num < 0) {
        num = Math.abs(num);
        start = len - num;
    }
    return str.substr(start, num);
}

export function now(date, num) {
    return date || +new Date + (num || 0) * 86400000;
}


export function retain(num, decimal = 2){
    const base = Math.pow(10, decimal + 1);
    num = parseInt( num * base);
    return (num / base).toFixed(decimal);
}

export function numberFormatter(n, m) {
    return Number(n) == n ? function () {
        m = isNaN(m) ? 2 : Math.abs(m);             //参数容错，默认保留2位小数,负数去符号
        var sign = n < 0 ? '-' : '';                //保存符号
        n = Math.abs(n).toFixed(m);                 //去符号
        return m ? function () {
            var numArr = n.split('.');              //带小数点才切    千分制正则：/\B(?=(?:\d{3})+(?!\d))/g
            return sign + numArr[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, ',') + '.' + numArr[1];
        }() : sign + n.replace(/\B(?=(?:\d{3})+(?!\d))/g, ',')       //否则直接格式化
    }() : "0.00";
}

export function bankcard(cardId, num) {
    return function () {
        cardId = cardId || '0000000000000000000', num = num || 4;
        var regx = new RegExp('\\d{' + num + '}', 'g');
        return cardId.replace(regx, function ($0) {
            return $0 + '&nbsp;&nbsp;';
        })
    }
}

export function base64encode(str) {

    var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var out = "", i = 0, len = str.length;
    var c1, c2, c3;

    while (i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt((c1 & 0x3) << 4);
            out += "==";
            break;
        }
        c2 = str.charCodeAt(i++);
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += base64EncodeChars.charAt((c2 & 0xF) << 2);
            out += "=";
            break;
        }
        c3 = str.charCodeAt(i++);
        out += base64EncodeChars.charAt(c1 >> 2);
        out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
        out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
        out += base64EncodeChars.charAt(c3 & 0x3F);
    }
    return out;
}


export function utf16to8(str) {
    var out = "", i, c, 
        len = str.length;
    for (i = 0; i < len; i++) {
        c = str.charCodeAt(i);
        if ((c >= 0x0001) && (c <= 0x007F)) {
            out += str.charAt(i);
        } else if (c > 0x07FF) {
            out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
            out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
        } else {
            out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
        }
    }
    return out;
}