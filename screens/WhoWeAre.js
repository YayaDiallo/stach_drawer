import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CustomButton from '../shared/Button';
import { globalStyles } from '../styles/Global';

const WhoWeAre = (props) => {
  return (
    <View style={globalStyles.container}>
      <Text>Who We Are</Text>
      <CustomButton
        title='Go back'
        backgroundColor='#4280AB'
        onPress={() => props.navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default WhoWeAre;
