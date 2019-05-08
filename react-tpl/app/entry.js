import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import React from 'react';
import reducers from './reducers';
import AppRoutes from './routes';
import './config';

/**
 * ==== 加载基础样式库 ====
*/
import "@assets/sass/base.scss";
import "@assets/sass/common.scss";

const store = createStore(reducers, { }, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render((
    <Provider store={ store }>
        <BrowserRouter keyLength={12}>
            <AppRoutes />
        </BrowserRouter>
    </Provider>
), document.getElementById("app"));