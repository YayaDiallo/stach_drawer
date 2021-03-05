import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './HomeStackNavigator';
import Register from './UserStackNavigator';

import WhoWeAre from '../screens/WhoWeAre';
import ContactUs from '../screens/ContactUs';
import PrivacyPolicy from '../screens/PrivacyPolicy';

// Import Temporaire
import ResultList from '../screens/ResultList';
import ResultMap from '../screens/ResultMap';
import ShopResults from '../screens/ShopResults';
import ShopDetail from '../screens/ShopDetail';
import BookDetail from '../screens/BookDetail';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Home'
        drawerStyle={{
          backgroundColor: '#FFFAEB',
        }}
      >
        <Drawer.Screen
          name='Home'
          component={Home}
          options={{ title: 'Accueil' }}
        />
        <Drawer.Screen
          name='List'
          component={ResultList}
          options={{ title: 'Salon List (Temp)' }}
        />
        <Drawer.Screen
          name='Map'
          component={ResultMap}
          options={{ title: 'Salon Map (Temp)' }}
        />
        <Drawer.Screen
          name='ShopDetail'
          component={ShopDetail}
          options={{ title: 'Shop Detail (Temp)' }}
        />
        <Drawer.Screen
          name='BookDetail'
          component={BookDetail}
          options={{ title: 'Book Detail (Temp)' }}
        />
        <Drawer.Screen
          name='Register'
          component={Register}
          options={{ title: 'Se connecter' }}
        />
        <Drawer.Screen
          name='WhoWeAre'
          component={WhoWeAre}
          options={{ title: 'Qui sommes-nous ?' }}
        />
        <Drawer.Screen
          name='ContactUs'
          component={ContactUs}
          options={{ title: 'Contactez-nous' }}
        />
        <Drawer.Screen
          name='PrivacyPplicy'
          component={PrivacyPolicy}
          options={{ title: 'Politique de confidentialité' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
