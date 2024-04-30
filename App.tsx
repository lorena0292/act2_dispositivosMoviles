
=======
import Cabecera from './components/Cabecera';
import ConciertosList from './components/ConciertosList';

function App (): React.JSX.Element{

  return(
    <SafeAreaView>
      <View>
      <Cabecera/>
      </View>
      <ConciertosList/>
     
    </SafeAreaView>  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
export default App;




{/*import React from 'react';

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
import ScreenA from './screens/Principal';
import Principal from './screens/Principal';
import Eventos from './screens/Eventos';
import Registro from './screens/Registro';
/*import ScreenC from './screens/ScreenC';
import TituloLogo from './components/TituloLogo';
import TabScreen from './screens/TabScreen';
*/

//Creamos el Native Stack
const Stack = createNativeStackNavigator();


function App(): JSX.Element {

  return ( 

   
     <NavigationContainer>
          <Stack.Navigator 
          initialRouteName="VentanaA"
          screenOptions={{
            headerStyle: {
            //  backgroundColor: '#f4511e',
              backgroundColor: 'green',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          >

            <Stack.Screen name="VentanaA" component={Principal} 
            options={{
              title: 'Ventana principal',
              headerStyle: {
               // backgroundColor: '#f8f8ff',
                  backgroundColor: 'yellow',
              },
              headerTintColor: '#000',
          //    headerTitle: (props) => <TituloLogo titulo='Ventana principal'/>
            }}
            />

          
           <Stack.Screen name="Eventos" component={Eventos} />
           <Stack.Screen name="Registro" component={Registro} />

          </Stack.Navigator>
    </NavigationContainer>
    );
}



export default App; */}

