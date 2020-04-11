import {Button, Text} from 'react-native-elements';
import React, {useState} from 'react';

import AntIcon from 'react-native-vector-icons/AntDesign';
import CategoryListScreen from './src/screens/CategoryListScreen';
import DrugListScreen from './src/screens/DrugListScreen';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import SignupScreen from './src/screens/SignupScreen';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  const [auth, setAuth] = useState(true);
  return (
    <NavigationContainer>
      {!auth ? (
        <Stack.Navigator initialRouteName="Login" headerMode="none">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Navigator>
      ) : (
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
              headerRight: () => (
                <Button
                  buttonStyle={{
                    marginHorizontal: 25,
                    marginVertical: 10,
                    padding: 10,
                  }}
                  type="clear"
                  icon={
                    <AntIcon name="logout" size={30} color="rgb(3, 252, 194)" />
                  }
                />
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
      )}
    </NavigationContainer>
  );
};

export default () => {
  return <App />;
};
