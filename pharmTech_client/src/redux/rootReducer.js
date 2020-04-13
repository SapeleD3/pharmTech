import {authReducer} from '../Components/auth';
import catReducer from '../screens/categoryList/catReducer';
import {combineReducers} from 'redux';
import drugReducers from '../screens/drugList/drugReducers';
import {loginReducer} from '../screens/loginScreen';

export default combineReducers({
  auth: authReducer,
  login: loginReducer,
  drug: drugReducers,
  category: catReducer,
  //   signup: signupReducer,
});
