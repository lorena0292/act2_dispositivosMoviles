import {  Button,View, Text } from 'react-native'
import React from 'react'
import TabCartel from './TabCartel';
import TabInfo from './TabInfo';

//import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();


export default function Eventos() {
  return (

 

    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#FFFFFF',
      tabBarInactiveTintColor: '#F8F8F8',
      tabBarStyle: {
        backgroundColor: '#633689',
      },
      tabBarLabelStyle: {
        textAlign: 'center',
        fontSize: 12
      },
      tabBarIndicatorStyle: {
        borderBottomColor: '#87B56A',
        borderBottomWidth: 2,
      },
    }}>
    <Tab.Screen
      name="FirstPage"
      component={TabCartel}
      options={{
        tabBarLabel: 'CARTEL',
      }}  />
    <Tab.Screen
      name="SecondPage"
      component={TabInfo}
      options={{
        tabBarLabel: '+INFO',
      }} />
  </Tab.Navigator>

  


  

   /*
    <Tab.Navigator
        initialRouteName="TabA"
        activeColor="#e91e63"
        barStyle={{ backgroundColor: 'powderblue' }}

        >

        <Tab.Screen name="TabA" 
        component={TabA} 
        options={{
            tabBarLabel: 'TabA',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home-alert" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen name="TabB"
        component={TabB} 
        options={{
            tabBarLabel: 'TabB',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="label" color={color} size={26} />
            ),
          }}
        />

<Tab.Screen name="Home" component={TabB} />
    </Tab.Navigator>*/
  )
}