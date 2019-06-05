
import { connect } from "react-redux";
import {isTypeOf} from '../../tool/common';


const subscribe = ( data, key, cname ) => {
    let parts = key.split('.'), 
        len = parts.length,
        ekey = "";
    parts.every(( skey, index ) => {
        if( isTypeOf(skey) !== "string" || !skey ) return true;  //过滤空字符串
        const isObj = isTypeOf(data) === "object";
        data = isObj ? data[skey] : undefined;  
        return true;
    });
    const isObj = isTypeOf(data) === "object";
    return cname ? { [cname] : data } : ( 
            isObj ? { ...data } : 
                ( ekey = parts.pop(), 
                    { [ekey] : data } ) 
        )
}

/**
 * ==== store 操作高阶函数实现 ====
 * @param { Function } dispatch 调度器
 * @return { Function } 封装后的调度器
*/
const fullback = ( dispatch ) => {
    return function( id, type, data ){
        return new Promise(( resolve, reject ) => {
            resolve(dispatch(concatActionAndType( id )(type, data)))
        }).catch( err => {
            console.error(`redux错误日志：${id}_${type}`, err)
        });
    }
}

/**
 * ==== redux 连接函数 ====
 * @param { Array } keys 需要订阅的数据集
 * @return { Function } 返回connect方法,此方法接收一个组件参数
*/
export const connectRedux = function( keys = [] ){

    isTypeOf( keys ) == "string" && (keys = [ keys ])

    return ( component ) => connect(function( store ){

        const monitor = { };
        //循环遍历数据集，从store获取订阅数据
        keys.forEach(( key = "" ) => {
            let parts = key.split(':');
            const data = subscribe.apply(null, [{ 
                ...store 
            }].concat( parts ))
            Object.assign( monitor, { ...data });
        })

        return { ...monitor };

    }, function( dispatch ){
        return {
            mapDispatchToStore : fullback( dispatch )   //store 操作入口 return Promise 对象
        }
    })(component)
}

/**
 * ==== action 连接函数 ====
 * @param { String } Action模块名
 * @return { Function } Action调度器
*/
export const concatActionAndType = function( pageName ){
    return function( type, options ){
        return {
            type : `${pageName}_${type}`,
            ...options
        }
    }
}

export const nameConnectReducer = function( pageName, fn, initState = { } ){
    return function( state = initState, action ){
        let exp = new RegExp("^"+ pageName +"_", "g");
        if( !exp.test(action.type) ){
            return state;
        }
        return fn( state, {
            ...action, 
            type : action.type.slice( pageName.length + 1 )
        });
    }
}