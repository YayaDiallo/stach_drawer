import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/Global';
import CustomButton from '../shared/Button';

const BookDetail = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text>Book Details</Text>
      <CustomButton
        title='Go to user stack'
        color='#fff'
        backgroundColor='#4280AB'
        onPress={() => navigation.navigate('Register')}
      />
      {/* <FlatButton title='Go home' onPress={() => navigation.popToTop()} /> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default BookDetail;
