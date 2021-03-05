import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/Global';
import CustomButton from '../shared/Button';

const SignIn = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text>Sign In</Text>
      <CustomButton
        title='Go profile'
        color='#fff'
        backgroundColor='#4280AB'
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignIn;
