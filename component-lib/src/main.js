import React from 'react';
import ReactDOM from 'react-dom';
import Routers from "./routers";
import store from './reducers';
import { Provider } from 'react-redux';
import '@css/base';
import 'swiper/dist/css/swiper.min';


ReactDOM.render(
  <Provider store={store}>
    <Routers />
  </Provider>
  , document.getElementById('app')
);