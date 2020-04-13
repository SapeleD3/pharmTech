import * as RootNavigation from '../../util/navigate';

import {SIGN_IN_USER, UPDATE_SIGN_IN_STATUS} from './loginActionTypes';
import {call, put, takeEvery} from 'redux-saga/effects';

import {AUTH_USER} from '../../Components/auth/authActionTypes';
import {loginCall} from '../../api/pharm_tech_api';
import setAuthData from '../../Components/auth/utils/setAuthData';

function* signinUserAsync(userData) {
  try {
    const res = yield call(loginCall, userData.payload);
    const data = res.data;
    const decoded = setAuthData(data);
    yield put({type: AUTH_USER, payload: decoded});
    yield put({type: UPDATE_SIGN_IN_STATUS, payload: {}});
    // RootNavigation.navigate('Home');
    if (res.message !== 'success') {
      yield put({
        type: UPDATE_SIGN_IN_STATUS,
        payload: res.message,
      });
    }
  } catch (err) {
    yield put({
      type: UPDATE_SIGN_IN_STATUS,
      payload: 'Something went wrong',
    });
  }
}

export default function* root() {
  yield takeEvery(SIGN_IN_USER, signinUserAsync);
}
