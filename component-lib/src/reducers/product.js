import { ScrollConnectReducer } from "./tool/scrollReducers";

const action = ( state = { }, action ) => {
    switch(action.type){
        default :
            return { ...state }
    }
}

export default ScrollConnectReducer("product", action, { });