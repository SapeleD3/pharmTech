import {Button, Input, Text} from 'react-native-elements';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Loading from '../../Components/Loading';
import {SIGN_IN_USER} from './loginActionTypes';
import Spacer from '../../Components/Spacer';
import {baseApi} from '../../api/pharm_tech_api';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const loginState = useSelector(state => state.login);

  const handleSubmit = async () => {
    dispatch({type: SIGN_IN_USER, payload: {email, password}});
  };

  return (
    <View style={styles.parentView}>
      <Text style={styles.loginText} h3>
        PharmTech Login
      </Text>
      <Spacer />
      {loginState.error.email && (
        <Text style={{color: 'red', marginHorizontal: 35, fontSize: 17}}>
          {loginState.error.email}
        </Text>
      )}
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        inputStyle={{paddingRight: 15, color: 'white'}}
        placeholder="Email"
        placeholderTextColor="white"
        inputContainerStyle={styles.backg}
        value={email}
        onChangeText={setEmail}
        leftIcon={
          <Icon style={styles.iconStyle} name="email" size={30} color="white" />
        }
      />
      <Spacer />
      {loginState.error.password && (
        <Text style={{color: 'red', marginHorizontal: 35, fontSize: 17}}>
          {loginState.error.email}
        </Text>
      )}
      <Input
        inputContainerStyle={styles.backg}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        inputStyle={{paddingRight: 15, color: 'white'}}
        placeholder="Password"
        placeholderTextColor="white"
        value={password}
        onChangeText={setPassword}
        leftIcon={
          <Icon style={styles.iconStyle} color="white" name="lock" size={30} />
        }
      />
      <Spacer />
      <Button
        buttonStyle={{padding: 10}}
        containerStyle={styles.btnStyle}
        title="Login"
        loading={loginState.loading}
        onPress={handleSubmit}
        raised
      />
      <Spacer />
      <Text
        style={{
          color: '#4388D6',
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        No account yet?
      </Text>
      <Spacer />
      <Button
        onPress={() => navigation.navigate('Signup')}
        buttonStyle={{padding: 10}}
        containerStyle={styles.btnStyle}
        title="Sign Up"
        raised
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  parentView: {
    justifyContent: 'center',
    marginBottom: 100,
    flex: 1,
  },
  btnStyle: {
    marginHorizontal: 50,
  },
  loginText: {
    marginHorizontal: 15,
    letterSpacing: 3,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputStyle: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
  backg: {
    backgroundColor: 'grey',
    height: 50,
    borderRadius: 50,
    marginHorizontal: 20,
    flexDirection: 'row',
    marginTop: 15,
  },
  iconStyle: {
    fontSize: 35,
    marginHorizontal: 10,
  },
});
