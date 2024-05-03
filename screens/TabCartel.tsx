import { Button, View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'


export default function TabCartel({route, navigation}) {
 
  return (
    <View style={styles.container}>
      <Image  style={styles.imagen}
              source={route.params.item.imagenCartel} />
                   
      <Button 
        title="Consige aqui tus entradas"
        onPress={() => navigation.navigate('Registro')}
        />
    </View>

    
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fuente:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    socialLinks: {
      fontSize: 16,
      color: '#fff',
      backgroundColor: '#ff8c00',
      paddingHorizontal: 20,
      paddingVertical: 6,
      borderRadius: 6,
      marginTop:10
  },
  imagen:{
     
      width:400,
      height:400
      
  },

})