import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Profile from '../screens/Profile';
import Header from '../shared/Header';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomUserNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name == 'SignIn') {
            iconName = 'person';
          } else if (route.name == 'SignUp') {
            iconName = 'person-add';
          }

          return <MaterialIcons name={iconName} size={25} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#4280AB',
        inactiveTintColor: '#333',
        style: {
          backgroundColor: '#FFCD41',
        },
      }}
    >
      <Tab.Screen name='SignIn' component={SignIn} />
      <Tab.Screen name='SignUp' component={SignUp} />
    </Tab.Navigator>
  );
};

function UserStackNavigator() {
  return (
    // <NavigationContainer> // Changé après avoir avoir ajouté Drawer navigator
    <Stack.Navigator
      initialRouteName='Register'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FFE082',
        },
        headerTintColor: '#444',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name='BottomUserNavigator'
        component={BottomUserNavigator}
        options={({ navigation }) => {
          return {
            headerLeft: () => (
              <Header navigation={navigation} title='Profile Stach' />
            ),
          };
        }}
      />
      <Stack.Screen name='Profile' component={Profile} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default UserStackNavigator;
