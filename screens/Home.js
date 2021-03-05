import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../../STACH_frontend/styles/Global';
import CustomButton from '../shared/Button';

const Home = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={styles.brand}>'Stach</Text>
      <View style={styles.choice}>
        <CustomButton
          title='Salon'
          color='#fff'
          backgroundColor='#FFCD41'
          width={150}
          onPress={() => console.log('Salon')}
        />
        <CustomButton
          title='Salon'
          color='#333'
          backgroundColor='#FFECB2'
          width={150}
          onPress={() => console.log('Chez toi')}
        />
      </View>
      <CustomButton
        title='Go to Shop Result'
        color='#fff'
        backgroundColor='#4280AB'
        onPress={() =>
          navigation.navigate('BottomNavigator', { screen: 'ShopResults' })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  brand: {
    textAlign: 'center',
    fontFamily: 'caveat-regular',
    fontSize: 44,
  },
  choice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default Home;
