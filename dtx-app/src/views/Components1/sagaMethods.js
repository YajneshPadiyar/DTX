import { put, call } from 'redux-saga/effects';

import { API_END_POINT, API_POST_OPTIONS } from '../../constants/api_config';
import request from '../../utils/request';

export function* authencateUser(action) {
  try{
    const response = yield call(
      request,
      API_END_POINT+action.API_URI,
      {...API_POST_OPTIONS, body: JSON.stringify(action.body)}
    );
    yield put(console.log(response));
  }catch (e) {
    console.log(e)
  }
}
