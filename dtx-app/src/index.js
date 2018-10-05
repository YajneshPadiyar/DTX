import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';

import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {store, history} from './store';
//const history = createHistory();

ReactDOM.render(
  (<Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" component={App}/>
      </Switch>
    </Router>
  </Provider>),
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
