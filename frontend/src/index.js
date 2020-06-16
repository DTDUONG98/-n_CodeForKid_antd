import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { Route, Router, browserHistory } from '../node_modules/react-router';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css' // css of An design
import 'bootstrap/dist/css/bootstrap.min.css'; // css bootrtrap

// Page 
import Home from './View/Home';
import Login from './View/Login'
import Register from './View/Register' 

ReactDOM.render(
  <BrowserRouter>
  <Route exact path="/" component={Home} />
  <Route exact path="/Login/:id" component={Login} />
  <Route exact path="/Register/:id" component={Register} />
</BrowserRouter>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
