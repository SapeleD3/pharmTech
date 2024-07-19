import {
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Card, Text} from 'react-native-elements';
import React, {useState} from 'react';
import {getCategoryCall, getdrugCall} from '../../api/pharm_tech_api';
import {useDispatch, useSelector} from 'react-redux';

import {AUTH_LOGOUT} from '../../Components/auth/authActionTypes';
import AsyncStorage from '@react-native-community/async-storage';
import Cards from '../../Components/Cards';
import {GET_CAT} from '../categoryList/categoryActionTypes';
import {GET_DRUG} from '../drugList/drugActionType';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Loading from '../../Components/Loading';
import SearchBar from '../../Components/SeachBar';
import Spacer from '../../Components/Spacer';
import axios from 'axios';

const HomeScreen = ({navigation}) => {
  const [term, setTerm] = useState('');
  const [drugs, setDrugs] = useState([]);

  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const search = async (val) => {
    if (val === '') {
      return setDrugs([]);
    }
    const response = await axios(
      `https://pharm-tech-api.herokuapp.com/category/search?q=${val}`,
    );
    setDrugs(response.data);
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('jwtToken');
    dispatch({type: AUTH_LOGOUT});
  };
  return authState.loading ? (
    <Loading />
  ) : (
    <View style={styles.bckg}>
      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            handleLogout();
          }}
          title=""
          loading={authState.loading}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            backgroundColor: 'rgb(3, 252, 194)',
            borderRadius: 20,
            marginTop: 15,
            marginLeft: 150,
            width: 60,
            height: 60,
          }}
          raised>
          <Icon name="logout" size={30} color="white" />
        </TouchableOpacity>
        <Spacer />
        <Text style={styles.accountStyle} h5>
          Account Address :{' '}
        </Text>
        {authState.userData.user && (
          <Text style={styles.accountStyle} h5>
            {authState.userData.user.accountAddress}
          </Text>
        )}
        <Spacer />
        <Text style={styles.accountStyle} h5>
          Balance :
        </Text>
        <View style={styles.balCon}>
          <Icon name="ethereum" size={30} color="white" />
          {authState.userData.user ? (
            <Text style={styles.balanceStyle} h5>
              {authState.userData.balance} ETH
            </Text>
          ) : (
            <Text style={styles.balanceStyle}>0 ETH</Text>
          )}
        </View>
        {drugs.length >= 1 && (
          <Card
            containerStyle={{
              marginHorizontal: 20,
            }}>
            <FlatList
              horizontal
              showsVirticalScrollIndicator={false}
              data={drugs}
              keyExtractor={(drugs) => drugs.date}
              renderItem={({item}) => {
                return <Text>{item.categoryName}</Text>;
              }}
            />
          </Card>
        )}
        <SearchBar
          placeholder="Search Drugs"
          term={term}
          onTermSubmit={() => search(term)}
          onTermChange={(newTerm) => {
            setTerm(newTerm);
            search(newTerm);
          }}
        />
        <View style={styles.cards}>
          <Cards
            title="Categories"
            icnName="library-shelves"
            move={() => {
              dispatch({type: GET_CAT});
              getCategoryCall();
              navigation.navigate('CategoryList');
            }}
          />
          <Cards
            title="Drugs"
            icnName="pill"
            move={() => {
              dispatch({type: GET_DRUG});
              getdrugCall();
              navigation.navigate('DrugList');
            }}
          />
        </View>
      </ScrollView>
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
    marginHorizontal: 10,
    marginTop: 15,
  },
  cards: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
