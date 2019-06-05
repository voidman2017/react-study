import createReducers from './tool/createReducers.js';

let initState = {
    isLogined: false,
};

function action(state = initState, action) {
    switch (action.type) {
        case "profile":
            const { isLogined, name } = action.data;
            return { ...state, isLogined, name };
    }
}

export default createReducers("user", action, initState);