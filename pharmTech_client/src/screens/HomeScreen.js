import {Button, Text} from 'react-native-elements';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import AntIcon from 'react-native-vector-icons/AntDesign';
import Cards from '../Components/Cards';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Loading from '../Components/Loading';
import SearchBar from '../Components/SeachBar';
import Spacer from '../Components/Spacer';

const HomeScreen = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  return loading ? (
    <Loading />
  ) : (
    <View style={styles.bckg}>
      <Spacer />
      <Text style={styles.accountStyle} h5>
        Account Address :{' '}
      </Text>
      <Text style={styles.accountStyle} h5>
        0x011B2dAb384EB8edabbB738dDfd0bD2e2e258B5B
      </Text>
      <Spacer />
      <Text style={styles.accountStyle} h5>
        Balance :
      </Text>
      <View style={styles.balCon}>
        <Icon name="ethereum" size={30} color="white" />
        <Text style={styles.balanceStyle}>0 ETH</Text>
      </View>
      <Spacer />
      <SearchBar placeholder="Search Drugs" />
      <Spacer />
      <View style={styles.cards}>
        <Cards
          title="Categories"
          icnName="library-shelves"
          move={() => navigation.navigate('CategoryList')}
        />
        <Cards
          title="Drugs"
          icnName="pill"
          move={() => navigation.navigate('DrugList')}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        <Cards title="Categories" icnName="library-shelves" />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  bckg: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
  accountStyle: {
    marginHorizontal: 20,
    textAlign: 'center',
    fontSize: 18,
  },
  balanceStyle: {
    marginHorizontal: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
  balCon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 5,
    backgroundColor: 'rgb(3, 252, 194)',
    height: 50,
    borderRadius: 50,
    marginHorizontal: 20,
    flexDirection: 'row',
    marginTop: 15,
  },
  cards: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
