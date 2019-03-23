import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";

import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import reducers from "./reducers";
import App from './App';
import { unregister } from './serviceWorker'

const store = createStore(reducers, applyMiddleware(ReduxPromise));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

unregister()
