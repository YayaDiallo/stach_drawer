import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../../STACH_frontend/styles/Global';
import CustomButton from '../shared/Button';

const ResultList = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text>Result List</Text>
      <CustomButton
        title='Go to shop detail'
        color='#fff'
        backgroundColor='#4280AB'
        onPress={() => navigation.navigate('ShopDetail')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultList;
