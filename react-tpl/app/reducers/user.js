import { nameConnectReducer } from './tool';

let initState = {
    isLogined  : false,      //登录状态
    list : [ 2 ]
}

const updateLoginStatu = ( data ) =>{
    const isLogined = !!data.phone
    return { isLogined };
}

function action( state = initState, action ){
    const { type, ...rest } = action;
    switch( type ){
        case "info" :
            return { ...state, ...updateLoginStatu( rest ) }
        case "test":
            return { ...state, list : [ 1, 2 ] } 
        default :
            return { ...state };
    }
}

export default nameConnectReducer("user", action, initState);