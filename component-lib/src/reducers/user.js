import createReducers from './tool/createReducers.js';

let initState = {
   isLogined: false
};


function action(state = initState, action) {
    switch (action.type) {
        case "profile":
            return { ...state, isLogined: action.data };
    }
}

export default createReducers("user", action, initState);