import { takeLatest } from 'redux-saga/effects';

import {authencateUser} from '../views/Login/sagaMethods';

export default function* mySaga() {
  yield takeLatest("AUTHENCATE", authencateUser );
}
