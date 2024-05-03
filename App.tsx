
import React from 'react';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Principal from './screens/Principal';
import Eventos from './screens/Eventos';
import Registro from './screens/Registro';
import TabCartel from './screens/TabCartel';



//Creamos el Native Stack
const Stack = createNativeStackNavigator();
//Creamos el Drawer
const Drawer = createDrawerNavigator();


function App(): JSX.Element {

  return ( 

   
     <NavigationContainer>
      {/*CONTAINER DEL NAVIGATION*/}
        
          <Stack.Navigator 
          initialRouteName="VentanaA"
          screenOptions={{
            headerStyle: {
            backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          >
            {/*STACK PRINCIPAL*/}
            <Stack.Screen name="VentanaA" component={Principal} 
            options={{
              title: '',
              headerStyle: {
               // backgroundColor: '#f8f8ff',
                  backgroundColor: 'white',
              },
              headerTintColor: '#000',
          //    headerTitle: (props) => <TituloLogo titulo='Ventana principal'/>
            }}
            />

          
           <Stack.Screen name="Eventos" component={Eventos} 
            />
           <Stack.Screen name="Registro" component={Registro} />
          
  

          </Stack.Navigator>
    </NavigationContainer>
    );
}



export default App; 

