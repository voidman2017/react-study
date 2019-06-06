import { combineReducers } from 'redux';
import { createStore } from 'redux';
import list from "./list";
import user from "./user";
import product from './product';
import data from './data';


const rootReducer = combineReducers({
    list,
    user,
    product,
    data,
})


const store = createStore(rootReducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;