// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { Router } from 'react-router';
// import { Route, Switch } from 'react-router-dom';
//
// import './index.css';
// import App from './components/App';
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


import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { HashRouter, Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";
import ReactPixel from "react-facebook-pixel";

import indexRoutes from "./routes/index.jsx";

import "./assets/scss/material-dashboard-pro-react.css";

const hist = createBrowserHistory();

ReactPixel.init("111649226022273");
ReactPixel.pageView();
ReactPixel.fbq("track", "PageView");

ReactGA.initialize("UA-46172202-1");
ReactGA.set({ page: window.location.pathname + window.location.search });
ReactGA.pageview(window.location.pathname + window.location.search);

hist.listen(location => {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);

  ReactPixel.pageView();
  ReactPixel.fbq("track", "PageView");
});

ReactDOM.render(
  <HashRouter>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
