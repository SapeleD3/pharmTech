import AsyncStorage from '@react-native-community/async-storage';
import jwtDecode from 'jwt-decode';
import setAuthToken from './setAuthToken';

const setAuthData = async data => {
  await AsyncStorage.setItem('jwtToken', data);
  setAuthToken(data);
  const decoded = jwtDecode(data);
  return decoded;
};

export default setAuthData;
