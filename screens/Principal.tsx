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
  FlatList,
  Pressable,
} from 'react-native';

import Cabecera from '../components/Cabecera';
import ConciertosList from '../components/ConciertosList';
//importamos datos
import { DATOS_CONCIERTOS } from '../data/dataConciertos';

import Concierto from '../components/Concierto';

function Principal({ navigation}): React.JSX.Element{

  return(
    <SafeAreaView>
      <View>
      <Cabecera/>
      </View>
     
     <Text style={styles.tituloTexto}>Conciertos 2024</Text>
          <FlatList style={styles.container}
            data={DATOS_CONCIERTOS}
            keyExtractor={item=>item.id}
            renderItem={({item})=>(
            <Pressable
            onPress={() => {
         
              navigation.navigate( 'Eventos',{item:item});
              }}
            >
            <Concierto concierto={item}/>
            </Pressable>
           
          )}
          
          
          />
        
    </SafeAreaView>  
  
  )
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
  container:{
    paddingHorizontal:16,
    marginBottom:4,
    margin:30,
    height:200,
    backgroundColor:"red",
    padding: 20,
    borderRadius: 10, 
}, tituloTexto:{
  fontSize: 24,
  fontWeight: 'bold',
  paddingHorizontal: 8,
  marginTop:30,
  marginLeft:30
 
}
});
export default Principal;



