import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import CustomButton from '../shared/Button';
import Card from '../shared/Card';
import { globalStyles } from '../styles/Global';

const Profile = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text>My Profile</Text>
      <Card>
        <Image
          style={styles.img}
          source={require('../assets/barberShop-1.jpg')}
        />
        <View>
          <Text>GameZone rating: </Text>
        </View>
      </Card>
      <CustomButton
        title='Go back'
        color='#fff'
        backgroundColor='#4280AB'
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    paddingTop: 0,
    resizeMode: 'center',
    height: 200,
    width: 150,
  },
});

export default Profile;
