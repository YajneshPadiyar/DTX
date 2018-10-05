import { takeLatest } from 'redux-saga/effects';

import {authencateUser} from '../components/Login/sagaMethods';

export default function* mySaga() {
  yield takeLatest("AUTHENCATE", authencateUser );
}
