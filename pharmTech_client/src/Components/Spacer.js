import {StyleSheet, Text, View} from 'react-native';

import React from 'react';

const Spacer = ({children}) => {
  return <View style={styles.Spacer}>{children}</View>;
};

export default Spacer;

const styles = StyleSheet.create({
  Spacer: {
    margin: 15,
  },
});
