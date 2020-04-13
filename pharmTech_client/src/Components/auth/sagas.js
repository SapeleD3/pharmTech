import {AUTH_LOGOUT, AUTH_LOGOUT_USER, GET_USER_DATA} from './authActionTypes';
import {call, fork, put, take, takeEvery} from 'redux-saga/effects';
import {clearLoading, logoutUser, setUserData} from './actions';

import AsyncStorage from '@react-native-community/async-storage';
import {getUserDetails} from './services';
import setAuthToken from './utils/setAuthToken';

const loguserOut = async () => {
  await AsyncStorage.removeItem('jwtToken');
};

function* logOutUser() {
  yield call(logOutUser, null);
  yield call(loguserOut, null);
  setAuthToken(false);
  yield put({type: AUTH_LOGOUT});
}

function* getUserData() {
  try {
    const res = yield call(getUserDetails);
    if (res.data.message === 'success') {
      yield put(setUserData(res.data.data));
      yield put(clearLoading());
    }
  } catch (err) {
    console.log(err);
  }
}

export default function* root() {
  yield takeEvery(AUTH_LOGOUT_USER, logOutUser);
  yield takeEvery(GET_USER_DATA, getUserData);
}
