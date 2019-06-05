import { combineReducers } from 'redux';
import { createStore } from 'redux';
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


const store = createStore(rootReducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;