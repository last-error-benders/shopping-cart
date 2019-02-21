import React from 'react';
import ReactDOM from 'react-dom';
import Shop from './components/Shop';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Shop />
  </Router>
  ,document.getElementById('root')
);
registerServiceWorker();
