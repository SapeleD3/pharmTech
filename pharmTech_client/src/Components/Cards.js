import {Card, Text, withTheme} from 'react-native-elements';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';

const Cards = ({title, icnName, move}) => {
  return (
    <TouchableOpacity onPress={move}>
      <Card style containerStyle={styles.container}>
        <Icon
          name={icnName}
          size={55}
          color="white"
          style={{alignSelf: 'center', marginTop: 15}}
        />
        <Text
          style={{
            textAlign: 'center',
            margin: 15,
            fontSize: 18,
            color: 'white',
          }}>
          {title}
        </Text>
      </Card>
    </TouchableOpacity>
  );
};

export default Cards;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    height: 150,
    width: 190,
    margin: 20,
    backgroundColor: 'rgb(3, 252, 194)',
  },
});
