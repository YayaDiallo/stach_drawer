import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/Global';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const ShopResults = () => {
  return (
    <View style={globalStyles.container}>
      <Text>Shop Result</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShopResults;
