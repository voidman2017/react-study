import { nameConnectReducer } from './index';

export const ScrollState = (params) => {
    
    let { data, isMore, isLoading } = params;
    let ret;
    if (!data) {
        ret = "init"
    } else if (!data.length) {
        ret = "noData"
    } else if (isLoading) {
        ret = "loading"
    } else if (isMore) {
        ret = "hasMore"
    } else {
        ret = "noMore"
    }
    params.info = ret
}
    
export const ScrollConnectReducer = (name, fn, initState) => {
    
    return nameConnectReducer(name, (state, action) => {

        if (action.type.indexOf('Scroll') == 0) {
            let list = action.key ? state[action.key] || {} : state;
            switch (action.type) {
                case "Scroll_Loading":
                    list = { ...list, isLoading: true };
                    ScrollState(list)
                    return action.key ? { ...state, [action.key]: list } : { ...list };
                case "Scroll_Success":
                    let { res, pSize = 10 } = action;   
                    res || ( res = [])
                    list = {
                        ...list,
                        data: [].concat(list.data || [], res),
                        isMore: res.length >= pSize
                    };
                    list.isLoading = false;
                    ScrollState(list)
                    return action.key ? { ...state, [action.key]: list } : { ...list };
                case "Scroll_clear":
                    if (action.key) {
                        delete state[action.key];
                        return state
                    } else {
                        return {}
                    }
            }
        } else {
            return fn(state, action)
        }
    }, initState)
}