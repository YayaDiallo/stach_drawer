import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/Global';
import CustomButton from '../shared/Button';

const SignUp = (props) => {
  return (
    <View style={globalStyles.container}>
      <Text>Sign Up</Text>
      <CustomButton
        title='Go profile'
        color='#fff'
        backgroundColor='#E6B300'
        onPress={() => props.navigation.navigate('Profile')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignUp;
