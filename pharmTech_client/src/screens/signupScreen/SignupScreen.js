import {Button, Input, Text} from 'react-native-elements';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Spacer from '../../Components/Spacer';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <View style={styles.parentView}>
      <Spacer />
      <Text style={styles.loginText} h3>
        PharmTech Sign Up
      </Text>
      <Spacer />
      <Input
        autoCapitalize="none"
        inputStyle={{paddingRight: 15, color: 'white'}}
        placeholder="Email"
        placeholderTextColor="white"
        autoCorrect={false}
        inputContainerStyle={styles.backg}
        value={email}
        onChangeText={setEmail}
        leftIcon={
          <Icon style={styles.iconStyle} color="white" name="email" size={30} />
        }
      />
      <Spacer />
      <Input
        inputContainerStyle={styles.backg}
        inputStyle={{paddingRight: 15, color: 'white'}}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Password"
        placeholderTextColor="white"
        value={password}
        onChangeText={setPassword}
        leftIcon={
          <Icon style={styles.iconStyle} color="white" name="lock" size={30} />
        }
      />
      <Spacer />
      <Input
        inputContainerStyle={styles.backg}
        inputStyle={{paddingRight: 15, color: 'white'}}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Confirm Password"
        placeholderTextColor="white"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        leftIcon={
          <Icon style={styles.iconStyle} color="white" name="lock" size={30} />
        }
      />
      <Spacer />
      <Button
        buttonStyle={{padding: 10}}
        containerStyle={styles.btnStyle}
        title="Sign Up"
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
        Already have an account?
      </Text>
      <Spacer />
      <Button
        onPress={() => navigation.navigate('Login')}
        buttonStyle={{padding: 10}}
        containerStyle={styles.btnStyle}
        title="Login"
        raised
      />
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  parentView: {
    justifyContent: 'center',
    marginBottom: 80,
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
  backg: {
    backgroundColor: 'grey',
    height: 50,
    borderRadius: 50,
    marginHorizontal: 20,
    flexDirection: 'row',
    marginTop: 15,
  },
  inputStyle: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
  iconStyle: {
    fontSize: 35,
    marginHorizontal: 5,
  },
});
