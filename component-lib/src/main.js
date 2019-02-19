import React from 'react';
import ReactDOM from 'react-dom';
import Routers from "./routers";
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';
import 'swiper/dist/css/swiper.min';

const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <Routers />
  </Provider>
  , document.getElementById('app')
);