import { combineReducers } from 'redux';
import todo from './todo';
import list from "./list";
import user from "./user";

const rootReducer = combineReducers({
    todo,
    list,
    user
})

export default rootReducer;