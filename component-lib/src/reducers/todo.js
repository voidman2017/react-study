let initialState = { count: 0 };

function todo(state = initialState, action) {
    switch (action.type) {
        case 'increase':
            return { ...state, count: state.count + 1 };
        case 'decrease':
            return { ...state, count: state.count - 1 };
        case 'add' : 
            return { ...state, count: state.count + ~~action.num}
        default:
            return state;
    }
}

export default todo;