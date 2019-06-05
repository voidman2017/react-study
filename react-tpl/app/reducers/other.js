import { nameConnectReducer } from './tool';

let initState = {
    test  : +new Date,
    num : 2
}

function action( state = initState, action ){
    const { type, data } = action;
    switch( type ){
        case "info" :
            return { ...state, ...data }
        default :
            return { ...state };
    }
}

export default nameConnectReducer("other", action, initState);