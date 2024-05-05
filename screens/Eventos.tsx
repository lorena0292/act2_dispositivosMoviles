import React from 'react'
import TabCartel from './TabCartel';
import TabInfo from './TabInfo';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function Eventos({route,navigation}) {
  const item=route.params.item
  return (

      <Tab.Navigator      
        screenOptions={{
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: '#F8F8F8',
          tabBarStyle: {
          backgroundColor: 'red',
          },
          tabBarLabelStyle: {
          textAlign: 'center',
          fontSize: 24
         },
          tabBarIndicatorStyle: {
          borderBottomColor: '#87B56A',
          borderBottomWidth: 2,
         },
         }}
      >
          <Tab.Screen
              name="Panel1"
              component={TabCartel}
              initialParams={{item:route.params.item}}
              options={{
              tabBarLabel: 'CARTEL', 
              
              }          
            }
            
              />
          <Tab.Screen
              name="Panel2"
              component={TabInfo}
              initialParams={{item:item}}
              options={{
              tabBarLabel: '+INFO',
            }} />
      </Tab.Navigator>
  )
}