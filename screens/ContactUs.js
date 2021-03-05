import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CustomButton from '../shared/Button';
import { globalStyles } from '../styles/Global';

const ContactUs = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text>Contact Us</Text>
      <CustomButton
        title='Go back'
        color='#fff'
        backgroundColor='#4280AB'
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ContactUs;
