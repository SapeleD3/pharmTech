import * as RootNavigation from '../../util/navigate';

import {
  ADD_CAT,
  GET_CAT,
  SET_CAT,
  UPDATE_CAT_STATUS,
} from './categoryActionTypes';
import {call, put, takeEvery} from 'redux-saga/effects';
import {getCategoryCall, postCategoryCall} from '../../api/pharm_tech_api';

import setAuthData from '../../Components/auth/utils/setAuthData';

function* getcategoryAsync() {
  try {
    const res = yield call(getCategoryCall, null);
    const data = res.data;
    yield put({type: UPDATE_CAT_STATUS, payload: {}});
    // RootNavigation.navigate('Home');
    yield put({
      type: SET_CAT,
      payload: data.categories,
    });
    if (res.message !== 'success') {
      yield put({
        type: UPDATE_CAT_STATUS,
        payload: 'something went wrong',
      });
    }
  } catch (err) {
    yield put({
      type: UPDATE_CAT_STATUS,
      payload: 'Something went wrong',
    });
  }
}

function* postcategoryAsync(userData) {
  try {
    const res = yield call(postCategoryCall, userData.payload);
    const data = res.data;
    yield put({type: UPDATE_CAT_STATUS, payload: {}});
    // RootNavigation.navigate('Home');
    if (res.message == 'success') {
      yield put({
        type: UPDATE_CAT_STATUS,
        payload: res.message,
      });
      RootNavigation.navigate('Home');
    }
  } catch (err) {
    console.log('got to this error', err);
    yield put({
      type: UPDATE_CAT_STATUS,
      payload: 'Something went wrong',
    });
  }
}

export default function* root() {
  yield takeEvery(GET_CAT, getcategoryAsync);
  yield takeEvery(ADD_CAT, postcategoryAsync);
}
