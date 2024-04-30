import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

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

export default App;