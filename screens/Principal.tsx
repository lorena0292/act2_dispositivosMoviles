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
import Concierto from '../components/Concierto';
import Cabecera from '../components/Cabecera';
//importamos datos
import { DATOS_CONCIERTOS } from '../data/dataConciertos';


function Principal({navigation}): React.JSX.Element{
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
    margin: 32,
    paddingHorizontal: 24,
  }, socialLinks: {
    fontSize: 24,
    textAlign:'center',
    fontWeight: 'bold',
    backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6,
    margin:10
    
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
    margin:30,
    height:230,
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



