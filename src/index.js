//DEPENDENCIES
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import './index.css';
import './assets/css/bootstrap.css';

import './style.css';
import * as serviceWorker from './serviceWorker';


// Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";
import Reducer from "./store/Reducers/reducers";

const createStoreWithMiddleWare = applyMiddleware(promiseMiddleware,ReduxThunk)(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleWare(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
<BrowserRouter>   
<Routes />
</BrowserRouter>  
</Provider>
,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
