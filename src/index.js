import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import 'antd/dist/antd.css';
import Store from './app/Store';
import {Provider} from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
    <Router>
        <Provider store={Store}>
        <App />
        </Provider>
    </Router>,
     document.getElementById('root'))
