import React from 'react';
import { NavigationContainer}  from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Intro from '../Intro';
import Q1 from '../Links/Q1';
import Home from '../Home';
import contact from '../Links/contact';

const Tab = createMaterialBottomTabNavigator();


export const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#edb313"
      barStyle={{ backgroundColor: '#7c9eb7' }}
    >
      <Tab.Screen
        name="Intro"
        component={Intro}
        options={{
          tabBarLabel: 'Intro',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />  
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Q1"
        component={Q1}
        options={{
          tabBarLabel: 'Questions',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={contact}
        options={{
          tabBarLabel: 'Contact',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="contacts" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}