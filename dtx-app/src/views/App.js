import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { store } from '../store';
import { push } from 'react-router-redux';

import LandingPage from './LandingPage';
import Components1 from './Components1';
import Login from './Login';
import CreateAccount from './CreateAccount';
import Home from './Home';
import UserProfile from './UserProfile/UserProfile.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import Attendance from './Attendance/Attendance.jsx';
import Upgradetopro from './UpgradeToPro/UpgradeToPro.jsx';
import Notifications from './Notifications/Notifications.jsx';

import {
  DEFAULT_PAGE_PATH,
  COMPONENTS1_PAGE_PATH,
  LOGIN_PAGE_PATH,
  CRAETE_ACCOUNT_PAGE_PATH,
  HOME_PAGE_PATH,
  PROFILE_PAGE_PATH,
  ATTENDANCE_PAGE_PATH,
  NOTIFICATIONS_PAGE_PATH,
  UPGRADETOPRO_PAGE_PATH
} from '../constants/appConstants';

const REDIRECT = "";

class App extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      // this.context.router.replace(nextProps.redirectTo);
      store.dispatch(push(nextProps.redirectTo));
      this.props.onRedirect();
    }
    //console.log("Next Props");
    if(nextProps.appPath){
      //const newTitle = APP_TITLE_LIST[nextProps.appPath];
    //  store.dispatch({type:APP_UPDATE_TITLE, newTitle: newTitle});
      //document.title = newTitle;
    }//*/
  }

  componentWillMount() {
    const token = window.localStorage.getItem('jwt');
    if (token) {
      //agent.setToken(token);
    }
    //document.title = APP_TITLE_LIST[this.props.appPath];
    //this.props.onLoad(token ? agent.Auth.current() : null, token);
  }
  render() {
    //console.log(this.props.pathname);
    return (
      <div>
        <Switch>
          <Route exact path={DEFAULT_PAGE_PATH} component={LandingPage}/>
		      <Route exact path={COMPONENTS1_PAGE_PATH} component={Components1}/>
          <Route exact path={LOGIN_PAGE_PATH} component={Login}/>
          <Route exact path={CRAETE_ACCOUNT_PAGE_PATH} component={CreateAccount}/>
          <Route exact path={HOME_PAGE_PATH} component={Home}/>
          // <Route exact path={DEFAULT_PAGE_PATH} component={Dashboard}/>
          // <Route exact path={PROFILE_PAGE_PATH} component={UserProfile}/>
          // <Route exact path={ATTENDANCE_PAGE_PATH} component={Attendance}/>
          // <Route exact path={NOTIFICATIONS_PAGE_PATH} component={Notifications}/>
          // <Route exact path={UPGRADETOPRO_PAGE_PATH} component={Upgradetopro}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    appLoaded: state.common.appLoaded=true,
    appName: state.common.appName,
    currentUser: state.common.currentUser,
    redirectTo: state.common.redirectTo,
    appPath: state.router.location
  }
};

const mapDispatchToProps = dispatch => ({
  onRedirect: () => dispatch({ type: REDIRECT})
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
