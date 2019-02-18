import createReducers from './tool/createReducers.js';

let initState = {
    list: [1, 2, 3]
};


function action(state = initState, action) {
    switch (action.type) {
        case "add_list":
            return { ...state, list: [].concat(state.list, action.data) };
    }
}

export default createReducers("list", action, initState);