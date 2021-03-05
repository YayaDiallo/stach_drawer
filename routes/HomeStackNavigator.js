import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import Home from '../screens/Home';
import ShopDetail from '../screens/ShopDetail';
import BookDetail from '../screens/BookDetail';
import ResultList from '../screens/ResultList';
import ResultMap from '../screens/ResultMap';
import Header from '../shared/Header';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name == 'List') {
            iconName = 'view-list';
          } else if (route.name == 'Map') {
            iconName = 'location-pin';
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
      <Tab.Screen name='List' component={ResultList} />
      <Tab.Screen name='Map' component={ResultMap} />
    </Tab.Navigator>
  );
};

function HomeStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
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
        name='Home'
        component={Home}
        options={({ navigation }) => {
          return {
            headerLeft: () => <Header navigation={navigation} />,
          };
        }}
      />
      <Stack.Screen
        name='BottomNavigator'
        component={BottomNavigator}
        options={{
          title: 'Shop Results',
        }}
      />
      <Stack.Screen name='ShopDetail' component={ShopDetail} />
      <Stack.Screen name='BookDetail' component={BookDetail} />
    </Stack.Navigator>
  );
}

export default HomeStackNavigator;
