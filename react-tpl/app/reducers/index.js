import { combineReducers } from 'redux';

import user from './user';
import other from "./other";
import product from './product';

const rootReducer = combineReducers({
    user,
    other,
    product
});

export default rootReducer;