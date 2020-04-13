import {applyMiddleware, compose, createStore} from 'redux';

import {sagas as authSagas} from '../Components/auth';
import categorySaga from '../screens/categoryList/sagas';
import createSagaMiddleware from 'redux-saga';
import drugSaga from '../screens/drugList/sagas';
import {sagas as loginSaga} from '../screens/loginScreen';
import rootReducer from './rootReducer';

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(loginSaga);
sagaMiddleware.run(authSagas);
sagaMiddleware.run(categorySaga);
sagaMiddleware.run(drugSaga);

export default store;
