import { combineReducers } from 'redux';
import todo from './todo';
import list from "./list";

const rootReducer = combineReducers({
    todo,
    list
})

export default rootReducer;