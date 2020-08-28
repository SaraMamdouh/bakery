import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './index'
import App from './App';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './../node_modules/jquery/dist/jquery.js';
import './../node_modules/@fortawesome/fontawesome-free/css/fontawesome.css';
import './../node_modules/@fortawesome/fontawesome-free/css/brands.css';
import './../node_modules/@fortawesome/fontawesome-free/css/solid.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Index/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
