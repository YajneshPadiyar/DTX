import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';

import './index.css';
import "./assets/scss/material-kit-react.css?v=1.3.0";
import "./assets/css/material-dashboard-react.css?v=1.4.1";

// import indexRoutes from "./routes/index.jsx";


// import App from './views/App';
// import * as serviceWorker from './serviceWorker';
// import {store, history} from './store';
// //const history = createHistory();
// //console.log(store.getState());
// ReactDOM.render(
//   (<Provider store={store}>
//     <Router history={history}>
//       <Switch>
//         <Route path="/" component={App}/>
//       </Switch>
//     </Router>
//   </Provider>),
//   document.getElementById('root'));
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();


import { createBrowserHistory } from "history";
import "./assets/scss/material-kit-react.css?v=1.3.0";
import "./assets/css/material-dashboard-react.css?v=1.4.1";

// import indexRoutes from "./routes/index.jsx";

import indexRoutes from "./routes/index.jsx";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
  </Router>,
  document.getElementById("root")
);
