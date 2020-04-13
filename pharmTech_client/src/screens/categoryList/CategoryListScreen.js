import {ADD_CAT, GET_CAT} from './categoryActionTypes';
import {Button, Card, Input, Text} from 'react-native-elements';
import {
  FlatList,
  Modal,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {baseApi, getCategoryCall} from '../../api/pharm_tech_api';
import {useDispatch, useSelector} from 'react-redux';

import Icon from 'react-native-vector-icons/Feather';
import SearchBar from '../../Components/SeachBar';
import Spacer from '../../Components/Spacer';

const CategoryListScreen = () => {
  const catState = useSelector(state => state.category);
  const [visibility, setVisibility] = useState(false);
  const [visibility2, setVisibility2] = useState(false);
  const [drugs, setDrugs] = useState([]);
  const [cat, setCat] = useState('');
  const dispatch = useDispatch();

  const getDrugByCat = async catName => {
    try {
      const drugs = await baseApi.get(`/category/allDrugs/${catName}`);
      setDrugs(drugs.data.data);
    } catch (err) {
      console.log('the error ', err.response.data);
    }
  };

  useEffect(() => {
    dispatch({type: GET_CAT});
    getCategoryCall();
  }, []);

  return (
    <View style={styles.bckg}>
      <Spacer />
      <SearchBar placeholder="Search Category" />
      <Spacer />
      <Modal animationType="slide" transparent={true} visible={visibility}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text h4>ADD CATEGORY</Text>
            <Spacer />
            <TextInput
              autoCapitalize="none"
              placeholder="Category Name"
              autoCorrect={false}
              style={styles.inputStyle}
              value={cat}
              onChangeText={setCat}
            />
            <View style={{flexDirection: 'row'}}>
              <Button
                onPress={() => {
                  dispatch({type: ADD_CAT, payload: {content: cat}});
                }}
                loading={catState.loading}
                buttonStyle={{
                  marginTop: 10,
                  marginHorizontal: 5,
                  height: 50,
                  width: 70,
                  backgroundColor: 'rgb(3, 252, 194)',
                }}
                title="Save"
              />
              <Button
                buttonStyle={{
                  marginTop: 10,
                  height: 50,
                  width: 70,
                }}
                title="Close"
                onPress={() => setVisibility(!visibility)}
              />
            </View>
          </View>
        </View>
      </Modal>
      <Modal animationType="slide" transparent={true} visible={visibility2}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text h4>LIST OF DRUGS IN CATEGORY</Text>
            <FlatList
              showsVirticalScrollIndicator={false}
              data={drugs}
              keyExtractor={drug => drug._id}
              renderItem={({item}) => {
                return (
                  <Card containerStyle={{width: 250}}>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        letterSpacing: 1,
                        marginBottom: 10,
                      }}>
                      {item.drugsName}
                    </Text>
                  </Card>
                );
              }}
            />
            <Button
              buttonStyle={{
                marginTop: 10,
                height: 50,
                width: 70,
              }}
              title="Close"
              onPress={() => setVisibility2(!visibility2)}
            />
          </View>
        </View>
      </Modal>
      <Button
        onPress={() => setVisibility(true)}
        icon={() => <Icon name="plus" size={30} color="white" />}
        buttonStyle={{
          width: 150,
          height: 50,
          backgroundColor: 'rgb(3, 252, 194)',
          marginBottom: 20,
          marginHorizontal: 20,
        }}
        title="Add Category"
      />
      <Text style={{marginHorizontal: 20, fontSize: 18, color: 'grey'}}>
        Total Categories Created: {catState.category.length}
      </Text>
      <FlatList
        showsVirticalScrollIndicator={false}
        data={catState.category}
        keyExtractor={cat => cat.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                getDrugByCat(item.catName);
                setVisibility2(true);
              }}>
              <Card>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', letterSpacing: 1}}>
                  {item.catName}
                </Text>
              </Card>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default CategoryListScreen;

const styles = StyleSheet.create({
  bckg: {
    backgroundColor: 'white',
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
  inputStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    padding: 15,
    fontSize: 18,
    marginHorizontal: 20,
    width: 300,
    marginBottom: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 15,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
