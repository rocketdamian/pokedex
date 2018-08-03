import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'

import 'axios'
import 'pokeapi-js-wrapper'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
