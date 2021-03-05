import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CustomButton from '../shared/Button';
import { globalStyles } from '../styles/Global';

const ShopDetail = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text>Shop Detail</Text>
      <CustomButton
        title='Go to book detail'
        color='#fff'
        backgroundColor='#4280AB'
        onPress={() => navigation.navigate('BookDetail')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShopDetail;
