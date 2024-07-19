import {ActivityIndicator, StyleSheet, View} from 'react-native';

import React from 'react';

const Loading = () => {
  return (
    <View style={styles.bckg}>
      <ActivityIndicator size="large" color="rgb(3, 252, 194)" />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  bckg: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
});
