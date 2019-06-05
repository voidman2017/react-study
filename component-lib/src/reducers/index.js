import { combineReducers } from 'redux';
import todo from './todo';
import list from "./list";
import user from "./user";
import product from './product';

const rootReducer = combineReducers({
    todo,
    list,
    user,
    product,
})

export default rootReducer;