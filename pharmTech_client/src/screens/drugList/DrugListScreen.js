import {ADD_DRUG, GET_DRUG} from './drugActionType';
import {Button, Card, Text} from 'react-native-elements';
import {FlatList, Modal, StyleSheet, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {GET_CAT} from '../categoryList/categoryActionTypes';
import Icon from 'react-native-vector-icons/Feather';
import {Picker} from '@react-native-community/picker';
import SearchBar from '../../Components/SeachBar';
import Spacer from '../../Components/Spacer';
import {getdrugCall} from '../../api/pharm_tech_api';

const DrugListScreen = () => {
  const [visibility, setVisibility] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const drugState = useSelector(state => state.drug);
  const catState = useSelector(state => state.category);
  const [drug, setdrug] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: GET_DRUG});
    dispatch({type: GET_CAT});
    getdrugCall();
  }, []);

  console.log(drugState);
  return (
    <View style={styles.bckg}>
      <Spacer />
      <SearchBar placeholder="Search Drugs" />
      <Spacer />
      <Modal animationType="slide" transparent={true} visible={visibility}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text h4>ADD DRUG</Text>
            <Spacer />
            <Picker
              selectedValue={selectedValue}
              style={styles.inputStyle}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }>
              <Picker.Item
                label="Select Category - !!! important"
                value=""
                sty
              />
              {catState.category &&
                catState.category.map(item => (
                  <Picker.Item
                    key={item.id}
                    label={item.catName}
                    value={item.catName}
                  />
                ))}
            </Picker>
            <TextInput
              autoCapitalize="none"
              placeholder="Drug Name"
              autoCorrect={false}
              style={styles.inputStyle}
              value={drug}
              onChangeText={setdrug}
            />
            <View style={{flexDirection: 'row'}}>
              <Button
                onPress={() => {
                  dispatch({
                    type: ADD_DRUG,
                    payload: {content: drug, categoryName: selectedValue},
                  });
                }}
                loading={drugState.loading}
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
        title="Add Drug"
      />
      <Text style={{marginHorizontal: 20, fontSize: 18, color: 'grey'}}>
        Total Drugs Created: {drugState.drug.length}
      </Text>
      <FlatList
        showsVirticalScrollIndicator={false}
        data={drugState.drug}
        keyExtractor={drug => drug.id}
        renderItem={({item}) => {
          return (
            <Card>
              <Text
                style={{fontSize: 18, fontWeight: 'bold', letterSpacing: 1}}>
                Drug: {item.drugName}
              </Text>
              <Text
                style={{fontSize: 18, fontWeight: 'bold', letterSpacing: 1}}>
                Caegory: {item.catName}
              </Text>
            </Card>
          );
        }}
      />
    </View>
  );
};

export default DrugListScreen;

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
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
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
