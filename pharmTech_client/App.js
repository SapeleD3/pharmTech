import {
  AUTH_LOGOUT_USER,
  AUTH_USER,
} from './src/Components/auth/authActionTypes';
import {Button, Text} from 'react-native-elements';
import {Provider, useDispatch, useSelector} from 'react-redux';
import React, {useEffect} from 'react';

import AntIcon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-community/async-storage';
import CategoryListScreen from './src/screens/categoryList/CategoryListScreen';
import DrugListScreen from './src/screens/drugList/DrugListScreen';
import HomeScreen from './src/screens/homeScreen/HomeScreen';
import {LoginScreen} from './src/screens/loginScreen';
import {NavigationContainer} from '@react-navigation/native';
import SignupScreen from './src/screens/signupScreen/SignupScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {getUserData} from './src/Components/auth/actions';
import jwtDecode from 'jwt-decode';
import {navigationRef} from './src/util/navigate';
import setAuthToken from './src/Components/auth/utils/setAuthToken';
import store from './src/redux/store';

const Stack = createStackNavigator();

AsyncStorage.getItem('jwtToken').then(token => {
  console.log('call time');
  if (token) {
    setAuthToken(token);
    const decoded = jwtDecode(token);
    store.dispatch({type: AUTH_USER, payload: decoded});
    store.dispatch(getUserData());
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      console.log('expired');
      AsyncStorage.removeItem('jwtToken').then();
      store.dispatch({type: AUTH_LOGOUT_USER});
    }
  }
});

const App = () => {
  const uthstate = useSelector(state => state.auth);
  const state = useSelector(state => state);
  console.log('General state', state);

  return (
    <NavigationContainer ref={navigationRef}>
      {uthstate.isAuthenticated ? (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerTintColor: 'rgb(3, 252, 194)',
              headerTitle: props => (
                <Text
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    marginVertical: 10,
                    letterSpacing: 5,
                  }}
                  h3>
                  PharmTech
                </Text>
              ),
            }}
          />
          <Stack.Screen
            options={{
              headerTintColor: 'rgb(3, 252, 194)',
              headerTitle: props => (
                <Text
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    marginVertical: 10,
                    letterSpacing: 5,
                  }}
                  h3>
                  Categories
                </Text>
              ),
            }}
            name="CategoryList"
            component={CategoryListScreen}
          />
          <Stack.Screen
            options={{
              headerTintColor: 'rgb(3, 252, 194)',
              headerTitle: props => (
                <Text
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    marginVertical: 10,
                    letterSpacing: 5,
                  }}
                  h3>
                  Drugs
                </Text>
              ),
            }}
            name="DrugList"
            component={DrugListScreen}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Login" headerMode="none">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
