import { APP_GOTO_PAGE } from '../constants/appConstants';

const defaultState = {
  appName: 'DTX App',
  token: null,
  viewChangeCounter: 0
};


export default(state=defaultState, action) => {
  //console.log(state);
  switch (action.type){
    case APP_GOTO_PAGE:
      return {
        ...state,
        redirectTo: action.path
      };
    default:
      return {state};
  }
}
