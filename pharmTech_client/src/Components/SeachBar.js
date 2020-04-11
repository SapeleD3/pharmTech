import {StyleSheet, Text, TextInput, View} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import React from 'react';

const SeachBar = ({term, onTermChange, onTermSubmit, placeholder}) => {
  return (
    <View style={styles.backg}>
      <Icon style={styles.iconStyle} name="search" size={25} color="#03fcc2" />
      <TextInput
        style={styles.inputStyle}
        // value={term}
        // onChangeText={newTerm => onTermChange(newTerm)}
        placeholder={placeholder}
        autoCapitalize="none"
        autoCorrect={false}
        // onEndEditing={() => onTermSubmit()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backg: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 50,
    marginHorizontal: 20,
    flexDirection: 'row',
    marginTop: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

export default SeachBar;
