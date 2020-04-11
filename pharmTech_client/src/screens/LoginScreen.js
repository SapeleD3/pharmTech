import {Button, Input, Text} from 'react-native-elements';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationActions} from 'react-navigation';
import Spacer from '../Components/Spacer';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.parentView}>
      <Text style={styles.loginText} h3>
        PharmTech Login
      </Text>
      <Spacer />
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Email"
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
      <Button
        buttonStyle={{padding: 10}}
        containerStyle={styles.btnStyle}
        title="Login"
        raised
      />
      <Spacer />
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text
          style={{
            color: '#4388D6',
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          No account yet? Sign Up ..Here
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

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
