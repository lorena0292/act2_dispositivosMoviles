import React from 'react';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Cabecera from '../components/Cabecera';
import ConciertosList from '../components/ConciertosList';

function Principal({ navigation}): React.JSX.Element{

  return(
    <SafeAreaView>
      <View>
      <Cabecera/>
      </View>
    

<TouchableOpacity
        onPress={() => {
          // Devolvemos la nota media actualizada
          navigation.navigate({name: 'Eventos'});
          }}
        >
                <Text style={styles.socialLinks}>CONCIERTOS</Text>
 </TouchableOpacity>



      <ConciertosList/>
     
    </SafeAreaView>  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  }, socialLinks: {
    fontSize: 24,
    textAlign:'center',
    fontWeight: 'bold',
    backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6,
    marginTop:10
    
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
export default Principal;



