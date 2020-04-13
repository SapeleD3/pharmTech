import * as RootNavigation from '../../util/navigate';

import {
  ADD_DRUG,
  GET_DRUG,
  SET_DRUG,
  UPDATE_DRUG_STATUS,
} from './drugActionType';
import {call, put, takeEvery} from 'redux-saga/effects';
import {getdrugCall, postdrugCall} from '../../api/pharm_tech_api';

import setAuthData from '../../Components/auth/utils/setAuthData';

function* getcategoryAsync() {
  try {
    const res = yield call(getdrugCall, null);
    const data = res.data;
    yield put({type: UPDATE_DRUG_STATUS, payload: {}});
    // RootNavigation.navigate('Home');
    yield put({
      type: SET_DRUG,
      payload: data.drugs,
    });
    if (res.message !== 'success') {
      yield put({
        type: UPDATE_DRUG_STATUS,
        payload: 'something went wrong',
      });
    }
  } catch (err) {
    yield put({
      type: UPDATE_DRUG_STATUS,
      payload: 'Something went wrong',
    });
  }
}

function* postcategoryAsync(userData) {
  try {
    const res = yield call(postdrugCall, userData.payload);
    const data = res.data;
    yield put({type: UPDATE_DRUG_STATUS, payload: {}});
    // RootNavigation.navigate('Home');
    if (res.message == 'success') {
      yield put({
        type: UPDATE_DRUG_STATUS,
        payload: res.message,
      });
      RootNavigation.navigate('Home');
    }
  } catch (err) {
    yield put({
      type: UPDATE_DRUG_STATUS,
      payload: 'Something went wrong',
    });
  }
}

export default function* root() {
  yield takeEvery(GET_DRUG, getcategoryAsync);
  yield takeEvery(ADD_DRUG, postcategoryAsync);
}
