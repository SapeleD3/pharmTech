import {Button, Input, Text} from 'react-native-elements';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Spacer from '../Components/Spacer';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <View style={styles.parentView}>
      <Text style={styles.loginText} h3>
        PharmTech Sign Up
      </Text>
      <Spacer />
      <Input
        autoCapitalize="none"
        placeholder="Email"
        autoCorrect={false}
        inputContainerStyle={styles.inputStyle}
        value={email}
        onChangeText={setEmail}
        leftIcon={
          <Icon style={styles.iconStyle} name="email" size={30} color="black" />
        }
      />
      <Spacer />
      <Input
        inputContainerStyle={styles.inputStyle}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        leftIcon={<Icon style={styles.iconStyle} name="lock" size={30} />}
      />
      <Spacer />
      <Input
        inputContainerStyle={styles.inputStyle}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        leftIcon={<Icon style={styles.iconStyle} name="lock" size={30} />}
      />
      <Spacer />
      <Button
        buttonStyle={{padding: 10}}
        containerStyle={styles.btnStyle}
        title="Sign Up"
        raised
      />
      <Spacer />
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text
          style={{
            color: '#4388D6',
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Already have an account? Login ..Here
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  parentView: {
    justifyContent: 'center',
    marginBottom: 150,
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
  iconStyle: {
    fontSize: 35,
    marginHorizontal: 10,
  },
});
