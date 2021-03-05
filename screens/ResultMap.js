import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/Global';
import CustomButton from '../shared/Button';

const ResultMap = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text>Result Map</Text>
      <CustomButton
        title='Go to shop detail'
        color='#fff'
        backgroundColor='#4280AB'
        onPress={() => navigation.navigate('ShopDetail')}
      />
      <Text>Test Something</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultMap;
